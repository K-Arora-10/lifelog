import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className="flex bg-[url(/bg.jpg)] bg-cover pb-10">
        <div className="w-3/7 ml-16">
          <div className="text-6xl mt-52">Hunting Coder</div>
          <div className="mt-5">
            HuntingCoder is a blog built for coders who love to learn, explore,
            and build. From coding tips to project ideas and tech insights, it’s
            your go-to spot to stay sharp and inspired.
          </div>
        </div>
        <div className="w-4/7">
          <Image
            className="mt-20 ml-20 rounded-2xl"
            src="/coder.png"
            alt=""
            width={600}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
