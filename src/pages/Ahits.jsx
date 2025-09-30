import Link from "next/link";

export default function Ahits() {
  return (
    <div className="bg-[#01060c] min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative">
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
        <div className="pt-[10px]">
          <div class="bg-card text-card-foreground flex flex-col border  gap-6 rounded-xl border bg-[#050d13] border-[#19232b] py-6 shadow-sm">
            <div class="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div class="flex items-center flex-row justify-between">
                <div>
                  <div class="leading-none font-semibold flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="#00a6e1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star h-5 w-5"
                      fill="#00a6e1"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 
           22 12 18.56 5.82 22 7 14.14l-5-4.87 
           6.91-1.01L12 2z"
                      />
                    </svg>

                    <h1 className="text-white">Түвшин 5</h1>
                  </div>
                  <div class="text-muted-foreground text-[#a39e98] text-sm">
                    1250 / 1250 туршлага
                  </div>
                </div>
                <div class="flex items-center gap-2">
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
                    class="lucide lucide-flame h-5 w-5 text-red-500"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                  <span class="font-bold text-white">7 хоног</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range w-full text-[#00a6e1]"
              />
            </div>
            <div data-slot="card-content" class="px-6">
              <div class="relative w-full overflow-hidden rounded-full h-3 mb-4">
                <div class="bg-primary h-full w-full flex-1 transition-all"></div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#00a6e1] text-primary">
                    1250
                  </div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Нийт оноо
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#00a6e1] text-primary">
                    3
                  </div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Суралцсан улс
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#00a6e1] text-primary">
                    79%
                  </div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Дундаж оноо
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#00a6e1] text-primary">
                    1
                  </div>
                  <div class="text-sm text-[#a39e98] text-muted-foreground">
                    Үзсэн видео
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[20px] grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-[#050d13] border-[#19232b]">
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                class="grid auto-rows-min items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  class="leading-none font-semibold text-white flex items-center gap-2"
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
                    class="lucide lucide-clock h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Сүүлийн үйл ажиллагаа
                </div>
              </div>
              <div data-slot="card-content" class="px-6 space-y-3">
                <div class="flex items-center  justify-between p-3 bg-[#091119] rounded-lg">
                  <div>
                    <div class="font-medium text-white">Тест - medium</div>
                    <div class="text-sm text-[#a39e98] text-muted-foreground">
                      Sep 26, 2025
                    </div>
                  </div>
                  <span
                    data-slot="badge"
                    class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent bg-[#00a6e1] text-white bg-primary"
                  >
                    80%
                  </span>
                </div>
                <div class="flex items-center bg-[#091119] justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div class="font-medium text-white">Тест - easy</div>
                    <div class="text-sm text-[#a39e98] text-muted-foreground">
                      Sep 25, 2025
                    </div>
                  </div>
                  <span
                    data-slot="badge"
                    class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent text-white bg-[#00a6e1]"
                  >
                    87%
                  </span>
                </div>
                <div class="flex items-center bg-[#091119] justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div class="font-medium text-white">Тест - hard</div>
                    <div class="text-sm text-[#a39e98] text-muted-foreground">
                      Sep 24, 2025
                    </div>
                  </div>
                  <span
                    data-slot="badge"
                    class="inline-flex items-center text-white justify-center rounded-md bg-[#19232B] px-2 py-0.5 text-xs font-medium w-fit gap-1"
                  >
                    70%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            class="bg-card rounded-xl border bg-[#050d13] border-[#19232b] text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div
                data-slot="card-title"
                class="leading-none text-white font-semibold flex items-center gap-2"
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
                  class="lucide lucide-trending-up h-5 w-5"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                Сүүлийн ахиц
              </div>
            </div>
            <div class="px-6 space-y-3">
              <div class="bg-[#091119] flex items-center justify-between p-3 rounded-lg">
                <div>
                  <div class="font-medium text-white">Монгол</div>
                  <div class="text-sm text-muted-foreground text-[#a39e98]">
                    Sep 26, 2025
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-lg">🏆</span>
                  <span class="font-medium text-green-500">100%</span>
                </div>
              </div>
              <div class="bg-[#091119] flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div class="font-medium text-white">Хятад</div>
                  <div class="text-sm text-muted-foreground text-[#a39e98]">
                    Sep 25, 2025
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-lg">🏆</span>
                  <span class="font-medium text-green-500">90%</span>
                </div>
              </div>
              <div class="bg-[#091119] flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div class="font-medium text-white">Япон</div>
                  <div class="text-sm text-muted-foreground text-[#a39e98]">
                    Sep 24, 2025
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-lg">🥈</span>
                  <span class="font-medium text-yellow-500 text-[#f0b100]">
                    85%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
