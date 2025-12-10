import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Sparkles } from "lucide-react";

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
      <div className="fixed inset-x-0 top-0 z-40 bg-slate-100/80 backdrop-blur supports-[backdrop-filter]:bg-slate-100/70 border-b border-slate-200">
        <header className="mx-auto w-full max-w-6xl flex items-center justify-between px-6 py-4">
 
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            {/* Logo */}
            <img src="/image/logo.jpeg" alt="StratSync Logo" className="h-8 w-8 rounded-full" />
            
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900">
                StratSync
              </span>
              <span className="text-xs text-slate-500">
                Revenue Intelligence Dashboard
              </span>
            </div>
          </Link>

        
        <div className="flex items-center gap-6">
    
          <div className="flex items-center text-sm text-slate-500 gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Live</span>
            <span className="text-slate-400">•</span>
            <span>{time}</span>
          </div>

          
          <button className="inline-flex items-center gap-2 ">
            <Bell className="h-4 w-4" />
           
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
