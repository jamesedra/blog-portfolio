import { Mail } from "./mail";
// import Home from "./test";
import { RecentWorks } from "./recent-works";
import { Skills } from "./skills";
import TimelineComponent from "./timeline";

import dynamic from "next/dynamic";

const RecentPosts = dynamic(() => import("./recent-posts"));

export const Core = () => (
  <section className="text-white">
    <div
      className="
        lg:grid gap-8 lg:grid-cols-[minmax(0,1fr)_30rem] items-start"
    >
      {/* LEFT */}
      <div>
        <RecentWorks />
        <div className="border-t border-zinc-700/40 my-8" />
        {/* <RecentPosts /> */}
      </div>

      {/* RIGHT */}
      <aside className="flex flex-col gap-4">
        {" "}
        {/* gap for spacing */}
        <TimelineComponent />
        <Skills />
        {/* <Mail /> */}
      </aside>
    </div>
  </section>
);
