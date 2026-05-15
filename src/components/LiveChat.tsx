import React, { useState } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi there! Welcome to Waziri Collective Labs. How can we help you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Great question! Let me connect you with a specialist.',
        'I can help with that. What specific area interests you?',
        'Thanks for reaching out. Our team is here to support you.',
        'That\'s an excellent use case for our services. Can you tell me more?',
        'I\'d be happy to help. Would you like to schedule a consultation?'
      ];

      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-brand-gradient hover:shadow-lg hover:shadow-brand-green/50 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-h-96 flex flex-col bg-brand-dark border border-brand-green/30 rounded-lg shadow-2xl">
      <div className="bg-brand-gradient px-4 py-4 flex items-center justify-between">
        <h3 className="font-bold text-white">Chat with us</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors text-white"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-brand-green text-brand-dark'
                      : 'bg-brand-green/20 text-gray-300 border border-brand-green/30'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-brand-green/20 text-gray-300 border border-brand-green/30 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-brand-green/50 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-brand-green/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-brand-green/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-brand-green/20 p-4 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1 bg-white/10 border border-brand-green/30 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green transition-colors text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="p-2 bg-brand-green text-brand-dark rounded-lg hover:bg-brand-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;