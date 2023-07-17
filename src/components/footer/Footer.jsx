import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 mt-10 flex items-center justify-between">
      <div>&copy; 2023 My website. All rights reserved</div>
      <div className="flex items-center gap-2.5">
        <Image
          src="/1.png"
          width={20}
          height={20}
          alt="icon social"
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          alt="icon social"
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          alt="icon social"
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          alt="icon social"
          className="opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
