import Link from "next/link";

export default function Ahits() {
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

        {/* Progress Card */}
        <div className="bg-[#050d13] rounded-2xl border border-[#19232b] p-6 shadow-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 font-semibold text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="#00a6e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  fill="#00a6e1"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
                Түвшин 5
              </div>
              <div className="text-sm text-[#a39e98] mt-1">
                1250 / 1250 туршлага
              </div>
            </div>
            <div className="flex items-center gap-2">
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
                className="h-5 w-5 text-red-500"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
              <span className="font-bold text-white">7 хоног</span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="w-full accent-[#00a6e1] mb-4"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: 1250, label: "Нийт оноо" },
              { value: 3, label: "Суралцсан улс" },
              { value: "79%", label: "Дундаж оноо" },
              { value: 1, label: "Үзсэн видео" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold text-[#00a6e1]">
                  {item.value}
                </div>
                <div className="text-sm text-[#a39e98]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities & Progress */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Tests */}
          <div className="bg-[#050d13] rounded-2xl border border-[#19232b] p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 font-semibold text-white mb-2">
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
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Сүүлийн үйл ажиллагаа
            </div>
            {[
              { name: "Тест - medium", date: "Sep 26, 2025", score: "80%" },
              { name: "Тест - easy", date: "Sep 25, 2025", score: "87%" },
              { name: "Тест - hard", date: "Sep 24, 2025", score: "70%" },
            ].map((test) => (
              <div
                key={test.name}
                className="flex items-center justify-between p-3 rounded-lg bg-[#091119]"
              >
                <div>
                  <div className="font-medium">{test.name}</div>
                  <div className="text-sm text-[#a39e98]">{test.date}</div>
                </div>
                <span className="px-2 py-0.5 bg-[#00a6e1] rounded-md text-white text-xs font-medium">
                  {test.score}
                </span>
              </div>
            ))}
          </div>

          {/* Recent Progress */}
          <div className="bg-[#050d13] rounded-2xl border border-[#19232b] p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 font-semibold text-white mb-2">
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
                className="h-5 w-5"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              Сүүлийн ахиц
            </div>
            {[
              {
                country: "Монгол",
                date: "Sep 26, 2025",
                medal: "🏆",
                score: "100%",
                color: "text-green-500",
              },
              {
                country: "Хятад",
                date: "Sep 25, 2025",
                medal: "🏆",
                score: "90%",
                color: "text-green-500",
              },
              {
                country: "Япон",
                date: "Sep 24, 2025",
                medal: "🥈",
                score: "85%",
                color: "text-yellow-500",
              },
            ].map((item) => (
              <div
                key={item.country}
                className="flex items-center justify-between p-3 rounded-lg bg-[#091119]"
              >
                <div>
                  <div className="font-medium">{item.country}</div>
                  <div className="text-sm text-[#a39e98]">{item.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.medal}</span>
                  <span className={`font-medium ${item.color}`}>
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
