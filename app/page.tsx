import { Intro } from "../components/intro";
import { Core } from "../components/core-section";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-12 py-4 mt-16 md:mt-24">
      <Intro />
      <div className="border-t border-zinc-700/40 mt-8 md:mt-16 mb-5"></div>
      <Core />
    </div>
  );
}
