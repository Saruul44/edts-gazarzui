import Link from "next/link";

export default function Test() {
  const classes = [
    { rank: 1, name: "11а" },
    { rank: 2, name: "11б" },
    { rank: 3, name: "11в" },
    { rank: 4, name: "11г" },
    { rank: 5, name: "11д" },
  ];

  const myClass = "11д";

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

        {/* Class List */}
        <div className="bg-[#0D171F] rounded-2xl shadow-lg p-6">
          <h3 className="text-white font-bold text-xl mb-6">
            11-р анги, 5-р бүлэг
          </h3>
          <ul className="space-y-3">
            {classes.map((cls) => (
              <li
                key={cls.rank}
                className={`flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300 transform ${
                  cls.name === myClass
                    ? "bg-gradient-to-r from-[#00a6e1] to-[#00d4ff] text-white shadow-lg scale-105 animate-pulse"
                    : "bg-[#101c27] text-[#a39e98] hover:bg-[#142331] hover:scale-[1.03]"
                }`}
              >
                <span>
                  {cls.rank}-р байр: <b>{cls.name}</b>
                </span>
                {cls.name === myClass && (
                  <span className="text-sm font-semibold animate-pulse">
                    ✨ Миний анги
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
