export default function MessageBubble({ role, text }) {
  const isUser = role === "user";

  // *...* 패턴 감지 후 span으로 출⧸력
  const formattedText = text.replace(
    /\*(.*?)\*/g,
    `<span class="action">$1</span>`
  );

  return (
    <div className={`bubble ${isUser ? "user" : "bot"}`}>
      <div dangerouslySetInnerHTML={{ __html: formattedText }} />
    </div>
  );
}
