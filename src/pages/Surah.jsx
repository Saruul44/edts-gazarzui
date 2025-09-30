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
        : c.region.includes(selectedRegion);

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
            <h1 className="text-2xl font-bold">Суралцах горим</h1>
            <p className="text-[#a39e98]">
              Улс орон, нийслэлүүдийг дэлгэрэнгүй судлаарай
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="search"
            placeholder="Улс орон хайх..."
            className="w-full p-3 rounded-xl bg-[#19232b] text-white outline-none placeholder:text-[#a39e98]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Regions */}
        <div className="flex flex-wrap gap-2 mb-6">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedRegion === r
                  ? "bg-[#00a6e1] text-white"
                  : "bg-[#19232b] text-[#a39e98] hover:bg-[#0b93c7] hover:text-white"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Country Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((c) => (
            <div
              key={c.code}
              className="flex flex-col items-center gap-4 rounded-2xl p-6 bg-[#0d171f] shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-6xl">{c.flag}</div>
              <div className="text-xl font-semibold">{c.name}</div>
              <div className="text-[#a39e98]">{c.capital}</div>
              <div className="flex justify-between w-full text-sm text-[#a39e98]">
                <span>{c.region}</span>
                <span>{c.subregion}</span>
              </div>
              <button
                onClick={() => openModal(c)}
                className="w-full py-2 mt-2 rounded-xl bg-gradient-to-r from-[#0b93c7] to-[#00a6e1] hover:from-[#00a6e1] hover:to-[#0b93c7] transition-colors font-semibold"
              >
                Дахин үзэх
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          ></div>
          <div className="relative max-w-md w-full mx-4 bg-[#071017] rounded-3xl shadow-xl p-6 animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-xl hover:text-[#00a6e1]"
            >
              ✕
            </button>
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl">{selected.flag}</div>
              <div className="text-2xl font-bold">{selected.name}</div>
              <div className="text-[#a39e98]">Нийслэл: {selected.capital}</div>
              <div className="mt-4 text-sm text-[#d0ccc7] space-y-2">
                <p>
                  <strong>Бүс нутаг:</strong> {selected.region}
                </p>
                <p>
                  <strong>Дэд бүс:</strong> {selected.subregion}
                </p>
                <p>
                  <strong>Хүн ам:</strong> {selected.population}
                </p>
                <p>
                  <strong>Газар нутгийн хэмжээ:</strong> {selected.area}
                </p>
                <p>
                  <strong>Валют:</strong> {selected.currency}
                </p>
                <p>
                  <strong>Албан ёсны хэл(үүд):</strong> {selected.languages}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-[#0b93c7] to-[#00a6e1] hover:from-[#00a6e1] hover:to-[#0b93c7] text-white font-semibold"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
