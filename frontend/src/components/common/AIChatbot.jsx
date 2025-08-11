// src/components/common/AIChatbot.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm the Healvance AI assistant. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return
    
    const newUserMessage = { id: messages.length + 1, text: inputValue, sender: 'user' }
    setMessages([...messages, newUserMessage])
    setInputValue('')
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: messages.length + 2, 
        text: "Thanks for your message! Our team will get back to you with more detailed information.", 
        sender: 'bot' 
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-96 bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="bg-primary text-white p-4">
              <h3 className="font-bold">Healvance AI Assistant</h3>
            </div>
            <div className="h-96 p-4 overflow-y-auto flex-grow">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div 
                    className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..." 
                  className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary-dark"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}