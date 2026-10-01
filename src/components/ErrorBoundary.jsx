import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05070d] flex items-center justify-center p-6 text-slate-100 font-mono text-center select-none">
          <div className="max-w-md w-full glass-panel p-6 rounded-xl border border-cyan-500/40 space-y-4">
            <h2 className="text-xl font-bold text-amber-400">AKSHAY'S BIRTHDAY WEBSITE</h2>
            <p className="text-xs text-slate-300">
              System recovered smoothly! Click below to jump straight to the party! 🎉
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="w-full py-3 rounded-lg font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors text-xs"
            >
              [ REBOOT PARTY ]
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
