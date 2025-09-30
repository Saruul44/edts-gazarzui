import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [difficulty, setDifficulty] = useState("easy"); // default: амархан

  // Сонголт тус бүрийн тохиргоо
  const difficultySettings = {
    easy: { time: 45, score: 10, estMin: 5 },
    medium: { time: 30, score: 15, estMin: 7 },
    hard: { time: 20, score: 20, estMin: 10 },
  };

  const levels = ["easy", "medium", "hard"];
  const levelNames = { easy: "Амархан", medium: "Дунд", hard: "Хэцүү" };
  const levelEmojis = { easy: "🟢", medium: "🟡", hard: "🔴" };

  return (
    <div className="bg-[#01060c] min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative">
        {/* Толгой хэсэг */}
        <div className="gap-3 mb-6 flex items-center pt-[20px]">
          <Link
            href="/nuur"
            className="flex items-center text-sm rounded-md gap-2 px-3"
          >
            <h1 className="text-white">Буцах</h1>
          </Link>
          <div className="ml-6">
            <h2 className="text-2xl text-white font-bold">Тест тохиргоо</h2>
            <p className="text-[#a39e98]">
              Хүссэн хэцүү байдал, асуултын тоог сонгоно уу
            </p>
          </div>
        </div>

        {/* Хэцүү байдал сонгох */}
        <div className="bg-[#050d13] border-2 border-[#19232b] rounded-3xl p-6 flex flex-col gap-4">
          {levels.map((level) => {
            const current = difficultySettings[level];
            return (
              <div
                key={level}
                className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
                  difficulty === level ? "bg-[#19232b]" : ""
                }`}
                onClick={() => setDifficulty(level)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{levelEmojis[level]}</span>
                  <div>
                    <div className="font-medium text-white">
                      {levelNames[level]}
                    </div>
                    <div className="text-sm text-[#a39e98]">
                      {current.time} секунд асуулт тус бүрт
                    </div>
                  </div>
                </div>
                <div className="text-white font-medium">{current.time}с</div>
              </div>
            );
          })}
        </div>

        {/* Тестийн тойм */}
        <div className="pt-6">
          <div className="bg-[#050d13] border-2 border-[#19232b] rounded-3xl p-6 flex flex-col gap-4">
            <div className="leading-none text-white font-semibold">
              Тестийн тойм
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg">
                <div className="text-2xl text-[#00a6e1] font-bold">
                  {difficultySettings[difficulty].score}
                </div>
                <div className="text-sm text-white">Асуулт</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#19232b]">
                <div className="text-2xl font-bold text-[#00a6e1]">
                  ~{difficultySettings[difficulty].estMin}
                </div>
                <div className="text-sm text-white">Минут</div>
              </div>
            </div>
          </div>
        </div>

        {/* Тест эхлүүлэх */}
        <div className="pt-6">
          <Link
            href={`/Test?difficulty=${difficulty}`} // Тест хуудсанд difficulty дамжуулж байна
            className="text-white shadow-xs inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#00a6e1] w-full h-10 rounded-md px-6"
          >
            Тест эхлүүлэх
          </Link>
        </div>
      </div>
    </div>
  );
}
