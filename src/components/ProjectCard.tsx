"use client";

import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images?: string[];
  title: string;
  content: string;
  description: string;
  avatars?: { src: string }[];
  link: string;
  liveLink?: string;
  techStack?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  content,
  description,
  link,
  liveLink,
  techStack = [],
}) => {
  return (
    <Column
      className="project-row"
      fillWidth
      gap="12"
      paddingY="20"
      borderBottom="neutral-alpha-weak"
    >
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="0"
        gap="8"
      >
        {title && (
          <Flex>
            <Heading className="project-row__title" as="h2" wrap="balance" variant="heading-strong-l">
              {title}
            </Heading>
          </Flex>
        )}
        <Column gap="12">
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {techStack.length > 0 && (
            <Flex className="project-row__stack" gap="8" wrap>
              {techStack.map((technology) => (
                <span className="project-tech-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </Flex>
          )}
          <Flex gap="20" wrap>
            {content?.trim() && (
              <SmartLink className="project-action" href={href} style={{ margin: "0", width: "fit-content" }}>
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            )}
            {liveLink && (
              <SmartLink className="project-action project-action--accent" href={liveLink} style={{ margin: "0", width: "fit-content" }}>
                <Text variant="body-default-s">Live demo ↗</Text>
              </SmartLink>
            )}
            {link && (
              <SmartLink className="project-action" href={link} style={{ margin: "0", width: "fit-content" }}>
                <Text variant="body-default-s">Source code ↗</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
