import Link from "next/link";

export default function Testuud() {
  const tests = [
    {
      level: "Дунд тест",
      date: "Sep 26, 2025",
      score: 80,
      questions: 10,
      correct: 8,
      time: "5:00",
      color: "bg-[#00a6e1]",
    },
    {
      level: "Амархан тест",
      date: "Sep 25, 2025",
      score: 87,
      questions: 15,
      correct: 13,
      time: "7:30",
      color: "bg-[#00a6e1]",
    },
    {
      level: "Хэцүү тест",
      date: "Sep 24, 2025",
      score: 70,
      questions: 20,
      correct: 14,
      time: "10:00",
      color: "bg-[#19232b]",
    },
  ];

  return (
    <div className="bg-[#01060c] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/nuur"
            className="flex items-center gap-2 text-sm hover:text-[#00a6e1] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Буцах
          </Link>
          <div>
            <h2 className="text-2xl font-bold">Миний прогресс</h2>
            <p className="text-[#a39e98]">
              Суралцах явцын дэлгэрэнгүй мэдээлэл
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-[#0D171F] rounded-lg p-1">
          {[
            { href: "/Ahits", label: "Ерөнхий" },
            { href: "/Testuud", label: "Тестүүд" },
            { href: "/Angi", label: "Ангийн амжилтууд" },
            { href: "/Huwi", label: "Хувийн амжилтууд" },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex-1 text-center py-2 rounded-full text-sm font-medium text-white hover:bg-[#01060c] transition-colors"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-xl border border-[#19232b] bg-[#050d13] flex flex-col gap-3 py-6 shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-[#00a6e1]">3</div>
            <div className="text-sm text-[#a39e98]">Нийт тест</div>
          </div>
          <div className="rounded-xl border border-[#19232b] bg-[#050d13] flex flex-col gap-3 py-6 shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-green-500">79%</div>
            <div className="text-sm text-[#a39e98]">Дундаж оноо</div>
          </div>
          <div className="rounded-xl border border-[#19232b] bg-[#050d13] flex flex-col gap-3 py-6 shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-blue-500">35</div>
            <div className="text-sm text-[#a39e98]">Зөв хариулт</div>
          </div>
          <div className="rounded-xl border border-[#19232b] bg-[#050d13] flex flex-col gap-3 py-6 shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-purple-500">23</div>
            <div className="text-sm text-[#a39e98]">Минут</div>
          </div>
        </div>

        {/* Test History */}
        <div className="bg-[#050d13] rounded-xl border border-[#19232b] shadow-lg p-6 space-y-4">
          <div>
            <h3 className="text-white font-semibold text-lg">Тестийн түүх</h3>
            <p className="text-sm text-[#a39e98]">
              Өгсөн тестүүдийн дэлгэрэнгүй мэдээлэл
            </p>
          </div>
          <div className="space-y-4">
            {tests.map((test, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#19232b] bg-[#0d121a] shadow-md hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke={
                        test.color.includes("#00a6e1") ? "#00a6e1" : "#ffffff"
                      }
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <div>
                      <div className="font-medium text-white">{test.level}</div>
                      <div className="text-sm text-[#a39e98]">{test.date}</div>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-medium text-white ${test.color}`}
                  >
                    {test.score}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-[#a39e98]">Асуулт: </span>
                    <span className="font-medium text-white">
                      {test.questions}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#a39e98]">Зөв: </span>
                    <span className="font-medium text-green-500">
                      {test.correct}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#a39e98]">Хугацаа: </span>
                    <span className="font-medium text-white">{test.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
