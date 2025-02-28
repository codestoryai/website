import { TasksDemo } from '@/components/TasksDemo';
import Link from 'next/link';

// GitHub styling
const githubFont = 'apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

export default function TasksDemoPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]" style={{ fontFamily: githubFont }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#c9d1d9]">GitHub Tasks Demo</h1>
          <Link 
            href="/tasks" 
            className="text-[#58a6ff] hover:underline"
          >
            Back to Tasks
          </Link>
        </div>
        
        <div className="mb-8">
          <p className="text-[#c9d1d9] mb-2">
            This demo page allows you to test the different states of the InitialTasks component without making actual API calls.
          </p>
          <p className="text-gray-400">
            Use the controls below to switch between different data types and test error handling.
          </p>
        </div>
        
        <TasksDemo />
      </div>
    </div>
  );
} 