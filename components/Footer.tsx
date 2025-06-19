import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F6F5F4] m-auto mx-auto pt-[40px] lg:pt-[40px] pr-[20px] lg:pr-[370px] pb-[40px] lg:pb-[40px] pl-[20px] lg:pl-[370px] w-full max-w-[375px] lg:max-w-[1920px]">
      <div className="flex lg:flex flex-row lg:justify-between gap-[80px]">
        <div className="flex lg:flex-row flex-col gap-[16px] lg:gap-[30px]">
          <Link
            href="/"
            className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Home
          </Link>
          <Link
            href="/pages/classbook"
            className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Textbook
          </Link>
          <Link
            href="/pages/statistics"
            className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Statistics
          </Link>
          <Link
            href="/pages/sprint-game"
            className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Sprint
          </Link>
          <Link
            href="/pages/audiocall-game"
            className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300">
            Audio-Call
          </Link>
        </div>

        <div className="flex lg:flex-row flex-col gap-[16px] lg:gap-[30px]">
          <span className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300 cursor-pointer">
            Alex
          </span>
          <span className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300 cursor-pointer">
            Gabriel
          </span>
          <span className="font-[600] text-[#757575] hover:text-[#A3A3A3] transition-colors duration-300 cursor-pointer">
            Marcus
          </span>
        </div>
      </div>
      <div className="mt-[20px] border-[#E0E0E0] border-b" />
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-[20px]">
        <div className="flex justify-center gap-[30px] mt-[20px]">
          <a href="#">
            <img
              src="/socialcatlogo.svg"
              alt="social cat"
              width={30}
              height={24}
            />
          </a>
          <a href="#">
            <img src="/gtlogo.svg" alt="gt" width={30} height={24} />
          </a>
          <a href="#">
            <img src="/youtube.svg" alt="youtube" width={30} height={24} />
          </a>
        </div>
        <p className="font-[600] text-[#757575] text-[10px] lg:text-[12px]">
          ©2021 GlobalTalk. Project for GlobalTalk.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
