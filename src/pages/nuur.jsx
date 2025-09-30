import { useState } from "react";
import { useRouter } from "next/router";
import Surah from "./Surah";
import Link from "next/link";

export default function Nuur() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/Login");
  };

  return (
    <div className="bg-[#01060c] min-h-[130vh]">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-full relative">
        <div className="flex justify-between items-center p-6">
          {/* Зураг, нэр, болон XP */}
          <div className="flex p-[10px]">
            <div className="p-2 bg-primary/20 rounded-lg">
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
                className="lucide text-[#00a6e1] bg-[#002b3b] rounded w-[50px] lucide-globe h-8 w-8 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl text-white font-bold text-balance">
                Газарзүйн хичээл
              </h1>
              <p className="text-muted-foreground text-white">
                11-р ангийн улс орон, нийслэл
              </p>
            </div>
          </div>

          {/* User info */}
          <div className="relative flex items-center gap-3">
            {/* Зураг + нэр дээр дарахад dropdown */}
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://ui-avatars.com/api/?name=User&background=00a6e1&color=fff"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-[#00a6e1]"
              />
              <span className="text-white hidden sm:block">User</span>
            </div>

            {/* XP блок: дарахад ямар ч үйлдэл хийхгүй */}

            {/* Dropdown */}
            {open && (
              <div className="pt-[50px]">
                <div className="absolute right-0 mt-2  bg-[#050d13] border border-[#19232b] rounded-lg shadow-lg w-32">
                  <button
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#19232b] rounded-lg"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center text-white mb-12">
          <h1 className="text-4xl pt-[50px] p-[10px] font-bold">
            Дэлхийн улс орнуудыг <span className="text-[#00a6e1]">амархан</span>{" "}
            сурцгаая
          </h1>
          <p className="text-xl text-[#a39e98] mb-8 max-w-2xl mx-auto">
            Интерактив тест, видео хичээл болон прогресс хянах системээр дэлхийн
            бүх улс орон, тэдгээрийн нийслэлийг эзэмшээрэй
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-6">
          <div className="flex flex-col justify-center items-center p-[50px] rounded-3xl bg-[#050d13] border-2 border-[#19232b]">
            <h1 className="text-[#00a6e1] text-2xl">33</h1>
            <h1 className="text-[#a39e98] text-sm">Улс орон</h1>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center border-2 bg-[#050d13] p-[70px] border-[#19232b]">
            <h1 className="text-[#00a6e1] text-2xl">7</h1>
            <h1 className="text-[#a39e98] text-sm">Тив</h1>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center border-2 bg-[#050d13] p-[50px] border-[#19232b]">
            <h1 className="text-[#00a6e1] text-2xl">9%</h1>
            <h1 className="text-[#a39e98] text-sm">Прогресс</h1>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center border-2 bg-[#050d13] p-[70px] border-[#19232b]">
            <h1 className="text-[#00a6e1] text-2xl">3</h1>
            <h1 className="text-[#a39e98] text-sm">Тест</h1>
          </div>
        </div>
        <div class="grid md:grid-cols-2  md:grid-cols-3 gap-4 mb-12 px-6">
          <div class=" flex flex-col gap-6 rounded-xl border border-[#19232b] bg-[#050d13] py-6 shadow-sm hover:shadow-lg transition-shadow ">
            <div
              data-slot="card-header"
              class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <svg
                    className="text-[#00a6e1] bg-[#002b3b] w-[40px] h-[30px] rounded  w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <div>
                  <div className="leading-none text-white font-semibold">
                    Суралцах горим
                  </div>
                  <div class="text-muted-foreground text-[#a39e98] text-sm">
                    Улс орон, нийслэл танилцуулга
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm text-[#a39e98] text-muted-foreground mb-4">
                Дэлхийн улс орнуудыг тивээр ангилан суралцаж, нийслэлийг
                цээжилцгээе
              </p>
              <Link
                href="Surah"
                class="flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 w-full text-white hover:text-black hover:bg-[#00a6e1]"
              >
                Эхлэх
              </Link>
            </div>
          </div>

          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-[#050d13] border-[#19232b] py-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
            <div class="items-start gap-1.5 px-6 ">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
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
                    className="text-[#00a6e1] bg-[#002b3b] w-[40px] h-[30px] rounded  w-6 text-primary"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="leading-none text-white font-semibold">
                    Тест өгөх
                  </div>
                  <div class="text-[#a39e98] text-muted-foreground text-sm">
                    Мэдлэгээ шалгаж үзээрэй
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6">
              <p class="text-sm text-[#a39e98] text-muted-foreground mb-4">
                Янз бүрийн төрлийн асуултаар өөрийн мэдлэгийг шалгаж, оноо
                цуглуулаарай
              </p>
              <Link
                href="/Ehluuleh"
                className="flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 w-full text-white hover:text-black hover:bg-[#00a6e1]"
              >
                Эхлэх
              </Link>
            </div>
          </div>
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl bg-[#050d13] border border-[#19232b] py-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
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
                    class="text-[#00a6e1] bg-[#002b3b] w-[40px] h-[30px] rounded  w-6 text-primary"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <div>
                  <div className="leading-none text-white font-semibold">
                    Миний прогресс
                  </div>
                  <div className="text-[#a39e98] text-muted-foreground text-sm">
                    Ахиц дэвшил, амжилтууд
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm text-[#a39e98] text-muted-foreground mb-4">
                Суралцах явцаа хянаж, ангийн болон өөрийн амжилтуудаа үзээж
                оноогоо ахиулаарай
              </p>
              <Link
                href="/Ahits"
                className="flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 w-full text-white hover:text-black hover:bg-[#00a6e1]"
              >
                Харах
              </Link>
            </div>
          </div>
        </div>
        <div className=" gap-4 mb-12 px-6">
          <div className="border-2 border-[#19232b] rounded-3xl pb-[20px] pl-[30px] pr-[30px] pt-[20px]">
            <div className="gap-[10px] flex pb-[20px]">
              <div>
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
                  class="lucide text-[#00a6e1] lucide-map h-6 w-6 text-primary"
                >
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                  <path d="M15 5.764v15"></path>
                  <path d="M9 3.236v15"></path>
                </svg>
              </div>
              <div>
                <div class="leading-none text-white font-semibold">
                  Интерактив дэлхийн газрын зураг
                </div>
                <div class="text-muted-foreground text-[#a39e98] text-sm">
                  Улс орнуудыг газрын зураг дээрээс олж сурцгаая
                </div>
              </div>
            </div>
            <div class="px-6 bg-[#091119] pl-[30px] pb-[10px] rounded-lg ">
              <div class="bg-muted/50 rounded-lg p-8 text-center">
                <div class="text-6xl mb-4">🗺️</div>
                <p class="text-[#a39e98] text-muted-foreground mb-4">
                  Интерактив газрын зураг удахгүй нэмэгдэнэ
                </p>
                <button
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-[#091119] text-[#a39e98] shadow-xs  h-9 px-4 py-2"
                  disabled=""
                >
                  Удахгүй
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-4 mb-12 px-6">
          <div className="border-2 rounded-3xl pl-[30px] pt-[20px] border-[#19232b]">
            <div>
              <h1 className="text-white">Таны прогресс</h1>
              <p className="text-[#a39e98]">
                Суралцсан хэсгүүд болон ахиц дэвшил
              </p>
            </div>
            <div className="pt-[20px]">
              <h1 className="text-white">Нийт прогресс</h1>
              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range w-full text-[#00a6e1]"
              />
            </div>
            <div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div class="text-center">
                  <div class="text-lg text-white font-semibold">3</div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Суралцсан улс
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-lg text-white font-semibold">3</div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Амжилттай тест
                  </div>
                </div>
                <div class="text-center ">
                  <div class="text-lg text-white font-semibold">1250</div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Цуглуулсан оноо
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
