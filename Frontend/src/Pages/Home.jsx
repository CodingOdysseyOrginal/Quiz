import { useState } from "react"

const questions = [
  {
    question: "What is React?",
    options: ["A database", "A JavaScript library", "An OS", "A browser"],
    answer: "A JavaScript library",
  },
  {
    question: "What language is React written in?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What hook is used for state?",
    options: ["useFetch", "useState", "useClass", "useEffectOnly"],
    answer: "useState",
  },
  {
  question: "What is the main difference between React and Next.js?",
  options: [
    "React is a framework and Next.js is a library",
    "Next.js is built on top of React and adds features like routing and server-side rendering",
    "React can only be used with Next.js",
    "There is no difference"
  ],
  answer: "Next.js is built on top of React and adds features like routing and server-side rendering",
},
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1)
    }

    const next = current + 1

    if (next < questions.length) {
      setCurrent(next)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setCurrent(0)
    setScore(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <div>
        <h2>Quiz Finished </h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Restart</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Quiz</h2>

      <p>
        Question {current + 1} / {questions.length}
      </p>

      <h3>{questions[current].question}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {questions[current].options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      <p>Score: {score}</p>
    </div>
  )
}