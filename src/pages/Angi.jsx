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
    <div className="bg-[#01060c] min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative">
        {/* Буцах товч + гарчиг */}
        <div class="gap-3 mb-6">
          <div className="flex">
          <Link
              href="/nuur"
              class="flex items-center  text-sm pt-[20px] rounded-md gap-2 px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 mr-2 text-white"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <h1 className="text-white">Буцах</h1>
            </Link>
            <div>
              <h2 class="text-2xl pt-[20px] text-white font-bold">
                Миний прогресс
              </h2>
              <p class="text-muted-foreground text-[#a39e98]">
                Суралцах явцын дэлгэрэнгүй мэдээлэл
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-[#0D171F] text-muted-foreground h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-4">
            <Link
              href="/Ahits"
              class="flex text-white items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap "
            >
              Ерөнхий
            </Link>
            <Link
              href="/Testuud"
              class="flex-1 text-white flex items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Тестүүд
            </Link>
            <Link
              href="/Angi"
              class="flex text-white items-center hover:bg-[#01060C] justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Ангийн амжилтууд
            </Link>
            <Link
              href="/Huwi"
              class="flex text-white items-center justify-center gap-1.5 rounded-md hover:bg-[#01060C] px-2 py-1 text-sm font-medium whitespace-nowrap"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Хувийн амжилтууд
            </Link>
          </div>
        </div>

        {/* 11-р ангийн 5-р бүлгийн ангиуд */}
        <div className="pt-[10px]">
          <div className="bg-[#0D171F] pt-[10px]  rounded-2xl shadow-lg p-6">
            <h3 className="text-white font-bold text-xl mb-6">
              11-р анги, 5-р бүлэг
            </h3>
            <ul className="space-y-3">
              {classes.map((cls) => (
                <li
                  key={cls.rank}
                  className={`flex items-center justify-between px-5 py-3 rounded-xl transition-transform duration-200 ${
                    cls.name === myClass
                      ? "bg-[#00a6e1] text-white shadow-lg scale-105"
                      : "bg-[#101c27] text-[#a39e98] hover:bg-[#142331] hover:scale-[1.02]"
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
    </div>
  );
}
