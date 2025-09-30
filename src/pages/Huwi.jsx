import Link from "next/link";

export default function Test() {
  // Жишээ өгөгдөл
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

  // Одоогийн хэрэглэгчийн мэдээлэл (жишээ нь)
  const currentUser = { rank: 15, name: "Та", score: 72 };

  // currentUser эхний 10-д байгаа эсэхийг шалгана
  const isInTop10 = students.some((s) => s.name === currentUser.name);

  return (
    <div className="bg-[#01060c] min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative p-6">
        {/* Back button + header */}
        <div className="flex items-start gap-4 mb-6">
          <Link
            href="/nuur"
            className="flex items-center  text-sm pt-[20px] rounded-md gap-2 px-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-white"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            <span className="text-white">Буцах</span>
          </Link>
          <div>
            <h2 className="text-2xl text-white font-bold">Миний прогресс</h2>
            <p className="text-[#a39e98]">
              Суралцах явцын дэлгэрэнгүй мэдээлэл
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#0D171F] h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-4 shadow-md mb-8">
          <Link
            href="/Ahits"
            className="flex text-white items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors"
          >
            Ерөнхий
          </Link>
          <Link
            href="/Testuud"
            className="flex text-white items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors"
          >
            Тестүүд
          </Link>
          <Link
            href="/Angi"
            className="flex text-white items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors"
          >
            Ангийн амжилтууд
          </Link>
          <Link
            href="/Huwi"
            className="flex text-white items-center justify-center gap-1.5 rounded-md hover:bg-[#01060C] px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors"
          >
            Хувийн амжилтууд
          </Link>
        </div>

        {/* 11-р ангийн эхний 10 байр */}
        <div className="mt-6">
          <h2 className="text-xl text-white font-semibold mb-4">
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
                    className={`transition-colors ${
                      s.name === currentUser.name
                        ? "bg-[#1e293b] font-bold text-yellow-300"
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

          {/* Хэрэв хэрэглэгч эхний 10-д байхгүй бол тусад нь харуулна */}
          {!isInTop10 && (
            <div className="mt-6 p-4 rounded-xl border border-[#1e293b] bg-[#0D171F] shadow-lg">
              <h3 className="text-lg text-white font-semibold mb-2">
                Таны байр
              </h3>
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
