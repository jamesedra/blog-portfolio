// Define a type/interface for the structure of 'links' array
interface Link {
  path: string;
  title: string;
}

interface MenuProps {
  links: Link[]; // Specify the type as an array of 'Link'
  onClick: () => void;
}

export const Menu = ({ links, onClick }: MenuProps) => {
  return (
    <ul className="flex flex-col py-4 pb-1 mb-5 items-center space-y-3 rounded-b-lg">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            onClick={onClick}
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
