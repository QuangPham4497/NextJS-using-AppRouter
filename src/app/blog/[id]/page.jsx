import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-max h-max">
        <Image
          src={data.image}
          width={400}
          height={400}
          alt=""
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="mt-10">
        <div>{data.content}</div>
        <div>Price: {data.desc}</div>
        <div>Reviewer: {data.username}</div>
      </div>
    </div>
  );
};

export default BlogPost;
