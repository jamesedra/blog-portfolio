import { Mail } from "./mail";
// import Home from "./test";
import { RecentWorks } from "./recent-works";
import { Skills } from "./skills";
import TimelineComponent from "./timeline";

import dynamic from "next/dynamic";

const RecentPosts = dynamic(() => import("./recent-posts"));

export const Core = () => {
  return (
    <section className="text-white">
      <div
        className="lg:grid items-center justify-center lg:justify-start lg:grid-cols-3 gap-8"
        style={{ alignItems: "start" }}
      >
        <div className="col-span-1 lg:col-span-2 items-center justify-center lg:items-start pb-8 md:pb-8">
          <RecentWorks />
          <div className="border-t border-zinc-700/40 mt-8 mb-8"></div>
          <RecentPosts />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center">
            <TimelineComponent />
            <Skills />
            <Mail />
          </div>
        </div>
      </div>
    </section>
  );
};
