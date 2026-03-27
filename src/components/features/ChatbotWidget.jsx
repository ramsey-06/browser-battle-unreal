import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const mockResponses = {
  default: "Thanks for your question! Our admissions team can provide more details. You can also visit the Admissions page or call +1 (555) 000-1234.",
  admission: "Ashford University accepts applications through our online portal. The next intake deadline is March 31, 2025. Visit our Admissions page for requirements and scholarships.",
  department: "We offer 8 departments including Computer Science, Engineering, Medicine, Law, Business, Arts, Natural Sciences, and Social Sciences. Each has unique programs and research opportunities.",
  event: "Upcoming events include the Research Symposium on April 15, Tech Career Fair on March 28, and Spring Cultural Festival on May 10. Check the Events page for full details.",
  faculty: "Our faculty includes over 200 distinguished professors and researchers. You can browse faculty profiles on the Faculty page, including their specializations and publications.",
  scholarship: "Ashford offers merit-based and need-based scholarships. The Presidential Scholarship covers full tuition. Contact financial aid at finaid@ashford.edu for personalized guidance.",
  library: "The Ashford Library is open 7 AM–10 PM weekdays and 9 AM–6 PM weekends. Digital resources are available 24/7 through the Student Portal.",
};

function getResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes('admission') || lower.includes('apply') || lower.includes('enroll')) return mockResponses.admission;
  if (lower.includes('department') || lower.includes('program') || lower.includes('course')) return mockResponses.department;
  if (lower.includes('event') || lower.includes('festival') || lower.includes('symposium')) return mockResponses.event;
  if (lower.includes('faculty') || lower.includes('professor') || lower.includes('teacher')) return mockResponses.faculty;
  if (lower.includes('scholarship') || lower.includes('financial') || lower.includes('fee')) return mockResponses.scholarship;
  if (lower.includes('library') || lower.includes('book') || lower.includes('resource')) return mockResponses.library;
  return mockResponses.default;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: "Hi! I'm Ash, your Ashford University assistant. How can I help you today?", time: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text: input.trim(), time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, from: 'bot', text: getResponse(userMsg.text), time: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const fmt = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat window */}
      {open && (
        <div
          className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden animate-fade-up flex flex-col"
          style={{ height: '480px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          role="dialog"
          aria-label="University AI Assistant"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-600">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Ash — AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] ${msg.from === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'rounded-bl-sm'
                    }`}
                    style={msg.from === 'bot' ? { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' } : {}}
                  >
                    {msg.text}
                  </div>
                  <p className="text-xs mt-1 px-1" style={{ color: 'var(--text-secondary)' }}>
                    {fmt(msg.time)}
                  </p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide" style={{ borderTop: '1px solid var(--border-color)' }}>
            {['Admissions', 'Scholarships', 'Events'].map(s => (
              <button
                key={s}
                onClick={() => { setInput(s); }}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3" style={{ borderTop: '1px solid var(--border-color)' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="flex-1 text-sm px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              aria-label="Chat message input"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FAB Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl active:scale-95"
      >
        <div className={`absolute transition-all duration-300 ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
          <MessageCircle size={22} />
        </div>
        <div className={`absolute transition-all duration-300 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
          <X size={22} />
        </div>
      </button>
    </div>
  );
}
