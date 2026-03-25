import React from "react";

const Contact = () => {
  return (
    <div>
      <main className="flex-grow flex flex-col">
        <div className="flex-1 flex justify-center py-10 px-4 sm:px-10">
          <div className="w-full max-w-[1024px] flex flex-col gap-10">
            {/* Page Heading  */}
            <div className="flex flex-col gap-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-[#92c5c9]">
                Let's Connect
              </h1>
              <p className="text-cyan-200 text-lg font-normal leading-relaxed max-w-[720px]">
                I'm currently open to new opportunities in Front-End
                development. Whether you have a project in mind, a question, or
                just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            {/* Split Layout: Contact Info & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
              {/* Left Column: Contact Information */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyan-400 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="flex flex-col gap-5">
                    {/* Email */}
                    <a
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-[#234548] transition-colors"
                      href="mailto:smmaazali6@gmail.com"
                    >
                      <div className="text-primary mt-1">
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
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          Email
                        </span>
                        <span className="text-sm text-cyan-200">
                          smmaazali6@gmail.com
                        </span>
                      </div>
                    </a>
                    {/* GitHub */}
                    <a
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-[#234548] transition-colors"
                      href="https://github.com/MaazAli23958" target='_blank' rel='noopener noreferrer'
                    >
                      <div className="text-primary mt-1">
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
                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          GitHub
                        </span>
                        <span className="text-sm text-cyan-200">
                          Checkout my Repos
                        </span>
                      </div>
                    </a>
                    {/* Linkedin */}
                    <a
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-[#234548] transition-colors"
                      href="https://www.linkedin.com/in/mohammad-maaz-ali-b91640380" target="_blank" rel="noopener noreferrer"
                    >
                      <div className="text-primary mt-1">
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
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          Linkedin
                        </span>
                        <span className="text-sm text-cyan-200">
                          Connect Professionally
                        </span>
                      </div>
                    </a>
                    {/* Location */}
                    <div className="flex items-start gap-4 p-3 rounded-lg">
                      <div className="text-primary mt-1">
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
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-slate-900 dark:text-white">
                          Location
                        </span>
                        <span className="text-sm text-cyan-200">
                          Based in Aligarh
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Map Visual Placeholder */}
                  <div className="mt-8 w-full h-32 rounded-lg overflow-hidden relative border border-cyan-400 opacity-80 hover:opacity-100 transition-opacity">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuATUo3UCT6eTOkTEgNDaWtDaqj6_qkxUTLuu8x1SONmcpfWnVFBdHe0EOASkSlboWZxEGd3iFYUiHm5g2UEsbfKno48IPB84YIiGFy9byYRLyxhiDrC3I8JVIa9VBrk_yUsPa7KN7LrVfoldlW4G7jgZfe60-eom8d48QwFxTPvA5bgzezoIIhZq35fpYHT5w5zfpA1J6S8cuxWWS5DMiBtoTobnmk15U9HsUPSwNceNPLHumYvQDlN4pvFtZ2gp_SkFqKjmVQ1jkM"
                      alt="Abstract map view of San Francisco with dark overlay"
                      className="w-full h-full object-cover"
                      data-alt="Abstract map view of San Francisco with dark overlay"
                      data-location="San Francisco"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <form className="flex flex-col gap-5 p-6 md:p-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyan-400 shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-2">Send a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="flex flex-col flex-1">
                      <p className="text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">
                        Your Name
                      </p>
                      <input
                        className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-[#112122] border border-cyan-200 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#5e7e82] text-slate-900 dark:text-white"
                        placeholder="Enter Your Name"
                        type="text"
                      />
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">
                        Your Email
                      </p>
                      <input
                        className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-[#112122] border border-cyan-200 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#5e7e82] text-slate-900 dark:text-white"
                        placeholder="Enter Your Email"
                        type="email"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col w-full">
                    <p className="text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">
                      Subject
                    </p>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-[#112122] border border-cyan-200 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#5e7e82] text-slate-900 dark:text-white"
                        placeholder="Project Enquiry"
                        type="text"
                      />
                    </div>
                  </label>
                  <label className="flex flex-col w-full flex-grow">
                    <p className="text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">
                      Message
                    </p>
                    <textarea
                      className="w-full flex-grow min-h-[160px] rounded-lg p-4 bg-background-light dark:bg-[#112122] border border-cyan-200 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#5e7e82] text-slate-900 dark:text-white resize-none"
                      placeholder="Tell me About your Project..."
                    ></textarea>
                  </label>
                  <div className="pt-2">
                    <button
                      className="w-full md:w-auto min-w-[160px] cursor-pointer flex items-center bg-cyan-400 justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-[#0bc2d3] text-[#112122] font-bold transition-all transform active:scale-95"
                      type="submit"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-[20px]">
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
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="w-full border-t border-border-light dark:border-[#234548] py-8 mt-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-[#92c5c9]">
            <span className="text-sm">
              © 2026 Mohammad Maaz Ali. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="text-slate-500 dark:text-[#92c5c9] hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              <div className="flex gap-4">
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.92c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.03.77 2.08v3.08c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </span>
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.94v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.264 2.37 4.264 5.455v6.284zM5.337 7.433a2.06 2.06 0 1 1 0-4.121 2.06 2.06 0 0 1 0 4.121zM3.56 20.45h3.554V9H3.56v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.544C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.272V1.728C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
