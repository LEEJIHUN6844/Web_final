"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import RepoGrid from "@/components/repo-grid";
import { Github, Globe, Triangle, Users } from "lucide-react";
import { motion } from "framer-motion"; // [추가] 애니메이션을 위해 import

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
      html_url: "https://web-final-five-sigma.vercel.app",
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

  // 애니메이션 설정값
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* [애니메이션 추가] 팀 프로젝트 페이지 이동 버튼 */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Header 이후 0.2초 뒤 시작
          >
            <Link
              href="/team"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              <span>팀 프로젝트 & 팀원 소개 보러가기</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>

          {/* [애니메이션 추가] My Projects 제목 */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">
              My Projects
            </h2>
            <p className="text-muted-foreground">
              작업한 GitHub 레포지토리와 Vercel 배포 프로젝트를 확인해보세요.
            </p>
          </motion.div>

          {/* [애니메이션 추가] 탭 버튼 */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>

          {/* [애니메이션 추가] 로딩, 에러, 그리드 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
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
          </motion.div>
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
