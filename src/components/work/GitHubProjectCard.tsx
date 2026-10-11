"use client";

import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, type CSSProperties, type MouseEvent } from "react";
import type { GitHubRepository } from "@/utils/github";

function formatRepositoryName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="m8 1.25 2.08 4.2 4.64.67-3.36 3.28.79 4.62L8 11.84l-4.15 2.18.79-4.62L1.28 6.12l4.64-.67L8 1.25Z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="5" cy="3.25" r="1.75" />
      <circle cx="11" cy="12.75" r="1.75" />
      <circle cx="11" cy="3.25" r="1.75" />
      <path d="M5 5v2.25a3 3 0 0 0 3 3h3M11 5v2" />
    </svg>
  );
}

export function GitHubProjectCard({ repository, index }: { repository: GitHubRepository; index: number }) {
  const description = repository.description?.trim() || "Public repository on GitHub.";
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [16, -16]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-16, 16]), { stiffness: 150, damping: 15 });
  const spotlightX = useSpring(useTransform(pointerX, [0, 1], ["0%", "100%"]), { stiffness: 150, damping: 15 });
  const spotlightY = useSpring(useTransform(pointerY, [0, 1], ["0%", "100%"]), { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  }, []);

  const resetTilt = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      className="github-project-card"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        "--mouse-x": spotlightX,
        "--mouse-y": spotlightY,
      } as CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
    >
      <div className="github-project-card__spotlight" aria-hidden="true" />
      <Column className="github-project-card__body" gap="12">
        <Heading className="github-project-card__title text-2xl font-bold mb-2" as="h2" wrap="balance" variant="heading-strong-l">
          {formatRepositoryName(repository.name)}
        </Heading>
        <Text className="github-project-card__description text-base leading-relaxed text-gray-600 dark:text-gray-400 mt-2" wrap="balance" variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
      </Column>
      <Flex className="github-project-card__meta" gap="12" wrap>
        {repository.language && <span className="project-tech-pill text-sm px-3 py-1.5">{repository.language}</span>}
        <span className="github-project-card__metric text-sm"><StarIcon /> {repository.stargazers_count} Stars</span>
        <span className="github-project-card__metric text-sm"><ForkIcon /> {repository.forks_count} Forks</span>
      </Flex>
      <Flex className="github-project-card__actions" gap="8" wrap>
        <SmartLink className="github-project-card__action" href={repository.html_url} target="_blank" rel="noreferrer">
          <Text variant="body-default-s" className="font-medium">Source code ↗</Text>
        </SmartLink>
        {repository.homepage?.trim() && (
          <SmartLink className="github-project-card__action" href={repository.homepage} target="_blank" rel="noreferrer">
            <Text variant="body-default-s" className="font-medium">Live demo ↗</Text>
          </SmartLink>
        )}
      </Flex>
    </motion.div>
  );
}
