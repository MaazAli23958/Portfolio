import React from "react";
import photo from "../assets/image1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="px-4 md:px-10 py-16 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row gap-10 max-w-6xl w-full items-center">
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <div className="flex flex-col gap-4">
              <span className="text-cyan-400 font-bold font-mono">
                Hello, Everyone.
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">I'm Mohammad Maaz Ali</h1>
              <div className="text-lg md:text-xl">
                <span>Front-End Developer</span>
                <span className="text-cyan-400"> ➔ </span>
                <span className="font-bold">Mern Stack Explorer</span>
              </div>
              <p className=" text-sm md:text-lg text-gray-400 max-w-[600px]">
                Crafting responsive front-end interfaces today, architecting
                full-stack solutions for tomorrow. Passionate about clean code,
                user-centric design, and the journey from pixels to databases.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold">
                <span className="truncate">Hire Me</span>
              </button>
              <button className="w-full sm:w-auto border border-gray-400 px-6 py-3 rounded-lg">
                <span className="truncate">
                  <Link to='/projects'>View Projects</Link>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full max-w-sm md:max-w-md">
            <img
              className="w-full rounded-2xl shadow-lg"
              src={photo}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className=" w-full bg-gray-50/50 dark:bg-[#15282a] border-y border-gray-200 dark:border-[#234548] md:px-25">
        <div className=" flex flex-col px-10 gap-4 justify-center pt-16">
          <h2 className="text-[#102022] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
            My Tech Stack
          </h2>
          <p className="text-[#4a5568] dark:text-slate-400 text-base md:text-lg font-normal leading-normal max-w-[720px]">
            My current toolkit for building seamless digital experiences
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 pt-10 pb-20">
          {/* <!-- React --> */}
          <div class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-white dark:bg-[#193133] p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default">
            <div class="size-12 rounded-lg bg-blue-50 dark:bg-[#234548] flex items-center justify-center text-blue-500 dark:text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined !text-[32px]">
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
            <div class="flex flex-col gap-1">
              <h3 class="text-[#102022] dark:text-white text-lg font-bold leading-tight">
                React
              </h3>
              <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm font-normal">
                Component Architecture
              </p>
            </div>
          </div>
          {/* <!-- Node --> */}
          <div class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-white dark:bg-[#193133] p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default">
            <div class="size-12 rounded-lg bg-green-50 dark:bg-[#234548] flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined !text-[32px]">
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
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-[#102022] dark:text-white text-lg font-bold leading-tight">
                Node.js
              </h3>
              <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm font-normal">
                Server-side Logic
              </p>
            </div>
          </div>
          {/* <!-- Mongo --> */}
          <div class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-white dark:bg-[#193133] p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default">
            <div class="size-12 rounded-lg bg-emerald-50 dark:bg-[#234548] flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined !text-[32px]">
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
            <div class="flex flex-col gap-1">
              <h3 class="text-[#102022] dark:text-white text-lg font-bold leading-tight">
                MongoDB
              </h3>
              <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm font-normal">
                NoSQL Database
              </p>
            </div>
          </div>
          <div class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#326267] bg-white dark:bg-[#193133] p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default">
            <div class="size-12 rounded-lg bg-cyan-50 dark:bg-[#234548] flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined !text-[32px]">
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
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-[#102022] dark:text-white text-lg font-bold leading-tight">
                Tailwind CSS
              </h3>
              <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm font-normal">
                Utility-First Styling
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-auto border-t border-gray-200 dark:border-[#234548] bg-background-light dark:bg-background-dark">
          <div class="px-4 md:px-10 flex justify-center py-10">
            <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <footer class="flex flex-col gap-8 text-center md:text-left">
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div class="flex flex-col gap-2 items-center md:items-start">
                    <h2 class="text-[#102022] dark:text-white text-xl font-bold tracking-tight">
                      Mohammad Maaz Ali
                    </h2>
                    <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm">
                      Building the future, one component at a time.
                    </p>
                  </div>
                  <div class="flex gap-4">
                    <Link
                      className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#234548] text-[#102022] dark:text-white hover:bg-primary hover:text-[#102022] dark:hover:bg-primary dark:hover:text-[#102022] transition-all"
                      to="/"
                    >
                      <span class="material-symbols-outlined">
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
                    </Link>

                    <Link
                      className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#234548] text-[#102022] dark:text-white hover:bg-primary hover:text-[#102022] dark:hover:bg-primary dark:hover:text-[#102022] transition-all"
                      to="/contact"
                    >
                      <span class="material-symbols-outlined">
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
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#234548] text-[#102022] dark:text-white hover:bg-primary hover:text-[#102022] dark:hover:bg-primary dark:hover:text-[#102022] transition-all"
                      to="/contact"
                    >
                      <span class="material-symbols-outlined">
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
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="h-px w-full bg-gray-200 dark:bg-[#234548]"></div>
                <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                  <p class="text-[#4a5568] dark:text-[#92c5c9] text-sm font-normal leading-normal">
                    © 2026 Mohammad Maaz Ali. All rights reserved.
                  </p>
                  <div class="flex gap-6">
                    <Link
                      className="text-[#4a5568] dark:text-[#92c5c9] hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      className="text-[#4a5568] dark:text-[#92c5c9] hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                      to="/project"
                    >
                      Terms of Services
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
