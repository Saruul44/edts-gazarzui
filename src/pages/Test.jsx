import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();

  const questionsData = [
    {
      question: "Тайланд улсын нийслэл хэн бэ?",
      options: ["Киев", "Каир", "Улаанбаатар", "Бангкок"],
      correct: "Бангкок",
    },
    {
      question: "Монгол улсын нийслэл аль вэ?",
      options: ["Улаанбаатар", "Баку", "Абу-Даби", "Ереван"],
      correct: "Улаанбаатар",
    },
    {
      question: "Азербайжан улсын нийслэл аль вэ?",
      options: ["Баку", "Кабул", "Ереван", "Улаанбаатар"],
      correct: "Баку",
    },
    {
      question: "Арабын Нэгдсэн Эмират Улсын нийслэл аль вэ?",
      options: ["Абу-Даби", "Баку", "Кабул", "Ереван"],
      correct: "Абу-Даби",
    },
    {
      question: "Армени улсын нийслэл аль вэ?",
      options: ["Ереван", "Баку", "Улаанбаатар", "Абу-Даби"],
      correct: "Ереван",
    },
    {
      question: "Афганистан улсын нийслэл аль вэ?",
      options: ["Кабул", "Баку", "Улаанбаатар", "Ереван"],
      correct: "Кабул",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState([]);
  const [userXP, setUserXP] = useState(0); // оноо 0-оос эхлэх
  const [timeLeft, setTimeLeft] = useState(60); // секундээр

  const current = questionsData[currentIndex];
  const progress = ((currentIndex + 1) / questionsData.length) * 100;

  // Эхлэхэд хадгалсан оноо байвал унших
  useEffect(() => {
    const savedXP = localStorage.getItem("userXP");
    if (savedXP) {
      setUserXP(parseInt(savedXP, 10));
    }
  }, []);

  const handleAnswer = () => {
    const isCorrect = selected === current.correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setUserXP((prev) => {
        const newXP = prev + 50;
        localStorage.setItem("userXP", newXP); // оноо хадгалах
        return newXP;
      });
    }

    setResults((prev) => [
      ...prev,
      {
        question: current.question,
        selected,
        correct: current.correct,
        isCorrect,
      },
    ]);

    if (currentIndex + 1 < questionsData.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    router.push("/nuur");
  };

  // 1 минутын таймер
  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished]);

  if (finished) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col items-center py-8 px-4 text-white">
        <div className="flex justify-between items-center w-full max-w-2xl mb-6">
          <h1 className="text-2xl font-bold">Газарзүйн хичээл</h1>
          <div className="bg-[#002b3b] text-[#00a6e1] px-3 py-1 rounded-full font-semibold">
            XP: {userXP}
          </div>
        </div>

        <h2 className="text-3xl mb-4">Тест дууслаа!</h2>
        <p className="mb-6">
          Оноо: {score} / {questionsData.length}
        </p>

        <div className="max-w-2xl w-full">
          {results.map((res, idx) => (
            <div
              key={idx}
              className="mb-4 p-4 rounded-lg border"
              style={{ borderColor: res.isCorrect ? "green" : "red" }}
            >
              <h2 className="font-bold">{res.question}</h2>
              <p>
                Таны хариулт:{" "}
                <span
                  className={res.isCorrect ? "text-green-500" : "text-red-500"}
                >
                  {res.selected}
                </span>
              </p>
              {!res.isCorrect && (
                <p>
                  Зөв хариулт:{" "}
                  <span className="text-green-400">{res.correct}</span>
                </p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleBack}
          className="mt-6 bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-md text-white font-semibold"
        >
          Буцах
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-8 px-4 text-white">
      <div className="flex justify-between items-center w-full max-w-2xl mb-6">
        <h1 className="text-2xl font-bold">Газарзүйн хичээл</h1>
        <div className="bg-[#002b3b] text-[#00a6e1] px-3 py-1 rounded-full font-semibold">
          XP: {userXP}
        </div>
      </div>

      <div className="w-full max-w-2xl mb-2 flex justify-between items-center">
        <div className="w-3/4">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="ml-4 font-semibold">{timeLeft}s</div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl max-w-2xl w-full text-white">
        <h2 className="text-xl mb-4">{current.question}</h2>
        <div className="flex flex-col gap-3">
          {current.options.map((opt, idx) => (
            <label
              key={idx}
              className={`flex items-center p-3 rounded-md cursor-pointer border ${
                selected === opt
                  ? "bg-blue-500 border-blue-400"
                  : "bg-gray-700 border-gray-600"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={opt}
                className="mr-3"
                checked={selected === opt}
                onChange={() => setSelected(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleAnswer}
            disabled={!selected}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-white font-semibold disabled:opacity-50"
          >
            Хариулах
          </button>

          <button
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-md text-white font-semibold"
          >
            Буцах
          </button>
        </div>
      </div>

      <p className="mt-4 text-gray-300">
        {currentIndex + 1} / {questionsData.length}
      </p>
    </div>
  );
}
