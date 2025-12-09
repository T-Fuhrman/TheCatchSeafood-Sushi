import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm your virtual concierge for The Catch. How can I help you navigate our menu today?",
      timestamp: Date.now()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Format history for Gemini API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await getGeminiResponse(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-ocean-900 text-white' : 'bg-gold-600 text-white'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        <span className="font-bold tracking-wider">{isOpen ? 'Close' : 'Ask AI Concierge'}</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[90vw] max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-fade-in-up flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-ocean-900 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-600/20 text-gold-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold">Catch Concierge</h3>
                <p className="text-xs text-ocean-200">Powered by Gemini AI</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex max-w-[85%] flex-col ${
                    msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-ocean-800 text-white rounded-br-none'
                        : 'bg-white text-ocean-900 border border-slate-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="mt-1 text-[10px] text-slate-400">
                    {msg.role === 'user' ? 'You' : 'Concierge'}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="self-start bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-ocean-400 animate-bounce"></span>
                    <span className="h-2 w-2 rounded-full bg-ocean-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="h-2 w-2 rounded-full bg-ocean-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-100 bg-white p-4">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for recommendations..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-sm text-ocean-900 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 rounded-full bg-ocean-900 p-2 text-white transition-colors hover:bg-ocean-800 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};