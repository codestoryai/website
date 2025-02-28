'use client';

import { useState, useEffect } from 'react';
import { TasksData, OpenIssuesData, RepoData, EmptyData, Issue } from '@/app/types/github';
import { Button } from '@/components/ui/button';
import { EmptyDataView, RepoDataView, OpenIssuesView } from '@/components/github/TaskViews';

// GitHub styling
const githubFont = 'apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

export function InitialTasks() {
  const [data, setData] = useState<TasksData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<Set<number>>(new Set());

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/getInitialTasks');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      
      // Pre-select the first three issues if we have open issues
      if (result.type === 'open-issues' && result.data.issues.length > 0) {
        const newSelected = new Set<number>();
        result.data.issues.slice(0, 3).forEach((issue: Issue) => {
          newSelected.add(issue.number);
        });
        setSelectedIssues(newSelected);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]" style={{ fontFamily: githubFont }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#58a6ff]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg border border-[#30363d]" style={{ fontFamily: githubFont }}>
        <h3 className="text-xl font-semibold text-[#f85149] mb-4">Error Loading Tasks</h3>
        <p className="mb-4 text-gray-400">{error}</p>
        <Button 
          onClick={fetchData}
          className="bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium py-2 px-4 rounded"
        >
          Retry
        </Button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg border border-[#30363d]" style={{ fontFamily: githubFont }}>
        <h3 className="text-xl font-semibold mb-4">No Data Available</h3>
        <p className="text-gray-400">
          Unable to load task data. Please try again later.
        </p>
        <Button 
          onClick={fetchData}
          className="mt-4 bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium py-2 px-4 rounded"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: githubFont }}>
      {data.type === 'open-issues' && (
        <OpenIssuesView 
          data={data as OpenIssuesData} 
          selectedIssues={selectedIssues} 
          toggleIssue={toggleIssue} 
          handleStartAgent={handleStartAgent}
        />
      )}
      {data.type === 'repos' && (
        <RepoDataView data={data as RepoData} />
      )}
      {data.type === 'empty' && (
        <EmptyDataView />
      )}
    </div>
  );
} 