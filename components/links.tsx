import Link from "next/link";

interface LinksProps {
  href: string; // Specify the type as a string
  title: string; // Specify the type as a string
}

export const Links = ({ href, title }: LinksProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-neutral-50 sm-text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
