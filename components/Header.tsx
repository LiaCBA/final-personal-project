import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="bg-white w-full"
      style={{ boxShadow: "inset 0px -1px 0px 0px #E0E0E0" }}>

      <header className="relative flex items-center mx-auto pt-[18px] lg:pt-[24px] pr-[20px] lg:pr-[370px] pb-[18px] lg:pb-[24px] pl-[20px] lg:pl-[370px] max-w-[375px] lg:max-w-[1920px]">
        <div className="lg:hidden">
          <BurgerMenu />
        </div>

        <div className="left-1/2 lg:left-0 lg:static absolute flex items-center lg:items-center -translate-x-1/2 lg:translate-x-0">
          <h1 className="font-extrabold text-black whitespace-nowrap pointer-events-none select-none">
            GlobalTalk
          </h1>
          <div className="hidden lg:block mx-[30px] border-[#E0E0E0] border-l h-[16px]" />
        </div>

        <nav className="hidden lg:flex items-center gap-[30px]">
          <Link
            href="/"
            className="font-semibold text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Home
          </Link>
          <Link
            href="/pages/classbook"
            className="font-semibold text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Textbook
          </Link>
          <Link
            href="/pages/statistics"
            className="font-semibold text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Statistics
          </Link>
          <select
            name="games"
            className="font-semibold text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300 cursor-pointer"
            defaultValue="games">
            <option value="games" disabled>
              Games
            </option>
            <option value="Sprint">Sprint Game</option>
            <option value="AudioCall">AudioCall Game</option>
          </select>
        </nav>

      <header className="flex justify-between items-center m-auto mx-auto pt-[18px] pr-[20px] pb-[18px] pl-[20px] max-w-[375px]">
        <BurgerMenu />
        <h1 className="flex-grow font-extrabold text-black text-center">
          GlobalTalk
        </h1>

      </header>
    </div>
  );
};

export default Header;
