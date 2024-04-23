import { BioEntry } from "./bio-entry";

export default function TimelineComponent() {
  return (
    <>
      <div className="items-center justify-center rounded-2xl border border-zinc-700/40 pt-6 pr-6 pl-6 max-w-[90%] sm:max-w-md mt-10">
        <h2 className="flex font-semibold text-zinc-100 mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 flex-none"
          >
            <path
              fillRule="evenodd"
              d="M11.75 1a.75.75 0 01.75.75V4h6.532c.42 0 .826.15 1.143.425l3.187 2.75a1.75 1.75 0 010 2.65l-3.187 2.75a1.75 1.75 0 01-1.143.425H12.5v9.25a.75.75 0 01-1.5 0V13H3.75A1.75 1.75 0 012 11.25v-5.5C2 4.783 2.784 4 3.75 4H11V1.75a.75.75 0 01.75-.75zm0 4.5h7.282a.25.25 0 01.163.06l3.188 2.75a.25.25 0 010 .38l-3.188 2.75a.25.25 0 01-.163.06H3.75a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25h8z"
              className="fill-zinc-100/10 stroke-zinc-500"
            ></path>
          </svg>
          <span className="ml-3">Timeline</span>
        </h2>
        <ol>
          <BioEntry
            entry="UBC Emerging Media Lab"
            role="Student Software Developer"
            date="May 2024 until Present"
            logoSrc="/images/EML.jpg"
          />

          <BioEntry
            entry="D&J Builders and Power Systems Corporation"
            role="Architectural Technologist"
            date="May 2020 until Aug 2022"
            logoSrc="/images/djbuilders-logo.png"
          />

          <BioEntry
            entry="JVV Konsult"
            role="Intern Architect"
            date="Sep 2019 until Dec 2019"
            logoSrc="/images/jvv-logo.jpg"
          />
        </ol>
      </div>
      {/* Education*/}
      <div className="items-center justify-center rounded-2xl border border-zinc-700/40 pt-6 pr-6 pl-6 max-w-[90%] sm:max-w-md mt-4">
        <h2 className="flex font-semibold text-zinc-100 mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-zinc-100/10 stroke-zinc-500"
            />
          </svg>
          <span className="ml-3">Education</span>
        </h2>
        <ol>
          <BioEntry
            entry="University of British Columbia"
            role="Bachelor of Computer Science"
            date="Sep 2022 until Present"
            logoSrc="/images/ubc-logo.jpg"
          />

          <BioEntry
            entry="De La Salle-College of Saint Benilde"
            role="Bachelor of Science in Architecture"
            date="Aug 2015 until May 2020"
            logoSrc="/images/benilde-logo.png"
          />
        </ol>
      </div>
    </>
  );
}
