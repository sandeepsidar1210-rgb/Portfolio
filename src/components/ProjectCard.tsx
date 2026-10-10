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
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  content,
  description,
  link,
}) => {
  return (
    <Column
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
            <Heading as="h2" wrap="balance" variant="heading-strong-l">
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
          <Flex gap="20" wrap>
            {content?.trim() && (
              <SmartLink href={href} style={{ margin: "0", width: "fit-content" }}>
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            )}
            {link && (
              <SmartLink href={link} style={{ margin: "0", width: "fit-content" }}>
                <Text variant="body-default-s">GitHub</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
