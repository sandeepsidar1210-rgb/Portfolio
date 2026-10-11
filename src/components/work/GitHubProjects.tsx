import { Column } from "@once-ui-system/core";
import { getPublicRepositories } from "@/utils/github";
import { GitHubProjectCard } from "@/components/work/GitHubProjectCard";

export async function GitHubProjects() {
  const repositories = await getPublicRepositories();

  return (
    <Column className="github-project-grid" fillWidth marginBottom="40" paddingX="l">
      {repositories.map((repository, index) => (
        <GitHubProjectCard key={repository.html_url} repository={repository} index={index} />
      ))}
    </Column>
  );
}
