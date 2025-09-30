import Link from "next/link";

export default function Test() {
  const students = [
    { rank: 1, name: "Бат", score: 98 },
    { rank: 2, name: "Сараа", score: 95 },
    { rank: 3, name: "Мөнх", score: 93 },
    { rank: 4, name: "Оюунаа", score: 91 },
    { rank: 5, name: "Эрдэнэ", score: 89 },
    { rank: 6, name: "Тулга", score: 87 },
    { rank: 7, name: "Номин", score: 85 },
    { rank: 8, name: "Болор", score: 83 },
    { rank: 9, name: "Хонгор", score: 82 },
    { rank: 10, name: "Халиун", score: 80 },
  ];

  const currentUser = { rank: 15, name: "Та", score: 72 };
  const isInTop10 = students.some((s) => s.name === currentUser.name);

  return (
    <div className="bg-[#01060c] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/nuur"
            className="flex items-center gap-2 text-sm hover:text-[#00a6e1] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

        {/* Navigation Tabs */}
        <div className="bg-[#0D171F] h-10 grid grid-cols-4 rounded-lg shadow-md mb-8">
          {[
            { href: "/Ahits", label: "Ерөнхий" },
            { href: "/Testuud", label: "Тестүүд" },
            { href: "/Angi", label: "Ангийн амжилтууд" },
            { href: "/Huwi", label: "Хувийн амжилтууд" },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex justify-center items-center text-sm font-medium hover:bg-[#01060c] transition-colors rounded-md"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Top 10 Students */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            11-р ангийн эхний 10 байр
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg border border-[#1e293b]">
            <table className="w-full text-left text-white">
              <thead className="bg-[#0D171F]">
                <tr>
                  <th className="px-4 py-3 font-medium">Байр</th>
                  <th className="px-4 py-3 font-medium">Нэр</th>
                  <th className="px-4 py-3 font-medium">Оноо</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {students.map((s) => (
                  <tr
                    key={s.rank}
                    className={`transition-all duration-300 ${
                      s.name === currentUser.name
                        ? "bg-gradient-to-r from-yellow-400/30 via-yellow-400/20 to-yellow-400/30 font-bold text-yellow-300 animate-pulse"
                        : "hover:bg-[#1e293b]/60"
                    }`}
                  >
                    <td className="px-4 py-3">{s.rank}</td>
                    <td className="px-4 py-3">{s.name}</td>
                    <td className="px-4 py-3">{s.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Current user info */}
          {!isInTop10 && (
            <div className="mt-6 p-4 rounded-xl border border-[#1e293b] bg-[#0D171F] shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Таны байр</h3>
              <p className="text-[#cbd5e1]">
                Та{" "}
                <span className="text-yellow-300 font-bold">
                  {currentUser.rank}
                </span>
                -р байранд байна. 🎉 (Оноо: {currentUser.score})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
