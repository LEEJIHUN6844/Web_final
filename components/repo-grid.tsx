"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink, Folder } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

interface RepoGridProps {
  repos: Repo[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RepoGrid({ repos }: RepoGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {repos.map((repo) => (
        <motion.div key={repo.id} variants={item}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full"
          >
            {/* Gradient Glow Effect Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />

            {/* Card Content */}
            <div className="relative h-full bg-card dark:bg-zinc-900 border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  <Folder size={24} />
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                  {repo.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5em]">
                  {repo.description ||
                    "No description available for this project."}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                {repo.language ? (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {repo.language}
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    No Language
                  </span>
                )}

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                    <Star size={16} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                    <GitBranch size={16} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
