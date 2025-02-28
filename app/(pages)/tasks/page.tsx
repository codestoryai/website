import { InitialTasks } from '@/components/InitialTasks';
import Link from 'next/link';

// GitHub styling
const githubFont = 'apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]" style={{ fontFamily: githubFont }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#c9d1d9]">GitHub Tasks</h1>
          <Link 
            href="/tasks/demo" 
            className="text-[#58a6ff] hover:underline"
          >
            View Demo Page
          </Link>
        </div>
        
        <div className="bg-[#161b22] p-6 rounded-lg shadow-lg border border-[#30363d]">
          <InitialTasks />
        </div>
      </div>
    </div>
  );
} 