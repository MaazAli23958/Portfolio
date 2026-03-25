import React from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Projects = () => {
  return (
    <div>
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-16">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
              <div className="flex flex-col gap-2 px-4 pb-8">
                <h2 className="text-[#111418] dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em]">
                  Featured Projects
                </h2>
                <p className="text-[#637588] dark:text-[#92c5c9] text-lg max-w-2xl">
                  Showcasing my journey from Front-End mastery to Full-Stack
                  MERN architecture.
                </p>
              </div>

              <div className="pb-10 px-4">
                <div className="flex overflow-x-auto border-b border-[#e5e7eb] dark:border-[#326267] gap-8 scrollbar-hide">
                  <button className="group flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4 outline-none">
                    <p className="text-[#111418] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap">
                      All Projects
                    </p>
                  </button>
                  <button className="group flex flex-col items-center justify-center border-b-[3px] border-b-transparent hover:border-b-primary/30 transition-colors pb-[13px] pt-4 outline-none">
                    <p className="text-[#637588] dark:text-[#92c5c9] group-hover:text-primary transition-colors text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap">
                      Mern Stack
                    </p>
                  </button>
                  <button className="group flex flex-col items-center justify-center border-b-[3px] border-b-transparent hover:border-b-primary/30 transition-colors pb-[13px] pt-4 outline-none">
                    <p className="text-[#637588] dark:text-[#92c5c9] group-hover:text-primary transition-colors text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap">
                      Front-End Only
                    </p>
                  </button>
                  <button className="group flex flex-col items-center justify-center border-b-[3px] border-b-transparent hover:border-b-primary/30 transition-colors pb-[13px] pt-4 outline-none">
                    <p className="text-[#637588] dark:text-[#92c5c9] group-hover:text-primary transition-colors text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap">
                      Open Source
                    </p>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                {/* Netflix Clone */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-gray-800 dark:bg-card-dark shadow-sm border border-[#e5e7eb] dark:border-[#326267]/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-64 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${img2})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                        Netflix Clone
                      </h3>
                      <span className="material-symbols-outlined text-cyan-400 text-primary/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                          width="50"
                          height="50"
                        >
                          <rect width="100" height="100" fill="none" />

                          <rect
                            x="20"
                            y="10"
                            width="15"
                            height="80"
                            fill="#22D3EE"
                          />

                          <polygon
                            points="35,10 65,90 50,90 20,10"
                            fill="#22D3EE"
                          />

                          <rect
                            x="65"
                            y="10"
                            width="15"
                            height="80"
                            fill="#22D3EE"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[#637588] dark:text-[#92c5c9] text-sm font-medium leading-normal mb-5 line-clamp-2">
                      Developed a Netflix-inspired UI using pure HTML and CSS
                      without any frameworks. Emphasizes responsive design,
                      modern layouts, and clean visual structure.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          CSS
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          HTML
                        </span>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-3 pt-4 border-t border-[#e5e7eb] dark:border-[#326267]/30">
                      <a
                        className="flex flex-1 items-center justify-center bg-cyan-400 gap-2 rounded-lg h-10 px-4 bg-primary text-[#112122] hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center bg-[#234548] gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Gallery Project */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-gray-800 dark:bg-card-dark shadow-sm border border-[#e5e7eb] dark:border-[#326267]/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-64 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${img6})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                        Gallery Project
                      </h3>
                      <span className="material-symbols-outlined text-cyan-400 text-primary/80">
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
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[#637588] dark:text-[#92c5c9] text-sm font-medium leading-normal mb-5 line-clamp-2">
                      A modern and responsive gallery project built using HTML,
                      Tailwind CSS, and React, designed to showcase images in a
                      clean and visually appealing layout.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          React
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          HTML
                        </span>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-3 pt-4 border-t border-[#e5e7eb] dark:border-[#326267]/30">
                      <a
                        className="flex flex-1 items-center justify-center bg-cyan-400 gap-2 rounded-lg h-10 px-4 bg-primary text-[#112122] hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center bg-[#234548] gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* UI- Project */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-gray-800 dark:bg-card-dark shadow-sm border border-[#e5e7eb] dark:border-[#326267]/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-64 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${img4})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                        UI-Project
                      </h3>
                      <span className="material-symbols-outlined text-cyan-400 text-primary/80">
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
                            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[#637588] dark:text-[#92c5c9] text-sm font-medium leading-normal mb-5 line-clamp-2">
                      Developed a sleek and responsive user interface using
                      HTML, Tailwind CSS, and React. Emphasizes performance,
                      scalability, and intuitive design principles.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          React
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          HTML
                        </span>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-3 pt-4 border-t border-[#e5e7eb] dark:border-[#326267]/30">
                      <a
                        className="flex flex-1 items-center justify-center bg-cyan-400 gap-2 rounded-lg h-10 px-4 bg-primary text-[#112122] hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center bg-[#234548] gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Project */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-gray-800 dark:bg-card-dark shadow-sm border border-[#e5e7eb] dark:border-[#326267]/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-64 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${img3})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                        Card Project
                      </h3>
                      <span className="material-symbols-outlined text-cyan-400 text-primary/80">
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
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[#637588] dark:text-[#92c5c9] text-sm font-medium leading-normal mb-5 line-clamp-2">
                      Built a modern and responsive card component using HTML,
                      Tailwind CSS, and React, focusing on clean UI and reusable
                      design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          React
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          HTML
                        </span>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-3 pt-4 border-t border-[#e5e7eb] dark:border-[#326267]/30">
                      <a
                        className="flex flex-1 items-center justify-center bg-cyan-400 gap-2 rounded-lg h-10 px-4 bg-primary text-[#112122] hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center bg-[#234548] gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer" 
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Notes App */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-gray-800 dark:bg-card-dark shadow-sm border border-[#e5e7eb] dark:border-[#326267]/50 hover:shadow-[0_0_20px_rgba(19,218,236,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-64 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${img5})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                        Notes App
                      </h3>
                      <span className="material-symbols-outlined text-cyan-400 text-primary/80">
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
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[#637588] dark:text-[#92c5c9] text-sm font-medium leading-normal mb-5 line-clamp-2">
                      A modern Notes App built using React, HTML, and Tailwind
                      CSS, offering a clean and responsive user interface. It
                      integrates APIs to enable dynamic data handling, allowing
                      users to create, update, and manage notes efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          React
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#234548] px-3 py-1.5">
                        <span className="text-[#111418] dark:text-white text-xs font-bold leading-normal">
                          HTML
                        </span>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-3 pt-4 border-t border-[#e5e7eb] dark:border-[#326267]/30">
                      <a
                        className="flex flex-1 items-center justify-center bg-cyan-400 gap-2 rounded-lg h-10 px-4 bg-primary text-[#112122] hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center bg-[#234548] gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]"
                        href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12 mb-8">
                <a
                  className="flex items-center gap-2 text-[#111418] dark:text-white hover:text-primary dark:hover:text-primary transition-colors text-sm font-bold"
                  href="#"
                >
                  <span>View All Projects in Archive</span>
                  <span>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
