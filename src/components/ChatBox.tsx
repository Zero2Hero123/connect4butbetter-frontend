

import { Dispatch, FormEvent, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { socketCtx } from "../App";

interface Message {
    author: string,
    color: 'red' | 'yellow',
    content: string
}

interface Props {
    displayName: string,
    myColor: 'red' | 'yellow'
    isMobile?: boolean
    messages: Message[]
    setMessages: Dispatch<SetStateAction<Message[]>>
}

import ChatMessage from "./ChatMessage";

export default function ChatBox({displayName, myColor,messages,setMessages, isMobile = false}: Props){

    const chatForm = useRef<HTMLFormElement>(null)
    const msgInput = useRef<HTMLInputElement>(null)

    const socket = useContext(socketCtx)

    useEffect(() => {
        console.log(messages)
    },[messages])

    function addNewMessage(e: FormEvent){
        e.preventDefault()

        const message = msgInput.current?.value;
        
        const obj: Message = {author: displayName,color: myColor,content: message ?? "None"}

        if(msgInput.current){
            msgInput.current.value = ""
        }

        socket.emit('new-message', obj)

        setMessages(prev => [...prev,obj])
    }

    useEffect(() => {

        // chatForm?.current?.addEventListener("submit",addNewMessage)



        // return () => {
        //     chatForm?.current?.removeEventListener("submit",addNewMessage)
        // }
    },[])

    return <>
    
        <div className={`${isMobile ? 'flex w-[100%]' : 'absolute left-[3%] hidden w-[350px]'}  xl:flex rounded-md bg-blue-700 h-[250px]  flex-col items-center`} >
            <p className="text-center text-blue-200" >Chat</p>
            
            <div className=" w-[95%] grow bg-blue-800 overflow-y-scroll">
                {messages.map((m,i) => <ChatMessage key={i} author={m.author == displayName ? "You" : m.author} content={m.content} color={m.color} />)}
            </div>

            <form onSubmit={addNewMessage} ref={chatForm} className="flex flex-col justify-end items-center w-[95%] bg-blue-800 text-white" >
                <input ref={msgInput} className=" rounded-md h-[50px] w-[100%] bg-blue-700 text-white" placeholder="Send a Message" type="text" />
            </form>
        </div>
    
    </>

}