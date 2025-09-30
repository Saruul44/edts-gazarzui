import Link from "next/link";

export default function Testuud() {
  return (
    <div className="bg-[#01060c] min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#01060c] min-h-screen relative">
        <div>
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
        </div>
        <div className="pt-[10px]">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 ">
            <div class="rounded-xl border border-[#19232b] bg-[#050d13] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
              <div class="px-6 pt-4">
                <div class="text-2xl font-bold text-[#00a6e1]">3</div>
                <div class="text-sm text-muted-foreground text-[#a39e98]">
                  Нийт тест
                </div>
              </div>
            </div>
            <div class="rounded-xl border border-[#19232b] bg-[#050d13] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
              <div data-slot="card-content" class="px-6 pt-4">
                <div class="text-2xl font-bold text-green-500 text-white">
                  79%
                </div>
                <div class="text-sm text-muted-foreground text-[#a39e98]">
                  Дундаж оноо
                </div>
              </div>
            </div>
            <div class="rounded-xl border border-[#19232b] bg-[#050d13] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
              <div class="px-6 pt-4">
                <div class="text-2xl font-bold text-blue-500">35</div>
                <div class="text-sm text-muted-foreground text-[#a39e98]">
                  Зөв хариулт
                </div>
              </div>
            </div>
            <div class="rounded-xl border border-[#19232b] bg-[#050d13] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
              <div class="px-6 pt-4">
                <div class="text-2xl font-bold text-purple-500 ">23</div>
                <div class="text-sm text-muted-foreground text-[#a39e98]">
                  Минут
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            class="bg-card rounded-xl border border-[#19232b] bg-[#050d13] text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div
                data-slot="card-title"
                class=" text-white leading-none font-semibold"
              >
                Тестийн түүх
              </div>
              <div
                data-slot="card-description"
                class="text-muted-foreground text-[#a39e98] text-sm"
              >
                Өгсөн тестүүдийн дэлгэрэнгүй мэдээлэл
              </div>
            </div>
            <div data-slot="card-content" class="px-6">
              <div class="space-y-4">
                <div class="p-4 rounded-xl border border-[#19232b] bg-[#050d13] border rounded-lg">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center  gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a6e1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trophy h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>

                      <div>
                        <div class="font-medium text-white">Дунд тест</div>
                        <div class="text-sm text-muted-foreground text-[#a39e98]">
                          Sep 26, 2025
                        </div>
                      </div>
                    </div>
                    <span
                      data-slot="badge"
                      class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&amp;]:hover:bg-primary/90 text-white bg-[#00a6e1]"
                    >
                      80%
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Асуулт:{" "}
                      </span>
                      <span class="font-medium text-white">10</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Зөв:{" "}
                      </span>
                      <span class="font-medium text-green-500">8</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Хугацаа:{" "}
                      </span>
                      <span class="font-medium text-white">5:00</span>
                    </div>
                  </div>
                </div>
                <div class="p-4 rounded-xl border border-[#19232b] bg-[#050d13] border rounded-lg">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a6e1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trophy h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>

                      <div>
                        <div class="font-medium text-white">Амархан тест</div>
                        <div class="text-sm text-[#a39e98] text-muted-foreground">
                          Sep 25, 2025
                        </div>
                      </div>
                    </div>
                    <span
                      data-slot="badge"
                      class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&amp;]:hover:bg-primary/90 text-white bg-[#00a6e1]"
                    >
                      87%
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Асуулт:{" "}
                      </span>
                      <span class="font-medium text-white">15</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Зөв:{" "}
                      </span>
                      <span class="font-medium text-green-500">13</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Хугацаа:{" "}
                      </span>
                      <span class="font-medium text-white">7:30</span>
                    </div>
                  </div>
                </div>
                <div class="p-4 rounded-xl border border-[#19232b] bg-[#050d13] border rounded-lg">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a6e1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trophy h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>

                      <div>
                        <div class="font-medium text-white">Хэцүү тест</div>
                        <div class="text-sm text-muted-foreground text-[#a39e98]">
                          Sep 24, 2025
                        </div>
                      </div>
                    </div>
                    <span
                      data-slot="badge"
                      class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 bg-[#19232b] text-white"
                    >
                      70%
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Асуулт:{" "}
                      </span>
                      <span class="font-medium text-white">20</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Зөв:{" "}
                      </span>
                      <span class="font-medium text-green-500">14</span>
                    </div>
                    <div>
                      <span class="text-muted-foreground text-[#a39e98]">
                        Хугацаа:{" "}
                      </span>
                      <span class="font-medium text-white">10:00</span>
                    </div>
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
