"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, Trash2 } from "lucide-react";
import { useTranslation } from "@/components/providers/TranslationProvider";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistantPage() {
  const { t } = useTranslation();

  const suggestedQuestions = [
    t("assistant.suggestions.about"),
    t("assistant.suggestions.devices"),
    t("assistant.suggestions.interests"),
    t("assistant.suggestions.games"),
    t("assistant.suggestions.revex"),
    t("assistant.suggestions.goal"),
  ];

  const welcomeMessage = t("assistant.messages.welcome");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: welcomeMessage,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastFailedQuestion, setLastFailedQuestion] =
    useState<string | null>(null);

  function clearConversation() {
    const confirmed = window.confirm(
      t("assistant.confirm.clearConversation")
    );

    if (!confirmed) return;

    localStorage.removeItem("revex-ai-messages");

    setMessages([
      {
        role: "assistant",
        content: welcomeMessage,
      },
    ]);
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("revex-ai-messages");

    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);

        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages);
        }
      } catch {
        localStorage.removeItem("revex-ai-messages");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "revex-ai-messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  async function sendMessage(question?: string) {
    const text = (question ?? input).trim();

    if (!text || loading) return;

    setInput("");

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: text,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          messages: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || t("assistant.errors.general")
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);

      setLastFailedQuestion(null);
    } catch {
      setLastFailedQuestion(text);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: t("assistant.messages.error"),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="aiPage" dir="rtl">
      <section className="aiHero">
        <div className="aiHeroIcon">
          <Bot size={34} />
        </div>

        <h1>{t("assistant.hero.title")}</h1>

        <p>{t("assistant.hero.description")}</p>
      </section>

      <section className="aiChat">
        <div className="aiChatHeader">
          <span>{t("assistant.chat.title")}</span>

          <button
            type="button"
            onClick={clearConversation}
            className="aiClearButton"
          >
            <Trash2 size={18} />
            {t("assistant.chat.clear")}
          </button>
        </div>

        <div className="aiMessages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`aiMessage ${
                message.role === "user"
                  ? "aiUserMessage"
                  : "aiAssistantMessage"
              }`}
            >
              {message.content}
            </div>
          ))}

          {loading && (
            <div className="aiMessage aiAssistantMessage">
              {t("assistant.messages.thinking")}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {lastFailedQuestion && !loading && (
          <button
            type="button"
            onClick={() => sendMessage(lastFailedQuestion)}
            className="aiRetryButton"
          >
            {t("assistant.chat.retry")}
          </button>
        )}

        {messages.length === 1 && (
          <div className="aiSuggestions">
            <h3>{t("assistant.suggestions.title")}</h3>

            <div className="aiSuggestionGrid">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <form
          className="aiInputArea"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={t("assistant.input.placeholder")}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label={t("assistant.input.send")}
          >
            <Send size={20} />
          </button>
        </form>
      </section>
    </main>
  );
}