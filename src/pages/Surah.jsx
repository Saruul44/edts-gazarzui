import { useState, useEffect } from "react";
import Link from "next/link";

const COUNTRIES = [
  {
    code: "MN",
    flag: "🇲🇳",
    name: "Монгол",
    capital: "Улаанбаатар",
    region: "Ази",
    subregion: "Зүүн Ази",
    population: "3,300,000",
    area: "1,564,116 km²",
    currency: "MNT",
    languages: "Монгол хэл",
  },
  {
    code: "CN",
    flag: "🇨🇳",
    name: "Хятад",
    capital: "Бээжин",
    region: "Ази",
    subregion: "Зүүн Ази",
    population: "1,400,000,000",
    area: "9,596,961 km²",
    currency: "CNY",
    languages: "Хятад (ба бусад)",
  },
  {
    code: "JP",
    flag: "🇯🇵",
    name: "Япон",
    capital: "Токио",
    region: "Ази",
    subregion: "Зүүн Ази",
    population: "125,800,000",
    area: "377,975 km²",
    currency: "JPY",
    languages: "Япон хэл",
  },
  {
    code: "KR",
    flag: "🇰🇷",
    name: "Солонгос",
    capital: "Сөүл",
    region: "Ази",
    subregion: "Зүүн Ази",
    population: "51,700,000",
    area: "100,210 km²",
    currency: "KRW",
    languages: "Солонгос хэл",
  },
  {
    code: "RU",
    flag: "🇷🇺",
    name: "Орос",
    capital: "Москва",
    region: "Ази/Европ",
    subregion: "Хойд Ази",
    population: "145,900,000",
    area: "17,098,246 km²",
    currency: "RUB",
    languages: "Орос хэл",
  },
  {
    code: "US",
    flag: "🇺🇸",
    name: "АНУ",
    capital: "Вашингтон",
    region: "Хойд Америк",
    subregion: "Хойд Америк",
    population: "331,000,000",
    area: "9,833,520 km²",
    currency: "USD",
    languages: "Англи хэл",
  },
  {
    code: "BR",
    flag: "🇧🇷",
    name: "Бразил",
    capital: "Бразилиа",
    region: "Өмнөд Америк",
    subregion: "Өмнөд Америк",
    population: "212,000,000",
    area: "8,515,767 km²",
    currency: "BRL",
    languages: "Португал хэл",
  },
  {
    code: "ZA",
    flag: "🇿🇦",
    name: "Өмнөд Африк",
    capital: "Преториа",
    region: "Африк",
    subregion: "Африк",
    population: "59,000,000",
    area: "1,221,037 km²",
    currency: "ZAR",
    languages: "Англи, Африканс",
  },
  {
    code: "AU",
    flag: "🇦🇺",
    name: "Австрали",
    capital: "Канберра",
    region: "Австрали",
    subregion: "Австрали",
    population: "25,700,000",
    area: "7,692,024 km²",
    currency: "AUD",
    languages: "Англи хэл",
  },
  // ... бусад улс
];

export default function Surah() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("Бүгд");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    if (isOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function openModal(country) {
    setSelected(country);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 200);
  }

  const filteredCountries = COUNTRIES.filter((c) => {
    const regionMatch =
      selectedRegion === "Бүгд"
        ? true
        : selectedRegion === "Хойд Америк"
        ? c.region === "Хойд Америк"
        : selectedRegion === "Өмнөд Америк"
        ? c.region === "Өмнөд Америк"
        : selectedRegion === "Африк"
        ? c.region === "Африк"
        : selectedRegion === "Австрали"
        ? c.region === "Австрали"
        : c.region.includes(selectedRegion); // Ази, Европ

    const searchMatch = c.name.toLowerCase().includes(searchText.toLowerCase());
    return regionMatch && searchMatch;
  });

  const regions = [
    "Бүгд",
    "Ази",
    "Европ",
    "Хойд Америк",
    "Өмнөд Америк",
    "Африк",
    "Австрали",
  ];

  return (
    <div
      className={`bg-[#01060c] min-h-screen ${isOpen ? "overflow-hidden" : ""}`}
    >
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative">
        <div className="flex p-[10px]">
          <div>
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
          </div>
          <div className="pl-[10px]">
            <h1 className="text-white">Суралцах горим</h1>
            <p className="text-[#a39e98]">
              Улс орон, нийслэлүүдийг дэлгэрэнгүй судлаарай
            </p>
          </div>
        </div>

        <div className="px-6">
          <div className="border-2 border-[#19232b] p-[10px] w-full rounded-xl mb-4">
            <input
              type="search"
              placeholder="Улс орон хайх..."
              className="text-[#a39e98] bg-transparent outline-none w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="bg-[#0d171f] text-muted-foreground h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-4 lg:grid-cols-7 mb-6">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium text-xs ${
                  selectedRegion === r
                    ? "text-[#00a6e1]"
                    : "text-white hover:bg-[#01060c]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((c) => (
              <div
                key={c.code}
                className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group ring-2 ring-primary/20 bg-primary/5"
              >
                <div className="px-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{c.flag}</div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          {c.name}
                        </div>
                        <div className="text-[#a39e98] text-sm">
                          {c.capital}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span className="text-[#a39e98]">{c.region}</span>
                    <span className="text-[#a39e98]">{c.subregion}</span>
                  </div>

                  <button
                    onClick={() => openModal(c)}
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 w-full text-white"
                  >
                    Дахин үзэх
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isOpen && selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></div>

            <div className="relative max-w-md w-full mx-4 bg-[#071017] rounded-2xl shadow-lg ring-1 ring-white/5 p-6">
              <div className="flex flex-col items-center">
                <div className="flex items-start justify-between gap-4 w-full">
                  <div>
                    <div className="text-3xl mb-2">
                      {selected.flag}{" "}
                      <span className="ml-2 text-xl font-semibold text-white">
                        {selected.name}
                      </span>
                    </div>
                    <div className="text-sm text-[#a39e98]">
                      Нийслэл: {selected.capital}
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="text-[#a39e98] hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="mt-4 text-sm text-[#d0ccc7]">
                <p>
                  <strong>Бүс нутаг:</strong> {selected.region}
                </p>
                <p className="mt-2">
                  <strong>Дэд бүс:</strong> {selected.subregion}
                </p>
                <p className="mt-2">
                  <strong>Хүн ам:</strong> {selected.population}
                </p>
                <p className="mt-2">
                  <strong>Газар нутгийн хэмжээ:</strong> {selected.area}
                </p>
                <p className="mt-2">
                  <strong>Валют:</strong> {selected.currency}
                </p>
                <p className="mt-2">
                  <strong>Албан ёсны хэл(үүд):</strong> {selected.languages}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md bg-[#0b93c7] text-white"
                >
                  Хаах
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
