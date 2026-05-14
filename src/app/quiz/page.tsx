import { readFile } from "node:fs/promises";
import path from "node:path";
import QuizClient, { type Question } from "./QuizClient";
import styles from "./page.module.css";

export const metadata = {
  title: "Quiz | Bach Huy Hoang",
  description: "Ôn tập kiến thức với chế độ trắc nghiệm và tự luận ngắn",
};

type QuizData = {
  version: number;
  questions: Question[];
};

export default async function QuizPage() {
  const quizPath = path.join(process.cwd(), "quiz.json");
  const raw = await readFile(quizPath, "utf-8");
  const data = JSON.parse(raw) as QuizData;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>🧠 Quiz ôn tập</h1>
        <p className={styles.subtitle}>
          {data.questions.length} câu hỏi · Lọc theo chủ đề · Xem đáp án ngay khi trả lời
        </p>
      </header>
      <QuizClient questions={data.questions} />
    </main>
  );
}
