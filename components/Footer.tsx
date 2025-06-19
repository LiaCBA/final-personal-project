import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F6F5F4] m-auto mx-auto pt-[40px] pr-[20px] pb-[40px] pl-[20px] w-full max-w-[375px]">
      <div className="flex flex-row gap-[80px]">
        <div className="flex flex-col gap-[16px]">
          <Link href="/" className="font-[600] text-[#757575]">
            Home
          </Link>
          <Link href="/pages/classbook" className="font-[600] text-[#757575]">
            Textbook
          </Link>
          <Link href="/pages/statistics" className="font-[600] text-[#757575]">
            Statistics
          </Link>
          <Link href="/pages/sprint-game" className="font-[600] text-[#757575]">
            Sprint
          </Link>
          <Link
            href="/pages/audiocall-game"
            className="font-[600] text-[#757575]">
            Audio-Call
          </Link>
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className="font-[600] text-[#757575]">Alex</span>
          <span className="font-[600] text-[#757575]">Gabriel</span>
          <span className="font-[600] text-[#757575]">Marcus</span>
        </div>
      </div>
      <div className="mt-[20px] border-[#E0E0E0] border-b" />
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex justify-center gap-[30px] mt-[20px]">
          <img
            src="/socialcatlogo.svg"
            alt="social cat"
            width={30}
            height={24}
          />
          <img src="/gtlogo.svg" alt="gt" width={30} height={24} />
          <img src="/youtube.svg" alt="youtube" width={30} height={24} />
        </div>
        <p className="font-[600] text-[#757575] text-[10px]">
          ©2021 GlobalTalk. Project for GlobalTalk.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
