"use client";
import { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 text-blue-50 shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMessageSquare className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-blue-50/50 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-800/80 text-blue-50 px-4 py-3 font-semibold">
            Support Chat
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm text-gray-800">
            <div className="bg-gray-200 rounded-lg p-2 max-w-[80%]">
              Hello! 👋 How can we help you today?
            </div>
          </div>

          <div className="border-t px-3 py-2 flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-lg border px-3 py-2 text-sm text-gray-500 bg-gray-100 "
            />
            <button className="ml-2 px-3 py-1 rounded-lg bg-blue-700 text-blue-50 text-sm shadow hover:bg-blue-600 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
