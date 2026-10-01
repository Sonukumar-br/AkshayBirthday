import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send, Sparkles, HelpCircle, CornerDownLeft } from 'lucide-react';
import { triggerBirthdayConfetti, triggerFireworks } from '../utils/confetti';
import { soundFx } from '../utils/soundEffects';
import { BROTHER_CONFIG } from '../data/config';
import TerminalWindow from '../components/TerminalWindow';

export default function InteractiveTerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Akshay\'s Birthday Interactive Box! 🎉' },
    { type: 'system', text: 'Type "help" or click any button below to try fun commands!' }
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    soundFx.playKeyClick();

    if (!cmd) return;

    // Add user command to history
    const newHistory = [...history, { type: 'user', text: `akshay@birthday:~$ ${cmdStr}` }];

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = [];

    switch (cmd) {
      case 'help':
        response = [
          { type: 'output', text: 'FUN COMMANDS YOU CAN TRY:' },
          ...BROTHER_CONFIG.terminalCommands.map(c => ({
            type: 'output',
            text: `  ${c.command.padEnd(14, ' ')} -> ${c.description}`
          })),
        ];
        break;

      case './celebrate':
      case 'celebrate':
      case './celebrate.sh':
        soundFx.playSuccessBeep();
        triggerBirthdayConfetti();
        setTimeout(() => triggerFireworks(), 300);
        response = [
          { type: 'success', text: '🎉 BIRTHDAY PARTY FIREWORKS LAUNCHED!' },
          { type: 'output', text: 'Confetti and fireworks deployed for Akshay Verma!' }
        ];
        break;

      case './memories':
      case 'memories':
      case './memories.sh':
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        response = [{ type: 'success', text: 'Navigating to Photo Memory Gallery...' }];
        break;

      case './letter':
      case './brother':
      case 'letter':
      case 'brother':
      case './brother.sh':
        document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' });
        response = [{ type: 'success', text: 'Navigating to Letter from Bhai...' }];
        break;

      case './profile':
      case 'profile':
      case './about':
      case './about.sh':
        document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
        response = [{ type: 'success', text: 'Navigating to Akshay\'s Profile Card...' }];
        break;

      case 'whoami':
        response = [
          { type: 'output', text: 'Name: Akshay Verma (Andua)' },
          { type: 'output', text: 'Class: 9th Standard 🎒' },
          { type: 'output', text: 'Age: 17' },
          { type: 'output', text: 'Title: The Coolest Younger Brother Ever!' }
        ];
        break;

      case 'pet-dard':
      case 'sudo pet-dard':
        response = [
          { type: 'warning', text: 'Nice try, Andua! 😂' },
          { type: 'output', text: 'School excuse rejected today. Time to celebrate your birthday!' }
        ];
        break;

      case 'bhai':
      case 'sudo bhai':
        response = [
          { type: 'success', text: 'Bhai is always here for you ❤️' },
          { type: 'output', text: 'Sonu (Bhai) will always support you no matter what!' }
        ];
        break;

      default:
        response = [
          { type: 'error', text: `command not found: ${cmdStr}` },
          { type: 'output', text: 'Type "help" to see valid commands.' }
        ];
        break;
    }

    setHistory([...newHistory, ...response]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-16 px-4 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>INTERACTIVE_COMMAND_BOX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          INTERACTIVE <span className="text-cyan-400">COMMAND BOX</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Click any button or type commands below to trigger party fun!
        </p>
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-xs">
        {['help', './celebrate', './memories', './letter', 'whoami', 'pet-dard', 'bhai', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-cyan-950 hover:border-cyan-500/40 transition-colors font-bold shadow-sm"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Main Terminal Window */}
      <TerminalWindow
        title="akshay@birthday: ~ (fun_box)"
        path="/party/commands"
        showScanlines={false}
      >
        <div className="space-y-2 font-mono text-xs sm:text-sm max-h-[380px] overflow-y-auto pr-2">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <span className="text-cyan-400 font-bold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-slate-400">{item.text}</span>
              )}
              {item.type === 'output' && (
                <span className="text-slate-300">{item.text}</span>
              )}
              {item.type === 'success' && (
                <span className="text-emerald-400 font-semibold">{item.text}</span>
              )}
              {item.type === 'warning' && (
                <span className="text-amber-400 font-bold">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-rose-400">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Command Line */}
        <form onSubmit={handleSubmit} className="mt-4 pt-3 border-t border-slate-800 flex items-center space-x-2 font-mono text-xs sm:text-sm">
          <span className="text-cyan-400 font-bold flex-shrink-0">akshay@birthday:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command here... (or click buttons above)"
            className="flex-1 bg-transparent text-slate-100 focus:outline-none focus:ring-0 font-mono"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="text-cyan-400 hover:text-cyan-300 p-1.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </TerminalWindow>

    </section>
  );
}
