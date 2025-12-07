"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Globe, Users, Code, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/ui/spotlight-card"; // 새로 만든 컴포넌트 임포트

// 팀 프로젝트 정보
const teamProject = {
  title: "Security News",
  description:
    "네이버 검색 API를 활용한 보안 뉴스 검색 웹사이트입니다. 필터링 기능과 회원가입, 로그인, 북마크, 토론 기능을 제공합니다.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "React Query",
    "Naver Search API",
    "Node.js",
  ],
  repoUrl: "https://github.com/LEEJIHUN6844/Web_Server_Team",
  deployUrl: "https://security-news-258137341860.asia-northeast1.run.app/",
};

const teamMembers = [
  {
    name: "김서진",
    role: "92212764/ Team Leader",
    bio: "개인 포트폴리오 보러가기 ↓",
    github: " https://webserver-final-portfolio.vercel.app/",
    imageUrl: "/images/kimseojin.jpg",
  },
  {
    name: "박한빈",
    role: "922128677",
    bio: "개인 포트폴리오 보러가기 ↓",
    github: "https://2025-2-mypage.vercel.app/",
    imageUrl: "/images/parkhanbin.jpg",
  },
  {
    name: "이지훈",
    role: "92213031",
    bio: "개인 포트폴리오 보러가기 ↓",
    github: "https://web-final-five-sigma.vercel.app",
    imageUrl: "/images/leejihun.jpg",
  },
  {
    name: "윤주혁",
    role: "924108477",
    bio: "개인 포트폴리오 보러가기 ↓",
    github: "https://web-server-final-theta.vercel.app/",
    imageUrl: "/images/younjuhyeok.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// 무한 스크롤 애니메이션 설정
const marqueeVariants = {
  animate: {
    x: [0, -500], // 이동 거리 (아이템 길이에 따라 조절 필요할 수 있음)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function TeamPage() {
  return (
    // 1. 오로라 배경 애니메이션 적용 (animate-aurora)
    <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 animate-aurora">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>메인으로 돌아가기</span>
        </Link>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* 헤더 섹션 */}
          <motion.div variants={item} className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-2">
              <Users size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">철야의 코딩</h1>
            <p className="text-xl text-muted-foreground">
              함께 성장하는 우리 팀을 소개합니다.
            </p>
          </motion.div>

          {/* 팀 프로젝트 섹션 */}
          <motion.div variants={item}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Code className="text-primary" />
                    {teamProject.title}
                  </h2>
                </div>
                <div className="flex gap-3">
                  <a
                    href={teamProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    Repository
                  </a>
                  <a
                    href={teamProject.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10">
                {teamProject.description}
              </p>

              {/* 2. 기술 스택 무한 스크롤 (Marquee) 적용 */}
              <div className="relative z-10">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  Tech Stack
                </h3>
                <div className="overflow-hidden w-full mask-linear-gradient">
                  <motion.div
                    className="flex gap-3 whitespace-nowrap"
                    variants={marqueeVariants}
                    animate="animate"
                  >
                    {/* 끊김 없는 스크롤을 위해 리스트를 여러 번 반복 */}
                    {[
                      ...teamProject.techStack,
                      ...teamProject.techStack,
                      ...teamProject.techStack,
                      ...teamProject.techStack,
                    ].map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-base py-1.5 px-4"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 팀원 소개 섹션 */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold mb-6">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <motion.div key={idx} variants={item} className="h-full">
                  {/* 3. SpotlightCard 적용 (마우스 따라다니는 빛 효과) */}
                  <SpotlightCard className="h-full p-6 flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-2 border-secondary bg-secondary flex items-center justify-center z-10">
                      {member.imageUrl ? (
                        <Image
                          src={member.imageUrl}
                          alt={`${member.name} 프로필`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      ) : (
                        <User size={40} className="text-secondary-foreground" />
                      )}
                    </div>

                    <h4 className="text-lg font-bold z-10">{member.name}</h4>
                    <p className="text-sm text-primary font-medium mb-2 z-10">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[1.25rem] z-10">
                      {member.bio}
                    </p>

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto text-muted-foreground hover:text-foreground transition-colors z-10"
                        title={
                          member.github.includes("github.com")
                            ? "GitHub Profile"
                            : "Personal Portfolio"
                        }
                      >
                        {member.github.includes("github.com") ? (
                          <Github size={20} />
                        ) : (
                          <Globe size={20} />
                        )}
                      </a>
                    )}
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
