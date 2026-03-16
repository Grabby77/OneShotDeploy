import React, { useState } from 'react';
import { AgentCore } from './components/AgentCore';
import { Terminal, Rocket, Github, Zap } from 'lucide-react';

function App() {
  const [command, setCommand] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command) return;
    setIsDeploying(true);
    // Logic for One-Shot Deploy will be integrated here
    setTimeout(() => setIsDeploying(false), 3000);
  };

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center p-6'>
      <AgentCore />
      
      {/* Header */}
      <header className='fixed top-0 w-full p-8 flex justify-between items-center z-20 max-w-7xl'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center'>
            <Zap className='text-black w-6 h-6' />
          </div>
          <span className='font-oswald text-2xl font-bold tracking-tighter uppercase'>OneShot</span>
        </div>
        <nav className='flex gap-8 text-sm font-medium opacity-60'>
          <a href='#' className='hover:opacity-100 transition-opacity'>Docs</a>
          <a href='#' className='hover:opacity-100 transition-opacity'>GitHub</a>
          <a href='#' className='hover:opacity-100 transition-opacity'>Agent API</a>
        </nav>
      </header>

      {/* Main Command UI */}
      <main className='relative z-10 w-full max-w-xl text-center space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-6xl md:text-8xl font-oswald font-bold tracking-tighter uppercase leading-none'>
            Deploy <span className='gradient-text'>Anything</span>
          </h1>
          <p className='text-zinc-400 text-lg max-w-md mx-auto font-medium'>
            The autonomous coordination layer for agentic website deployment. One shot. One URL.
          </p>
        </div>

        <form onSubmit={handleDeploy} className='glass-card p-2 flex items-center gap-2 group focus-within:ring-2 ring-emerald-500/50 transition-all'>
          <div className='p-3 text-zinc-500'>
            <Terminal className='w-5 h-5' />
          </div>
          <input 
            type='text'
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder='deploy project-name framework:static'
            className='bg-transparent border-none outline-none flex-grow py-3 text-lg font-medium placeholder:text-zinc-700'
          />
          <button 
            type='submit'
            className='bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95'
          >
            {isDeploying ? 'Deploying...' : <><Rocket className='w-4 h-4' /> Go Live</>}
          </button>
        </form>

        <div className='flex justify-center gap-12 pt-8'>
          {[
            { label: 'Next.js', icon: '⚡' },
            { label: 'Vite', icon: '🔥' },
            { label: 'Static', icon: '📦' }
          ].map((tech) => (
            <div key={tech.label} className='flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-bold'>
              <span className='text-lg'>{tech.icon}</span> {tech.label}
            </div>
          ))}
        </div>
      </main>

      {/* Status Bar */}
      <footer className='fixed bottom-0 w-full p-8 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 z-20'>
        <div>System: Online</div>
        <div className='flex items-center gap-4'>
          <span>Agent Node: 8004-Alpha</span>
          <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
        </div>
      </footer>
    </div>
  );
}

export default App;
