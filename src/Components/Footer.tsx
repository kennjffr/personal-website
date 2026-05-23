import { Instagram, Linkedin, Mail } from "react-feather";

const Footer = () => {
  return (
    <footer className="mt-auto py-20 border-t border-gruvbox-bg1 bg-gruvbox-bgH light:bg-gruvbox-bg0 transition-colors duration-300">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between content-evenly mx-auto px-8 max-w-6xl">
        <div className="flex flex-col text-sm gap-4 text-gruvbox-fg text-light:text-gruvbox-fg4 text-center md:text-left">
          <h2 className="text-gruvbox-red font-semibold uppercase tracking-wider text-xs">Contact me!</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-2 items-center text-gruvbox-fg4 light:text-gruvbox-fg3 hover:text-gruvbox-fg0 light:hover:text-gruvbox-fg1 cursor-default transition-colors duration-200">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>kennethjriady@gmail.com</span>
            </li>
            <li className="flex flex-row gap-2 items-center text-gruvbox-fg4 light:text-gruvbox-fg3 hover:text-gruvbox-fg0 light:hover:text-gruvbox-fg1 cursor-default transition-colors duration-200">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>@kennjffr</span>
            </li>
            <li className="flex flex-row gap-2 items-center text-gruvbox-fg4 light:text-gruvbox-fg3 hover:text-gruvbox-fg0 light:hover:text-gruvbox-fg1 cursor-default transition-colors duration-200">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>Kenneth Jefferson Riady</span>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gruvbox-fg md:text-gruvbox-fg4 light:text-gruvbox-bg4 light:md:text-gruvbox-fg4 self-center text-center md:text-left">
          Copyright &copy; Kenneth Riady {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
