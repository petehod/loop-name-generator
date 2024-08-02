import { useState } from "react";

export const OpenAIChat = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/wordGenerator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages,
        model: "gpt-4o-mini", // Replace with your desired model
      }),
    });

    const data = await res.json();
    console.log("data", data);
    setResponse(data.result.content);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.result.content },
    ]);
  };

  return (
    <div>
      <h1>OpenAI Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Assistant:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};
