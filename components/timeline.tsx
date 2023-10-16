import { BioEntry } from "./bio-entry";

export default function TimelineComponent() {
  return (
    <div className="items-center justify-center rounded-2xl border border-zinc-700/40 p-6 max-w-[90%] sm:max-w-md mt-10">
      <h2 className="flex font-semibold text-zinc-100 mb-4">
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
        <span className="ml-3">Bio</span>
      </h2>
      <ol>
        <BioEntry
          entry="University of British Columbia"
          role="Bachelor of Computer Science"
          date="Sep 2022 until Present"
          logoSrc="/images/ubc-logo.jpg"
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

        <BioEntry
          entry="De La Salle-College of Saint Benilde"
          role="Bachelor of Architecture"
          date="Aug 2015 until May 2020"
          logoSrc="/images/benilde-logo.png"
        />
      </ol>
    </div>
  );
}
