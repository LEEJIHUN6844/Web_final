"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import RepoGrid from "@/components/repo-grid";
import { Github, Globe, Triangle } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState<"github" | "vercel">("github");

  const vercelProjects: Repo[] = [
    {
      id: 99901,
      name: "clerk-app",
      description: "Clerk 인증 서비스를 연동한 Next.js 애플리케이션입니다.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,

      html_url: "https://clerk-app-orcin.vercel.app",
    },
    {
      id: 99902,
      name: "web_middle (Portfolio)",
      description: "중간고사 제출 포트폴리오 웹사이트입니다.",
      language: "Next.js",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://web-middle-roan.vercel.app",
    },
    {
      id: 99903,
      name: "crud_project",
      description: "crud 기능을 구현한 Next.js 애플리케이션입니다.",
      language: "Next.js",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://crud-woad-five.vercel.app",
    },
    {
      id: 99904,
      name: "Web_final",
      description: "현재 보고 계신 최종 포트폴리오 웹사이트입니다.",
      language: "Next.js",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://web-final-indol.vercel.app",
    },
    {
      id: 99905,
      name: "shopping",
      description: "쇼핑몰 사이트입니다",
      language: "Next.js",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://shopping-navy-five.vercel.app",
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/LEEJIHUN6844/repos"
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();

        const sortedData = data.sort(
          (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const displayData = activeTab === "github" ? repos : vercelProjects;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              My Projects
            </h2>
            <p className="text-muted-foreground">
              작업한 GitHub 레포지토리와 Vercel 배포 프로젝트를 확인해보세요.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-secondary rounded-full border border-border">
              <button
                onClick={() => setActiveTab("github")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "github"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-black/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Github size={16} />
                GitHub Repos
              </button>
              <button
                onClick={() => setActiveTab("vercel")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "vercel"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-black/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Triangle size={16} className="fill-current" />
                Vercel Projects
              </button>
            </div>
          </div>

          {activeTab === "github" && loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">
                Loading repositories...
              </p>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive text-center">
              {error}
            </div>
          )}

          {(!loading || activeTab === "vercel") && !error && (
            <RepoGrid key={activeTab} repos={displayData} />
          )}

          {(!loading || activeTab === "vercel") &&
            !error &&
            displayData.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                표시할 프로젝트가 없습니다.
              </div>
            )}
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Lee Ji-hun | Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
