const repositoriesUrl =
  "https://api.github.com/users/sandeepsidar1210-rgb/repos?sort=updated&per_page=100";

export type GitHubRepository = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
};

export async function getPublicRepositories(): Promise<GitHubRepository[]> {
  const response = await fetch(repositoriesUrl, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub repository request failed with status ${response.status}`);
  }

  const repositories: unknown = await response.json();

  if (!Array.isArray(repositories)) {
    throw new Error("GitHub repository request returned an unexpected response");
  }

  return repositories.filter(isGitHubRepository);
}

function isGitHubRepository(repository: unknown): repository is GitHubRepository {
  if (!repository || typeof repository !== "object") {
    return false;
  }

  const candidate = repository as Record<string, unknown>;

  return (
    typeof candidate.name === "string" &&
    (candidate.description === null || typeof candidate.description === "string") &&
    (candidate.language === null || typeof candidate.language === "string") &&
    typeof candidate.html_url === "string" &&
    (candidate.homepage === null || typeof candidate.homepage === "string") &&
    typeof candidate.stargazers_count === "number" &&
    typeof candidate.forks_count === "number"
  );
}
