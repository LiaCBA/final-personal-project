import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div
      className="bg-white w-full"
      style={{ boxShadow: "inset 0px -1px 0px 0px #E0E0E0" }}>
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
