"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Layers, Terminal } from "lucide-react";

export default function Header() {
  const techStack = [
    { name: "Next.js", icon: Globe },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Node.js", icon: Database },
  ];

  // 무한 스크롤 애니메이션 설정
  const marqueeVariants = {
    animate: {
      x: ["0%", "-25%"], // 데이터가 4번 반복되므로 25%만큼 이동하면 처음과 자연스럽게 이어짐
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // 속도 조절 (숫자가 클수록 느려짐)
          ease: "linear",
        },
      },
    },
  };

  return (
    <header className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* 배경 그라디언트 효과 (Glassmorphism 느낌 강화) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-6 py-1.5 px-4 text-sm border-primary/30 bg-primary/5 text-primary backdrop-blur-md"
          >
            👋 안녕하세요, 이지훈입니다
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground mb-6 text-balance"
        >
          Creative{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Developer
          </span>
          <br />
          Who Loves Code
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty"
        >
          사용자 경험을 최우선으로 생각하며,{" "}
          <span className="font-semibold text-foreground">
            멋쟁이사자처럼 13기
          </span>
          에서
          <br /> 풀스택 개발 역량을 키우고 있습니다.
        </motion.p>

        {/* Tech Stack 섹션 - 무한 스크롤 적용 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* 양옆을 흐리게 해주는 마스크 효과 */}
          <div className="overflow-hidden w-full mask-linear-gradient p-2">
            <motion.div
              className="flex gap-4 w-max"
              variants={marqueeVariants}
              animate="animate"
            >
              {/* 리스트를 4번 반복하여 끊김 없는 스크롤 구현 */}
              {[...techStack, ...techStack, ...techStack, ...techStack].map(
                (tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 dark:bg-white/5 border border-border/50 backdrop-blur-sm shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 cursor-default"
                  >
                    <tech.icon size={18} className="text-primary" />
                    <span className="text-sm font-semibold whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
