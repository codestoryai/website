'use client';

import { useState, useEffect } from 'react';
import { TasksData, OpenIssuesData, RepoData, EmptyData, Issue } from '@/app/types/github';
import { Button } from './ui/button';
import { EmptyDataView, RepoDataView, OpenIssuesView } from '@/components/github/TaskViews';

// GitHub styling
const githubFont = 'apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

// Mock data for direct rendering without API calls
const mockRepos = [
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

const mockIssues = [
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

export function TasksDemo() {
  const [dataType, setDataType] = useState<string>('open-issues');
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState<TasksData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<Set<number>>(new Set());

  // Create the appropriate data object based on the selected type
  const createData = (type: string): TasksData => {
    switch (type) {
      case 'open-issues':
        return {
          type: 'open-issues',
          data: {
            issues: mockIssues,
            totalCount: mockIssues.length
          }
        };
      case 'repos':
        return {
          type: 'repos',
          data: {
            repos: mockRepos,
            totalCount: mockRepos.length
          }
        };
      case 'empty':
        return {
          type: 'empty'
        };
      default:
        // Random selection for 'random' type
        const randomType = Math.random() > 0.6 ? 'open-issues' : Math.random() > 0.5 ? 'repos' : 'empty';
        return createData(randomType);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (showError) {
        // Simulate an error
        throw new Error('Simulated error for demo purposes');
      }
      
      // Create the appropriate data object based on the selected type
      const result = createData(dataType);
      setData(result);
      
      // Pre-select the first three issues if we have open issues
      if (result.type === 'open-issues') {
        const newSelected = new Set<number>();
        (result as OpenIssuesData).data.issues.slice(0, 3).forEach((issue: Issue) => {
          newSelected.add(issue.number);
        });
        setSelectedIssues(newSelected);
      } else {
        // Clear selected issues for other data types
        setSelectedIssues(new Set());
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataType, showError]);

  const handleFetchData = (type: string, error: boolean = false) => {
    setDataType(type);
    setShowError(error);
  };

  const toggleIssue = (issueNumber: number) => {
    const newSelected = new Set(selectedIssues);
    if (newSelected.has(issueNumber)) {
      newSelected.delete(issueNumber);
    } else {
      newSelected.add(issueNumber);
    }
    setSelectedIssues(newSelected);
  };

  const handleStartAgent = () => {
    // This will be implemented later
    console.log('Starting agent with issues:', Array.from(selectedIssues));
    alert('Agent will start working on selected issues. This functionality will be implemented later.');
  };

  return (
    <div className="space-y-8" style={{ fontFamily: githubFont }}>
      <div className="bg-[#0d1117] p-6 rounded-lg shadow-lg border border-[#30363d]">
        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4">Demo Controls</h3>
        <p className="text-gray-400 mb-4">
          Select the type of data to display:
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => handleFetchData('open-issues')}
            className={`${dataType === 'open-issues' && !showError ? 'ring-2 ring-[#58a6ff]' : ''} bg-[#1f6feb] hover:bg-[#388bfd]`}
          >
            Show Open Issues
          </Button>
          <Button
            onClick={() => handleFetchData('repos')}
            className={`${dataType === 'repos' && !showError ? 'ring-2 ring-[#58a6ff]' : ''} bg-[#238636] hover:bg-[#2ea043]`}
          >
            Show Repositories
          </Button>
          <Button
            onClick={() => handleFetchData('empty')}
            className={`${dataType === 'empty' && !showError ? 'ring-2 ring-[#58a6ff]' : ''} bg-[#9e6a03] hover:bg-[#bb8009]`}
          >
            Show Empty State
          </Button>
          <Button
            onClick={() => handleFetchData('random')}
            className={`${dataType === 'random' && !showError ? 'ring-2 ring-[#58a6ff]' : ''} bg-[#8957e5] hover:bg-[#a371f7]`}
          >
            Random Type
          </Button>
          <Button
            onClick={() => handleFetchData(dataType, !showError)}
            className={`${showError ? 'ring-2 ring-[#58a6ff] bg-[#da3633]' : 'bg-[#da3633] hover:bg-[#f85149]'}`}
          >
            {showError ? 'Hide Error State' : 'Show Error State'}
          </Button>
        </div>
      </div>

      <div className="mt-8 bg-[#0d1117] p-6 rounded-lg shadow-lg border border-[#30363d]">
        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4">Component Preview</h3>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#58a6ff]"></div>
          </div>
        ) : error ? (
          <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg border border-[#30363d]">
            <h3 className="text-xl font-semibold text-[#f85149] mb-4">Error Loading Data</h3>
            <p className="mb-4 text-gray-400">{error}</p>
            <Button 
              onClick={fetchData}
              className="bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium py-2 px-4 rounded"
            >
              Retry
            </Button>
          </div>
        ) : data ? (
          <div className="border border-[#30363d] rounded-lg overflow-hidden">
            {data.type === 'open-issues' && (
              <div className="p-4 bg-[#161b22] text-[#c9d1d9]">
                <h4 className="font-medium">Open Issues View</h4>
                <p className="text-sm text-gray-400">Showing a list of issues with checkboxes and a &quot;Go!&quot; button</p>
              </div>
            )}
            {data.type === 'repos' && (
              <div className="p-4 bg-[#161b22] text-[#c9d1d9]">
                <h4 className="font-medium">Repositories View</h4>
                <p className="text-sm text-gray-400">Showing a list of repositories with links to create new issues</p>
              </div>
            )}
            {data.type === 'empty' && (
              <div className="p-4 bg-[#161b22] text-[#c9d1d9]">
                <h4 className="font-medium">Empty State View</h4>
                <p className="text-sm text-gray-400">Showing a message that we only work with GitHub</p>
              </div>
            )}
            <div className="p-6">
              {data.type === 'open-issues' && (
                <OpenIssuesView 
                  data={data as OpenIssuesData} 
                  selectedIssues={selectedIssues} 
                  toggleIssue={toggleIssue} 
                  handleStartAgent={handleStartAgent}
                  isDemo={true}
                />
              )}
              {data.type === 'repos' && (
                <RepoDataView data={data as RepoData} />
              )}
              {data.type === 'empty' && (
                <EmptyDataView />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
} 