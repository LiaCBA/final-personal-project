import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div
      className="bg-white w-full"
      style={{ boxShadow: "inset 0px -1px 0px 0px #E0E0E0" }}>
      <header className="relative flex items-center mx-auto pt-[18px] pr-[20px] pb-[18px] pl-[20px] max-w-[375px]">
        <div className="z-10">
          <BurgerMenu />
        </div>
        <h1 className="left-1/2 absolute font-extrabold text-black -translate-x-1/2 transform">
          GlobalTalk
        </h1>
      </header>
    </div>
  );
};

export default Header;
