import { NextResponse } from 'next/server';

// Define types
type Repo = {
  name: string;
  description: string;
  owner: string;
  id: string;
};

type Issue = {
  title: string;
  number: number;
  url: string;
  openedBy: string;
  openedAt: string;
  repo: Repo;
};

type OpenIssuesData = {
  type: 'open-issues';
  data: {
    issues: Issue[];
    totalCount: number;
  };
};

type RepoData = {
  type: 'repos';
  data: {
    repos: Repo[];
    totalCount: number;
  };
};

type EmptyData = {
  type: 'empty';
};

// Mock data
const mockRepos: Repo[] = [
  {
    name: 'agent-farm',
    description: 'A platform for AI agents to work on GitHub issues',
    owner: 'codestoryai',
    id: 'agent-farm'
  },
  {
    name: 'cursor',
    description: 'An AI-first code editor',
    owner: 'getcursor',
    id: 'cursor'
  },
  {
    name: 'react',
    description: 'A JavaScript library for building user interfaces',
    owner: 'facebook',
    id: 'react'
  }
];

const mockIssues: Issue[] = [
  {
    title: 'Fix navigation bug in mobile view',
    number: 42,
    url: 'https://github.com/codestoryai/agent-farm/issues/42',
    openedBy: 'user123',
    openedAt: '2023-10-15T14:30:00Z',
    repo: mockRepos[0]
  },
  {
    title: 'Improve error handling in API calls',
    number: 37,
    url: 'https://github.com/codestoryai/agent-farm/issues/37',
    openedBy: 'dev456',
    openedAt: '2023-10-14T09:15:00Z',
    repo: mockRepos[0]
  },
  {
    title: 'Add dark mode support',
    number: 28,
    url: 'https://github.com/codestoryai/agent-farm/issues/28',
    openedBy: 'designer789',
    openedAt: '2023-10-12T16:45:00Z',
    repo: mockRepos[0]
  },
  {
    title: 'Update documentation for new features',
    number: 21,
    url: 'https://github.com/codestoryai/agent-farm/issues/21',
    openedBy: 'writer101',
    openedAt: '2023-10-10T11:20:00Z',
    repo: mockRepos[0]
  },
  {
    title: 'Optimize database queries for better performance',
    number: 15,
    url: 'https://github.com/codestoryai/agent-farm/issues/15',
    openedBy: 'dbexpert',
    openedAt: '2023-10-08T13:10:00Z',
    repo: mockRepos[0]
  }
];

export async function GET(request: Request) {
  // Get the data type from the URL query parameter
  const { searchParams } = new URL(request.url);
  const dataType = searchParams.get('type') || Math.random() > 0.6 ? 'open-issues' : Math.random() > 0.5 ? 'repos' : 'empty';
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate error if specified
  if (searchParams.get('error') === 'true') {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
  
  // Return different data based on the type
  switch (dataType) {
    case 'open-issues':
      const openIssuesData: OpenIssuesData = {
        type: 'open-issues',
        data: {
          issues: mockIssues,
          totalCount: mockIssues.length
        }
      };
      return NextResponse.json(openIssuesData);
      
    case 'repos':
      const repoData: RepoData = {
        type: 'repos',
        data: {
          repos: mockRepos,
          totalCount: mockRepos.length
        }
      };
      return NextResponse.json(repoData);
      
    case 'empty':
      const emptyData: EmptyData = {
        type: 'empty'
      };
      return NextResponse.json(emptyData);
      
    default:
      return NextResponse.json({ error: 'Invalid data type' }, { status: 400 });
  }
} 