"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h1 className="text-orange-500 font-bold">{params.category}</h1>
      <div className="items">
        <div className="flex gap-12 mt-12 mb-20 item">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="font-bold text-xl">Content</h1>
            <h4 className="font-medium text-sm">Desc</h4>
            <Button text="Order" url="#" />
          </div>
          <div className="flex-1 h-[30rem] w-auto relative">
            <Image
              src="/websites.jpg"
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-20 item ">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1>Content</h1>
            <h4>Desc</h4>
            <Button text="Order" url="#" />
          </div>
          <div className="flex-1 h-[30rem] w-auto relative">
            <Image
              src="/websites.jpg"
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-20 item">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1>Content</h1>
            <h4>Desc</h4>
            <Button text="Order" url="#" />
          </div>
          <div className="flex-1 h-[30rem] w-auto relative">
            <Image
              src="/websites.jpg"
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-20 item">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1>Content</h1>
            <h4>Desc</h4>
            <Button text="Order" url="#" />
          </div>
          <div className="flex-1 h-[30rem] w-auto relative">
            <Image
              src="/websites.jpg"
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* style item */}
      <style jsx>{`
        .items :nth-child(2n) {
          flex-direction: row-reverse;
        }
      `}</style>
    </div>
  );
};

export default Category;
