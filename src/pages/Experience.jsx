import React from "react";

const Experience = () => {
  return (
    <div>
      <main className="flex-grow flex flex-col items-center w-full pb-20">
        {/* Page Heading */}
        <section className="w-full max-w-[960px] px-6 pt-12 pb-8">
          <div className="flex flex-col gap-4">
            <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full w-fit border border-cyan-400">
              <span className="text-xs text-cyan-400 font-bold text-primary tracking-wide uppercase">
                Career RoadMap
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              From Pixels to <span className="text-cyan-400">Databases</span>
            </h2>
            <p className="text-slate-600 dark:text-[#92c5c9] text-lg md:text-xl max-w-2xl leading-relaxed">
              My evolution from crafting pixel-perfect interfaces to
              architecting robust full-stack applications. A timeline of
              technical growth, learning milestones, and stack expansion.
            </p>
          </div>
        </section>

        {/* current Focus Card */}
        <section className="w-full max-w-[960px] px-6 mb-16">
          <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-[#234548] shadow-lg glow-effect group">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 relative z-10">
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <span className="material-symbols-outlined text-cyan-400">
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
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-cyan-400 font-bold uppercase tracking-wider">
                    Current Focus
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Mern Stack Mastery
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently deep diving into backend architecture. I'm expanding
                  my Front-End expertise to build scalable APIs with Node.js,
                  designing schemas with MongoDB, and integrating secure
                  authentication flows.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                    Node.Js
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                    Express
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                    JWT
                  </span>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center justify-center bg-cyan-400 gap-2 px-5 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary/90 transition-colors w-full md:w-auto">
                    <span className="text-gray-900">
                      <a href="https://github.com/MaazAli23958" target="_blank" rel="noopener noreferrer">
                      View Progress on GitHub
                      </a>
                    </span>
                    <span className="material-symbols-outlined text-gray-900 text-lg">
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
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {/* Image Area */}
              <div className="w-full md:w-2/5 aspect-video md:aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden relative shadow-inner bg-slate-800">
                <div className="bsolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <div className="w-full h-full p-6 flex flex-col gap-2 opacity-60 font-mono text-xs text-primary/60">
                    <div className="flex gap-2">
                      <span className="text-primary">const</span>
                      <span className="text-white">stack</span>
                      <span className="text-yellow-300">[</span>
                    </div>
                    <div className="pl-4 text-green-300">'React',</div>
                    <div className="pl-4 text-green-300">'Node.js',</div>
                    <div className="pl-4 text-green-300">'MongoDB'</div>
                    <div className="text-yellow-300">];</div>
                    <div className="mt-4 flex gap-2">
                      <span className="text-purple-400">async function</span>
                      <span className="text-blue-300">buildFuture</span>
                      ()
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"
                  data-alt="Abstract geometric pattern representing code structure"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Heading */}
        <section className="w-full max-w-[960px] px-6 mb-8">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Experience Timeline
            </h3>
            <div className="h-px flex-grow bg-slate-200 dark:bg-[#234548]"></div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full max-w-[960px] px-6">
          <div className="relative">
            <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-[#234548] md:-translate-x-1/2"></div>
            <div className="flex flex-col gap-12">
              {/* Item-1 Present */}
              <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-2 gap-8 items-center">
                {/* icon/Marker */}
                <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface-light dark:bg-background-dark border-1 border-cyan-400 dark:border-background-dark z-10 shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center border border-cyan-400 text-primary">
                    <span className="material-symbols-outlined text-cyan-400 text-[20px]">
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
                </div>
                {/* Content Left (Empty for desktop alternating layout) */}
                <div className="hidden md:block"></div>
                {/* Content Right */}
                <div className="col-start-2 md:col-start-2 w-full">
                  <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-[#234548] hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <div className="absolute top-6 -left-2 w-4 h-4 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:block hidden group-hover:border-l-primary/50 group-hover:border-b-primary/50 transition-colors"></div>
                    {/* Mobile Arrow */}
                    <div className="absolute top-8 -left-2 w-3 h-3 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:hidden"></div>
                    <span className="text-xs font-bold text-cyan-400 text-primary uppercase tracking-wider mb-1 block">
                      Jan 2026 - Present
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      MERN Stack Developer
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      Transitioning to full-stack development. Skilled in
                      building scalable, responsive web applications using
                      MongoDB, Express.js, React, and Node.js. Passionate about
                      writing clean code, optimizing performance, and
                      continuously learning modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        MongoDB
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Express.js
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Rest API
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2- FrontEnd */}
              <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-2 gap-8 items-center">
                <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface-light dark:bg-background-dark border-1 border-cyan-400 dark:border-background-dark z-10 shadow-sm">
                  <div className="w-full h-full rounded-full dark:bg-surface-dark flex items-center justify-center border border-cyan-400 dark:border-slate-600 text-slate-500 dark:text-slate-300">
                    <span className="material-symbols-outlined text-cyan-400 text-[20px]">
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
                  </div>
                </div>
                {/* content left */}
                <div className="col-start-2 md:col-start-1 md:row-start-1 w-full md:text-right">
                  <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-[#234548] hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <div className="absolute top-6 -right-2 w-4 h-4 bg-surface-light dark:bg-surface-dark border-t border-r border-slate-200 dark:border-[#234548] transform rotate-45 md:block hidden group-hover:border-t-primary/50 group-hover:border-r-primary/50 transition-colors"></div>
                    {/* Mobile Arrow */}
                    <div className="absolute top-8 -left-2 w-3 h-3 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:hidden"></div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">
                      Jul 2025 - Present
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Front-End Developer
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      Front-End Developer passionate about building responsive
                      and modern web applications using React and Tailwind CSS.
                      Currently exploring advanced React concepts while
                      continuously creating real-world projects to sharpen my
                      skills.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        React
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Redux
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 3: Junior */}
              <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-2 gap-8 items-center">
                <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface-light dark:bg-background-dark border-1 border-cyan-400 dark:border-background-dark z-10 shadow-sm">
                  <div className="w-full h-full rounded-full flex items-center justify-center border border-cyan-400 text-slate-500 dark:text-slate-300">
                    <span className="">
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
                          fontSize="32"
                          fontWeight="bold"
                          fontFamily="Arial, sans-serif"
                          dy=".3em"
                        >
                          HTML
                        </text>
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Spacer for desktop layout */}
                <div className="hidden md:block"></div>
                {/* Content Right */}
                <div className="col-start-2 md:col-start-2 w-full">
                  <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-[#234548] hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <div className="absolute top-6 -left-2 w-4 h-4 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:block hidden group-hover:border-l-primary/50 group-hover:border-b-primary/50 transition-colors"></div>
                    {/* Mobile Arrow */}
                    <div className="absolute top-8 -left-2 w-3 h-3 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:hidden"></div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">
                      Mar 2025 - Jul 2025
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Junior Web Developer
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      Started professional journey with foundational web
                      technologies. Built static websites, landing pages, and
                      learned JS ES6 basics.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        HTML
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        CSS3
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        JavaScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 4: Education */}
              <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-2 gap-8 items-center">
                <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface-light dark:bg-background-dark border-1 border-cyan-400 dark:border-background-dark z-10 shadow-sm">
                  <div className="w-full h-full rounded-full flex items-center justify-center border border-cyan-400 text-slate-500 dark:text-slate-300">
                    <span className="material-symbols-outlined text-cyan-400 text-[20px]">
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
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Content Left */}
                <div className="col-start-2 md:col-start-1 md:row-start-1 w-full md:text-right">
                  <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-[#234548] hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <div className="absolute top-6 -right-2 w-4 h-4 bg-surface-light dark:bg-surface-dark border-t border-r border-slate-200 dark:border-[#234548] transform rotate-45 md:block hidden group-hover:border-t-primary/50 group-hover:border-r-primary/50 transition-colors"></div>
                    {/* Mobile Arrow */}
                    <div className="absolute top-8 -left-2 w-3 h-3 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-[#234548] transform rotate-45 md:hidden"></div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">
                      2021 - 2024
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      BSc. Mathematics
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      I have completed my graduation in B.Sc. Mathematics, where
                      I built a strong foundation in problem-solving and
                      analytical thinking. During my studies, I also started
                      learning coding and developed a keen interest in
                      programming and web development.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Basics
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        Programming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 dark:border-[#234548] py-8 bg-surface-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2026 Mohammad Maaz Ali. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outline">
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
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </span>
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">
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
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
