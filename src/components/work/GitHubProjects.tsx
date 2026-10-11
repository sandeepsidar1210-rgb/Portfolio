import { getPublicRepositories } from "@/utils/github";
import { GitHubProjectsClient } from "@/components/work/GitHubProjectsClient";

export async function GitHubProjects() {
  const repositories = await getPublicRepositories();

  return <GitHubProjectsClient repositories={repositories} />;
}
