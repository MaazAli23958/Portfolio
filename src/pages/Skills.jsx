import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div>
      <main class="layout-container flex h-full grow flex-col">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1 gap-12">
            <div class="flex flex-col items-center text-center gap-4">
              <div class="inline-flex items-center rounded-full border border-gray-200 dark:border-[#326267] bg-white dark:bg-[#193133] px-3 py-1 text-xs font-medium text-slate-600 dark:text-[#92c5c9]">
                <span class="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Tech Stack &amp; Tools
              </div>
              <h2 class="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
                Technical Proficiency
              </h2>
              <p class="text-slate-600 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-[600px]">
                Currently specializing in
                <span class="text-primary text-cyan-400 font-semibold">
                  {" "}
                  Front-End{" "}
                </span>
                development while actively expanding into the
                <span class="text-primary text-cyan-400 font-semibold">
                  {" "}
                  MERN{" "}
                </span>{" "}
                stack ecosystem.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div class="flex flex-col gap-6">
                <div class="flex items-center justify-between border-b border-gray-200 dark:border-[#326267] pb-2">
                  <h3 class="text-xl font-bold leading-tight flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary text-cyan-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </span>
                    Frontend Core
                  </h3>
                  <span class="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-[#92c5c9]">
                    Mastered
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.1)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112122] transition-colors duration-300">
                      <span className="material-symbols-outlined text-cyan-400 text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium bg-primary/10 text-primary">
                      Advanced
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">React.js</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Component architecture, Hooks, Context API
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-2 bg-cyan-400 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.1)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112122] transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">
                        <svg width="48" height="48" viewBox="0 0 128 128">
                          <path
                            d="M34 106l9-5c2 4 4 7 9 7 4 0 6-2 6-6V58h11v44c0 11-6 16-16 16-9 0-14-5-17-12zm54-6c3 5 6 9 13 9 5 0 8-2 8-5 0-4-3-5-9-8l-3-1c-8-3-14-7-14-15 0-8 6-14 15-14 7 0 12 2 15 9l-8 5c-2-3-4-5-7-5-3 0-5 2-5 5 0 3 2 5 7 7l3 1c10 4 15 8 15 16 0 9-7 15-17 15-10 0-16-5-19-11z"
                            fill="#22D3EE"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium bg-primary/10 text-primary">
                      Advanced
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">JavaScript (ES6+)</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Async/Await, DOM Manipulation, Modules
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-2 bg-cyan-400 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.1)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112122] transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">
                        <svg
                          viewBox="0 0 54 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8"
                        >
                          <path
                            fill="#38BDF8"
                            d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 6 23.1 7.2C25.24 7.86 26.78 9.74 28.49 11.83C31.27 15.17 34.5 19 40.5 19C47.7 19 52.2 15.4 54 8.2C51.3 11.8 48.15 13 44.4 11.8C42.26 11.14 40.72 9.26 39.01 7.17C36.23 3.83 33 0 27 0ZM13.5 14C6.3 14 1.8 17.6 0 24.8C2.7 21.2 5.85 20 9.6 21.2C11.74 21.86 13.28 23.74 14.99 25.83C17.77 29.17 21 33 27 33C34.2 33 38.7 29.4 40.5 22.2C37.8 25.8 34.65 27 30.9 25.8C28.76 25.14 27.22 23.26 25.51 21.17C22.73 17.83 19.5 14 13.5 14Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium bg-primary/10 text-primary">
                      Advanced
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Tailwind CSS</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Responsive Design, Custom Configurations
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-2 bg-cyan-400 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.1)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112122] transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          fill="#22d3ee"
                          width="50"
                          height="50"
                        >
                          <path d="M0 32l34.9 395.4L192 480l157.1-52.6L384 32H0zm308.2 94.6l-4.3 48.5H140.1l3.2 36h156.5l-9.2 103.3L192 346.9l-.2.1-98.5-32.5-6.7-75.1h48.2l3.4 38.2 53.8 18.3 54-18.3 5.6-62.9H83.3l-12.8-144h237.7z" />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium bg-primary/10 text-primary">
                      Mastered
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">HTML5</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Semantic Markup, Accessibility
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-2 bg-cyan-400 rounded-full"
                      style={{ width: "97%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.1)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112122] transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 120 120"
                          width="50"
                          height="50"
                          fill="none"
                        >
                          <rect width="120" height="120" rx="20" fill="none" />
                          <text
                            x="50%"
                            y="55%"
                            textAnchor="middle"
                            fill="#22D3EE"
                            fontSize="40"
                            fontWeight="bold"
                            fontFamily="Arial, sans-serif"
                            dy=".3em"
                          >
                            CSS
                          </text>
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium bg-primary/10 text-primary">
                      Mastered
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">CSS3</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Animations, Flexbox, Grid
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-2 bg-cyan-400 rounded-full"
                      style={{ width: "97%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#326267] pb-2">
                <h3 className="text-xl font-bold leading-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="48"
                      height="48"
                    >
                      <rect x="3" y="4" width="18" height="6" rx="2" />
                      <rect x="3" y="14" width="18" height="6" rx="2" />
                      <circle cx="7" cy="7" r="1" fill="#22D3EE" />
                      <circle cx="7" cy="17" r="1" fill="#22D3EE" />
                      <line x1="12" y1="10" x2="12" y2="14" />
                    </svg>
                  </span>
                  Backend Learning Path
                </h3>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-400 text-sm animate-spin text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-[#92c5c9]">
                    In Progress
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group relative flex flex-col gap-4 rounded-xl border border-dashed border-gray-300 dark:border-slate-600 bg-card-light/50 dark:bg-card-dark/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card-light dark:hover:bg-card-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-500 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                          className="w-12 h-12"
                        >
                          <rect
                            x="4"
                            y="8"
                            width="56"
                            height="40"
                            rx="6"
                            className="fill-cyan-400"
                          />
                          <rect
                            x="4"
                            y="8"
                            width="56"
                            height="8"
                            rx="6"
                            className="fill-cyan-600"
                          />

                          <circle
                            cx="10"
                            cy="12"
                            r="1.5"
                            className="fill-white"
                          />
                          <circle
                            cx="14"
                            cy="12"
                            r="1.5"
                            className="fill-white"
                          />
                          <circle
                            cx="18"
                            cy="12"
                            r="1.5"
                            className="fill-white"
                          />

                          <rect
                            x="10"
                            y="22"
                            width="20"
                            height="3"
                            rx="1.5"
                            className="fill-white"
                          />
                          <rect
                            x="10"
                            y="28"
                            width="30"
                            height="3"
                            rx="1.5"
                            className="fill-white"
                          />
                          <rect
                            x="10"
                            y="34"
                            width="25"
                            height="3"
                            rx="1.5"
                            className="fill-white"
                          />

                          <path
                            d="M38 26 L34 30 L38 34"
                            className="stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M46 26 L50 30 L46 34"
                            className="stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      Learning
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                      Node.js
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Runtime Environment
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gray-400 dark:bg-gray-500 group-hover:bg-primary h-2 text-cyan-400 rounded-full transition-colors duration-500"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-dashed border-gray-300 dark:border-slate-600 bg-card-light/50 dark:bg-card-dark/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card-light dark:hover:bg-card-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-gray-500 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-cyan-400 text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium  group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      In Progress
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                      Express.js
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      Server Framework
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gray-400 dark:bg-gray-500 group-hover:bg-primary h-1.5 rounded-full transition-colors duration-500"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>

                <div className="group relative flex flex-col gap-4 rounded-xl border border-dashed border-gray-300 dark:border-slate-600 bg-card-light/50 dark:bg-card-dark/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card-light dark:hover:bg-card-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-cyan-400 text-3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-1 text-cyan-400 text-xs font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      In Progress
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                      MongoDB
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                      NoSQL Database
                    </p>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gray-400 dark:bg-gray-500 group-hover:bg-primary h-1.5 rounded-full transition-colors duration-500"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button className="group flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-[#92c5c9] hover:text-primary dark:hover:text-primary transition-colors">
                <Link to='/projects'>See projects built with these technologies</Link>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
