type Position = {
  role: string;
  /** Pass empty string or omit the second element for single‑date items */
  date: [string, string?];
};

type EntryProps = {
  entry: string;
  logoSrc: string;
  positions: Position[];
};

export const BioEntry: React.FC<EntryProps> = ({
  entry,
  logoSrc,
  positions,
}) => (
  <li className="flex gap-4">
    {/* logo */}
    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <div
        className="h-8 w-8 rounded-full bg-center bg-cover bg-stone-300"
        style={{ backgroundImage: `url(${logoSrc})` }}
      />
    </div>

    {/* body */}
    <dl className="flex flex-col flex-auto gap-y-2 pb-4">
      <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {entry}
      </dd>

      {positions.map(({ role, date }, idx) => {
        const [from = "", to = ""] = date;
        const showDash = from && to && from !== to;
        const singleLabel = from || to;
        return (
          <div
            key={idx}
            className={`flex flex-wrap items-baseline gap-x-2 ${
              idx !== 0
                ? "border-t border-zinc-200 dark:border-zinc-700 pt-3 mt-3"
                : ""
            }`}
          >
            {/* role */}
            <dd className="text-xs text-zinc-700 dark:text-zinc-300">{role}</dd>

            {/* date – large screens */}
            <dd
              className="ml-auto hidden w-32 flex-none text-right text-xs text-zinc-500 dark:text-zinc-400 lg:block"
              aria-label={showDash ? `${from} — ${to}` : singleLabel}
            >
              {from && <time dateTime={from}>{from}</time>}
              {showDash && <span aria-hidden> — </span>}
              {!showDash &&
                !from &&
                to && ( // only 'to' given
                  <time dateTime={to}>{to}</time>
                )}
              {showDash && to && <time dateTime={to}>{to}</time>}
            </dd>

            {/* stacked – small screens */}
            <dd
              className="lg:hidden w-full text-xs text-zinc-500 dark:text-zinc-400"
              aria-label={showDash ? `${from} — ${to}` : singleLabel}
            >
              {from && <time dateTime={from}>{from}</time>}
              {showDash && <span aria-hidden> — </span>}
              {!showDash && !from && to && <time dateTime={to}>{to}</time>}
              {showDash && to && <time dateTime={to}>{to}</time>}
            </dd>
          </div>
        );
      })}
    </dl>
  </li>
);
