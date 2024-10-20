import React, { useState } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCartStore } from "../../store/cart-store";
import { MdKeyboardVoice } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

const ChatRobot = () => {
  const { isOpen, closeModal, openModal } = useCartStore((state) => state);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? openModal() : closeModal())}
    >
      <DialogContent className="sm:max-w-[425px] h-[559px] bg-[#f8f8f8]">
        <div className="flex flex-col items-center gap-6">
          {/* Chatbot header */}
          <div className="flex items-center gap-2">
            <AiOutlineRobot className="text-3xl text-[#AE8E50]" />
            <h2 className="font-semibold text-lg text-[#AE8E50]">Sovereign International Chat Bot</h2>
          </div>

          {/* Display messages above input */}
          <div className="flex flex-col w-full gap-2 p-2 h-[370px] overflow-y-auto">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className="text-left bg-gray-200 p-2  //////////////////// rounded-md ">
                   <h1>{message}</h1>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No messages yet</p>
            )}
          </div>

          <div className="w-full bg-white flex items-center justify-between p-2 rounded-md">
            <input
              className="w-full p-3 border-none focus:outline-none"
              type="text"
              placeholder="Send message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
              onKeyDown={handleSendMessage}
            />
            <div className="flex items-center gap-2 text-[22px]">
              <button>
                <MdKeyboardVoice />
              </button>
              <button>
                <BsPlusCircle />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatRobot;
