import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-2 cursor-pointer bg-orange-300 border-none rounded-md w-max">
        {text}
      </button>
    </Link>
  );
};

export default Button;
