import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-[4.5rem] font-bold bg-gradient-to-b from-orange-500 to-orange-100 bg-clip-text text-transparent">
          Khám phá ẩm thực Việt Nam
        </h1>
        <h3 className="text-[1.5rem] font-light">Cùng nhau khám phá nào</h3>
        <Button url="/about" text="Xem thêm ..." />
      </div>
      <div className="flex-1 ">
        <Image
          src="https://images.pexels.com/photos/17498979/pexels-photo-17498979/free-photo-of-banh-m-mon-an-dia-banh-mi-sandwich.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={400}
          height={300}
          alt="hero img"
          className=" object-cover animate-[updown_3s_infinite_ease_alternate] "
        />
      </div>
    </div>
  );
}
