"use client";

import { Column, Flex } from "@once-ui-system/core";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { GitHubProjectCard } from "@/components/work/GitHubProjectCard";
import type { GitHubRepository } from "@/utils/github";

export function GitHubProjectsClient({ repositories }: { repositories: GitHubRepository[] }) {
  const [activeLanguage, setActiveLanguage] = useState("All");
  const languages = useMemo(
    () => Array.from(new Set(repositories.map((repository) => repository.language).filter(Boolean))).sort() as string[],
    [repositories],
  );
  const filteredRepositories = activeLanguage === "All"
    ? repositories
    : repositories.filter((repository) => repository.language === activeLanguage);

  return (
    <>
      <Flex className="github-project-filters" gap="8" wrap={false} aria-label="Filter projects by language">
        {["All", ...languages].map((language) => (
          <button
            className={`github-project-filter ${activeLanguage === language ? "github-project-filter--active" : ""}`}
            key={language}
            type="button"
            onClick={() => setActiveLanguage(language)}
            aria-pressed={activeLanguage === language}
          >
            {language}
          </button>
        ))}
      </Flex>
      <Column className="github-project-grid" fillWidth marginBottom="40" paddingX="l">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredRepositories.map((repository, index) => (
            <motion.div
              key={repository.html_url}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, delay: index * 0.04 }}
            >
              <GitHubProjectCard repository={repository} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Column>
    </>
  );
}
