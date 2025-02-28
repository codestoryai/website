export type Repo = {
  name: string;
  description: string;
  owner: string;
  id: string;
};

export type Issue = {
  title: string;
  number: number;
  url: string;
  openedBy: string;
  openedAt: string;
  repo: Repo;
};

export type OpenIssuesData = {
  type: 'open-issues';
  data: {
    issues: Issue[];
    totalCount: number;
  };
};

export type RepoData = {
  type: 'repos';
  data: {
    repos: Repo[];
    totalCount: number;
  };
};

export type EmptyData = {
  type: 'empty';
};

export type TasksData = OpenIssuesData | RepoData | EmptyData; 