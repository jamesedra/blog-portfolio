type EntryProps = {
  entry: string;
  role: string;
  date: string;
  logoSrc: string;
};

export const BioEntry: React.FC<EntryProps> = ({
  entry,
  role,
  date,
  logoSrc,
}) => {
  return (
    <li className="flex gap-5">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <div
          className="h-7 w-7 rounded-full bg-center bg-cover bg-stone-300"
          style={{ backgroundImage: `url(${logoSrc})` }}
        />
      </div>

      <dl className="flex flex-auto flex-wrap gap-x-2 pb-6">
        <dt className="sr-only">entry</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 pb-2">
          {entry}
        </dd>

        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400 pb-2">
          {role}
        </dd>

        <dt className="sr-only">Date</dt>
        <dd
          className="hidden lg:block ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={date}
        >
          <time dateTime={date.split(" until ")[0]}>
            {date.split(" until ")[0]}
          </time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={date.split(" until ")[1]}>
            {date.split(" until ")[1]}
          </time>
        </dd>

        <div className="lg:hidden text-xs text-zinc-400 dark:text-zinc-500">
          <dd aria-label={date}>
            <time dateTime={date.split(" until ")[0]}>
              {date.split(" until ")[0]}
            </time>{" "}
            <span aria-hidden="true">—</span>{" "}
            <time dateTime={date.split(" until ")[1]}>
              {date.split(" until ")[1]}
            </time>
          </dd>
        </div>
      </dl>
    </li>
  );
};
