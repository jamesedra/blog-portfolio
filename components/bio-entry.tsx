type Position = { role: string; date: [string, string?] };
type EntryProps = { entry: string; logoSrc: string; positions: Position[] };

export const BioEntry: React.FC<EntryProps> = ({
  entry,
  logoSrc,
  positions,
}) => (
  <li className="flex gap-4 pt-1">
    {/* logo */}
    <div className="mt-[2px] flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
      <div
        className="h-8 w-8 rounded-full bg-cover bg-center bg-stone-300"
        style={{ backgroundImage: `url(${logoSrc})` }}
      />
    </div>

    {/* body */}
    <dl className="flex flex-col flex-auto gap-y-2">
      <dd className="text-sm -mb-3 font-semibold text-zinc-900 dark:text-zinc-100">
        {entry}
      </dd>

      {positions.map(({ role, date }, i) => {
        const [from = "", to = ""] = date;
        const showDash = from && to && from !== to;
        const label = showDash ? `${from} — ${to}` : from || to;

        return (
          <div
            key={i}
            /*  ▸ block on mobile  ▸ 2‑col grid from md upward */
            className={`
              py-3
              ${i ? "border-t border-zinc-700/40" : ""}
              md:grid md:grid-cols-[1fr_auto] md:gap-x-4
            `}
          >
            <dd className="text-[0.73rem] text-zinc-700 dark:text-zinc-300">
              {role}
            </dd>

            <dd
              className="
                mt-1 md:mt-0
                text-[0.73rem] whitespace-nowrap md:text-right
                text-zinc-500 dark:text-zinc-400"
              aria-label={label}
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
