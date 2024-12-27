"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { useCartStore } from "../../store/cart-store";
import { VscCallOutgoing } from "react-icons/vsc";
import CallMeNow from "./whatappmodalcomponents/CallMeNow";
import CallMeLatter from "./whatappmodalcomponents/CallMeLatter";
import Schedule from "./whatappmodalcomponents/Schedule";
import { FaCalendarAlt } from "react-icons/fa";
import { SlCamrecorder } from "react-icons/sl";
import { TbMessageX } from "react-icons/tb";
import Time from "./whatappmodalcomponents/Time";

const WhatsApp = () => {
  const [openModal, setOpenModal] = useState(1)
  const { isChat, closeChat, openChat } = useCartStore((state) => state);

  return (

      <Dialog
        open={isChat}
        onOpenChange={(open) => (open ? openChat() : closeChat())}
      >
        <DialogContent className="sm:max-w-[1025px]">
       
       <div className=" mx-auto">
       <div className=" flex items-center gap-12">
           <button onClick={() => setOpenModal(1)} className={` text-[18px] font-[500] flex items-center gap-20  ${openModal === 1 ? "text-[#AE8E50]" : " text-black"}`}><span className="flex flex-col items-center gap-2"><VscCallOutgoing /> Call me now </span> <div className=" w-[1px] h-[50px] bg-[#AE8E50]"></div> </button>
           <button onClick={() => setOpenModal(2)} className={` text-[18px] font-[500] flex items-center gap-20  ${openModal === 2 ? "text-[#AE8E50]" : " text-black"}`}><span className="flex flex-col items-center gap-2"><FaCalendarAlt  /> Call me latter </span> <div className=" w-[1px] h-[50px] bg-[#AE8E50]"></div> </button>
           <button onClick={() => setOpenModal(3)} className={` text-[18px] font-[500] flex items-center gap-20  ${openModal === 3 ? "text-[#AE8E50]" : " text-black"}`}><span className="flex flex-col items-center gap-2"><SlCamrecorder />  Consultation a message</span> <div className=" w-[1px] h-[50px] bg-[#AE8E50]"></div> </button>
           <button onClick={() => setOpenModal(4)} className={` text-[18px] font-[500] flex items-center gap-20  ${openModal === 4 ? "text-[#AE8E50]" : " text-black"}`}><span className="flex flex-col items-center gap-2"><TbMessageX /> Leave a message </span> </button>
          </div>
          <div>
            {
              openModal === 1 ? <><CallMeNow /></> : openModal === 2 ? <><CallMeLatter /></> : openModal === 3 ? <><Schedule /></> : openModal === 4 ? <><Time /></> : null
            }
          </div>
       </div>
        </DialogContent>
      </Dialog>
  );
};

export default WhatsApp;
