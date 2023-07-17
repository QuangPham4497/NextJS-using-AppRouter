import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div>
      <div className="w-full h-72 relative">
        <Image
          src="/apps.jpg"
          fill={true}
          alt="image"
          className="object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 p-2 bg-green-400 font-bold">
          <h1 className="text-3xl">Digital Teller</h1>
          <h2 className="text-xl">
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className="flex gap-24 ">
        <div className="mt-10 flex-col gap-7 font-medium">
          <h1 className="text-2xl mb-5">Who are we?</h1>
          <h3 className="font-normal mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vel quos ratione molestias qui aspernatur quod necessitatibus
            obcaecati, laboriosam sunt commodi perspiciatis ad, perferendis
            saepe voluptas cumque rem natus! Doloremque!
          </h3>
        </div>
        <div className="mt-10 flex-col gap-7 font-medium ">
          <h1 className="text-2xl mb-5">What We Do?</h1>
          <h3 className="font-normal mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vel quos ratione molestias qui aspernatur quod necessitatibus
            obcaecati, laboriosam sunt commodi perspiciatis ad, perferendis
            saepe voluptas cumque rem natus! Doloremque!
          </h3>
          <Button url="/" text="See more ..." />
        </div>
      </div>
    </div>
  );
};

export default About;
