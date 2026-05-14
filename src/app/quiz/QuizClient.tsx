"use client";

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./page.module.css";

export type Question =
  | {
      id: string;
      ref?: string;
      topic: string;
      type: "mcq";
      difficulty?: "easy" | "medium" | "hard";
      question: string;
      options: string[];
      answer: number;
      explanation: string;
    }
  | {
      id: string;
      ref?: string;
      topic: string;
      type: "short";
      difficulty?: "easy" | "medium" | "hard";
      question: string;
      acceptedAnswers: string[];
      explanation: string;
    };

type UserAnswer =
  | { type: "mcq"; selected: number; correct: boolean }
  | { type: "short"; input: string; correct: boolean };

const ALL_TOPICS = "Tất cả";

function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip Vietnamese accents
    .replace(/[`*_~]/g, "")
    .replace(/\s+/g, " ");
}

function isShortAnswerCorrect(input: string, accepted: string[]): boolean {
  const n = normalize(input);
  if (!n) return false;
  return accepted.some((a) => {
    const na = normalize(a);
    return n === na || n.includes(na) || na.includes(n);
  });
}

export default function QuizClient({ questions }: { questions: Question[] }) {
  const topics = useMemo(() => {
    const set = new Set(questions.map((q) => q.topic));
    return [ALL_TOPICS, ...Array.from(set)];
  }, [questions]);

  const [topic, setTopic] = useState<string>(ALL_TOPICS);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isSectionNavOpen, setIsSectionNavOpen] = useState<boolean>(false);

  const filtered = useMemo(
    () => (topic === ALL_TOPICS ? questions : questions.filter((q) => q.topic === topic)),
    [questions, topic],
  );

  const answeredCount = filtered.filter((q) => answers[q.id]).length;
  const correctCount = filtered.filter((q) => answers[q.id]?.correct).length;
  const currentQuestion = filtered[currentIdx];
  const sectionGroups = useMemo(() => {
    const groups = new Map<string, Array<{ q: Question; idx: number }>>();
    filtered.forEach((q, idx) => {
      const list = groups.get(q.topic) ?? [];
      list.push({ q, idx });
      groups.set(q.topic, list);
    });
    return Array.from(groups.entries()).map(([topicName, items]) => ({ topicName, items }));
  }, [filtered]);

  function handleMcq(q: Extract<Question, { type: "mcq" }>, idx: number) {
    if (answers[q.id]) return; // lock after answer
    setAnswers((prev) => ({
      ...prev,
      [q.id]: { type: "mcq", selected: idx, correct: idx === q.answer },
    }));
  }

  function handleShortSubmit(q: Extract<Question, { type: "short" }>) {
    if (answers[q.id]) return;
    const input = drafts[q.id] ?? "";
    if (!input.trim()) return;
    setAnswers((prev) => ({
      ...prev,
      [q.id]: {
        type: "short",
        input,
        correct: isShortAnswerCorrect(input, q.acceptedAnswers),
      },
    }));
  }

  function handleReset() {
    setAnswers({});
    setDrafts({});
    setCurrentIdx(0);
  }

  useEffect(() => {
    setCurrentIdx(0);
    setIsSectionNavOpen(false);
  }, [topic]);

  useEffect(() => {
    if (filtered.length === 0) {
      setCurrentIdx(0);
      return;
    }
    if (currentIdx >= filtered.length) {
      setCurrentIdx(filtered.length - 1);
    }
  }, [filtered.length, currentIdx]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIdx((idx) => Math.max(0, idx - 1));
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIdx((idx) => Math.min(filtered.length - 1, idx + 1));
        return;
      }

      if (
        currentQuestion &&
        currentQuestion.type === "mcq" &&
        !answers[currentQuestion.id] &&
        /^[1-9]$/.test(e.key)
      ) {
        const optionIdx = Number(e.key) - 1;
        if (optionIdx < currentQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: {
              type: "mcq",
              selected: optionIdx,
              correct: optionIdx === currentQuestion.answer,
            },
          }));
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [filtered.length, currentQuestion, answers]);

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.filterGroup}>
          <label htmlFor="topic-filter">Chủ đề:</label>
          <select
            id="topic-filter"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={styles.select}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.score}>
          <span>
            Đã trả lời: <strong>{answeredCount}</strong> / {filtered.length}
          </span>
          <span className={styles.correct}>
            Đúng: <strong>{correctCount}</strong>
          </span>
          <button
            type="button"
            className={styles.navMenuBtn}
            onClick={() => setIsSectionNavOpen((v) => !v)}
            aria-label="Mở điều hướng câu hỏi"
            title="Điều hướng câu hỏi theo section"
          >
            ☰
          </button>
          <button onClick={handleReset} className={styles.resetBtn} type="button">
            Làm lại
          </button>
        </div>
      </div>

      {filtered.length > 0 && isSectionNavOpen && (
        <div className={styles.sectionNav}>
          {sectionGroups.map((group) => (
            <section key={group.topicName} className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>{group.topicName}</h3>
              <div className={styles.picker}>
                {group.items.map(({ q, idx }) => {
                  const ans = answers[q.id];
                  const isCurrent = idx === currentIdx;
                  const isCorrect = Boolean(ans?.correct);
                  const isWrong = Boolean(ans && !ans.correct);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={`${styles.pickerBtn} ${isCurrent ? styles.current : ""} ${
                        isCorrect ? styles.correctBtn : ""
                      } ${isWrong ? styles.wrongBtn : ""}`}
                      onClick={() => {
                        setCurrentIdx(idx);
                        setIsSectionNavOpen(false);
                      }}
                      aria-label={`Đi đến câu ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {currentQuestion && (
        <div className={styles.questionCard}>
          <div className={styles.questionHeader}>
            <span className={styles.questionNumber}>Câu {currentIdx + 1}</span>
            <span className={styles.topicBadge}>{currentQuestion.topic}</span>
            {currentQuestion.difficulty && (
              <span className={`${styles.diffBadge} ${styles[`diff-${currentQuestion.difficulty}`]}`}>
                {currentQuestion.difficulty}
              </span>
            )}
            {currentQuestion.ref && (
              <a
                href={`/learn#${currentQuestion.ref.toLowerCase()}`}
                className={styles.refLink}
                target="_blank"
                rel="noreferrer"
              >
                📖 {currentQuestion.ref}
              </a>
            )}
          </div>

          <div className={styles.questionText}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentQuestion.question}</ReactMarkdown>
          </div>

          {currentQuestion.type === "mcq" ? (
            <ul className={styles.options}>
              {currentQuestion.options.map((opt, idx) => {
                const userAnswer = answers[currentQuestion.id];
                const isAnswered = Boolean(userAnswer);
                const selected = userAnswer?.type === "mcq" && userAnswer.selected === idx;
                const isCorrect = idx === currentQuestion.answer;
                const showCorrect = isAnswered && isCorrect;
                const showWrong = isAnswered && selected && !isCorrect;

                return (
                  <li key={idx}>
                    <button
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleMcq(currentQuestion, idx)}
                      className={`${styles.option} ${selected ? styles.selected : ""} ${
                        showCorrect ? styles.correctOpt : ""
                      } ${showWrong ? styles.wrongOpt : ""}`}
                    >
                      <span className={styles.optLetter}>{String.fromCharCode(65 + idx)}.</span>
                      <span>{opt}</span>
                      {showCorrect && <span className={styles.mark}>✓</span>}
                      {showWrong && <span className={styles.mark}>✗</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={styles.shortAnswer}>
              <input
                type="text"
                value={drafts[currentQuestion.id] ?? ""}
                onChange={(e) => setDrafts((p) => ({ ...p, [currentQuestion.id]: e.target.value }))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleShortSubmit(currentQuestion);
                }}
                disabled={Boolean(answers[currentQuestion.id])}
                placeholder="Nhập đáp án ngắn..."
                className={styles.shortInput}
              />
              <button
                type="button"
                onClick={() => handleShortSubmit(currentQuestion)}
                disabled={Boolean(answers[currentQuestion.id]) || !(drafts[currentQuestion.id] ?? "").trim()}
                className={styles.submitBtn}
              >
                Trả lời
              </button>
            </div>
          )}

          {answers[currentQuestion.id] && (
            <div
              className={`${styles.explanation} ${
                answers[currentQuestion.id].correct ? styles.expCorrect : styles.expWrong
              }`}
            >
              <div className={styles.expHeader}>
                {answers[currentQuestion.id].correct ? "✅ Chính xác!" : "❌ Chưa đúng"}
                {currentQuestion.type === "short" && !answers[currentQuestion.id].correct && (
                  <span className={styles.expectedAns}>
                    {" "}
                    — Đáp án mẫu: <code>{currentQuestion.acceptedAnswers[0]}</code>
                  </span>
                )}
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentQuestion.explanation}</ReactMarkdown>
            </div>
          )}

          <div className={styles.navControls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => setCurrentIdx((idx) => Math.max(0, idx - 1))}
              disabled={currentIdx === 0}
            >
              ←
            </button>
            <span className={styles.navCounter}>
              Câu {currentIdx + 1} / {filtered.length}
            </span>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => setCurrentIdx((idx) => Math.min(filtered.length - 1, idx + 1))}
              disabled={currentIdx === filtered.length - 1}
            >
              →
            </button>
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <p className={styles.empty}>Không có câu hỏi cho chủ đề này.</p>
      )}
    </div>
  );
}
