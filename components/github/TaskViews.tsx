'use client';

import { OpenIssuesData, RepoData, Issue } from '@/app/types/github';
import { Button } from '@/components/ui/button';

// GitHub styling
const githubFont = 'apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
const githubStyles = {
  fontFamily: githubFont,
  issueItem: "border-t border-gray-700 py-3 hover:bg-gray-750 transition-colors",
  issueTitle: "font-semibold text-[#c9d1d9] hover:text-[#58a6ff]",
  issueNumber: "text-gray-500 hover:text-[#58a6ff]",
  issueMetadata: "text-xs text-gray-500 mt-1",
  repoItem: "border-t border-gray-700 py-4 hover:bg-gray-750 transition-colors",
  repoTitle: "font-semibold text-[#c9d1d9] hover:text-[#58a6ff]",
  repoDescription: "text-sm text-gray-400 mt-1",
  repoMetadata: "flex items-center mt-2 text-xs text-gray-500",
};

export function EmptyDataView() {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg" style={{ fontFamily: githubFont }}>
      <h3 className="text-xl font-semibold mb-4">No GitHub Connection</h3>
      <p className="text-gray-400">
        We only work with GitHub repositories. Please connect your GitHub account to get started.
      </p>
    </div>
  );
}

export function RepoDataView({ data }: { data: RepoData }) {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg" style={{ fontFamily: githubFont }}>
      <h3 className="text-xl font-semibold mb-4">Your Repositories</h3>
      <p className="text-gray-400 mb-4">
        Select a repository to create a new issue:
      </p>
      <div className="border border-gray-700 rounded-md overflow-hidden">
        {data.data.repos.map((repo, index) => (
          <div 
            key={`${repo.owner}/${repo.id}`} 
            className={`px-4 ${githubStyles.repoItem} ${index === 0 ? 'border-t-0' : ''}`}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <a 
                  href={`https://github.com/${repo.owner}/${repo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={githubStyles.repoTitle}
                >
                  {repo.owner}/{repo.name}
                </a>
                <div className="flex items-center space-x-2">
                  <a
                    href={`https://github.com/${repo.owner}/${repo.id}/issues/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-medium py-1 px-3 rounded-md"
                  >
                    New issue
                  </a>
                </div>
              </div>
              <p className={githubStyles.repoDescription}>{repo.description}</p>
              <div className={githubStyles.repoMetadata}>
                <span className="flex items-center mr-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#f1e05a] mr-1"></span>
                  <span>JavaScript</span>
                </span>
                <span className="mr-3">Updated 3 days ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OpenIssuesView({ 
  data, 
  selectedIssues, 
  toggleIssue, 
  handleStartAgent,
  isDemo = false
}: { 
  data: OpenIssuesData; 
  selectedIssues: Set<number>; 
  toggleIssue: (issueNumber: number) => void; 
  handleStartAgent: () => void;
  isDemo?: boolean;
}) {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-lg shadow-lg relative" style={{ fontFamily: githubFont }}>
      <h3 className="text-xl font-semibold mb-4">Open Issues</h3>
      <p className="text-gray-400 mb-4">
        Select issues for the agent to work on:
      </p>
      
      {/* Issues list */}
      <div className={`${!isDemo ? 'mb-20' : 'mb-6'} border border-gray-700 rounded-md overflow-hidden`}>
        {data.data.issues.map((issue, index) => (
          <div 
            key={issue.number} 
            className={`px-4 ${githubStyles.issueItem} ${index === 0 ? 'border-t-0' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  id={`issue-${issue.number}`}
                  checked={selectedIssues.has(issue.number)}
                  onChange={() => toggleIssue(issue.number)}
                  className="h-4 w-4 rounded border-gray-600 text-[#1f6feb] focus:ring-[#1f6feb]"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-[#3fb950] mr-2" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                  </svg>
                  <a 
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={githubStyles.issueTitle}
                  >
                    {issue.title}
                  </a>
                  <a 
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-2 ${githubStyles.issueNumber}`}
                  >
                    #{issue.number}
                  </a>
                </div>
                <div className={githubStyles.issueMetadata}>
                  <span>
                    Opened {new Date(issue.openedAt).toLocaleDateString()} by {issue.openedBy}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#1f6feb33] text-[#58a6ff]">
                  enhancement
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#da363633] text-[#ff7b72]">
                  bug
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Aside notification */}
      {selectedIssues.size > 0 && (
        <div className="absolute top-6 right-6 bg-[#161b22] backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border border-[#30363d]">
          <h4 className="font-semibold text-[#58a6ff] mb-2">Ready to Start</h4>
          <p className="text-sm text-gray-400">
            The agent will start working on {selectedIssues.size} selected issue{selectedIssues.size !== 1 ? 's' : ''}. 
            Click &quot;Go!&quot; when you&apos;re ready.
          </p>
        </div>
      )}
      
      {/* Bottom bar - fixed for real component, static for demo */}
      <div className={`${isDemo ? '' : 'fixed bottom-0 left-0 right-0'} bg-[#0d1117] border-t border-[#30363d] p-4 flex justify-between items-center`}>
        <Button
          onClick={handleStartAgent}
          disabled={selectedIssues.size === 0}
          className={`bg-[#238636] hover:bg-[#2ea043] text-white font-medium py-2 px-8 rounded-md ${
            selectedIssues.size === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Go!
        </Button>
        <div className="text-gray-400 text-sm">
          {selectedIssues.size} issue{selectedIssues.size !== 1 ? 's' : ''} selected
        </div>
      </div>
    </div>
  );
} 