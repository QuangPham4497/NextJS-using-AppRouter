import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="text-center text-xl font-extrabold uppercase">
        Tinh hoa ẩm thực Việt
      </h1>
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item._id}`}
          className="flex gap-12 mt-12 mb-20"
        >
          <div className="flex-1 w-max h-max">
            <Image
              src={item.image}
              width={400}
              height={400}
              alt=""
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="font-bold text-xl">{item.title}</h1>
            <h4 className="font-medium text-sm">{item.desc}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
