import { useState, useRef } from "react";
import { sendMessageToAPI } from "../api";
import MessageBubble from "./MessageBubble";
import { Play } from "lucide-react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setInput(e.target.value);

    const el = textareaRef.current;
    el.style.height = "auto"; // 초기화
    el.style.height = `${el.scrollHeight}px`; // auto expand
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const myMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, myMessage]);
    setInput("");

    // textarea height 초기화
    const el = textareaRef.current;
    el.style.height = "44px";

    setIsTyping(true);

    const response = await sendMessageToAPI(myMessage.text);

    setIsTyping(false);

    const botMessage = { role: "bot", text: response.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
      <div className="messages-area">
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} text={msg.text} />
        ))}

        {isTyping && (
          <div className="bubble bot typing-bubble">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      <div className="input-area">
        <textarea
          ref={textareaRef}
          className="chat-input"
          placeholder="메시지를 입력하세요..."
          value={input}
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>
          {" "}
          <Play size={20} />
        </button>
      </div>
    </>
  );
}
