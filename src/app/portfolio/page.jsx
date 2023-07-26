import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-medium my-5 ">
        Choose which you want
      </h1>
      <div className="flex gap-14 justify-center items-baseline">
        <Link
          href="/portfolio/food"
          className="border-4 border-solid border-orange-400 w-72 h-72 relative hover:text-orange-500"
        >
          <Image
            src="/foodcate.jpeg"
            fill={true}
            alt=""
            className="object-cover "
          />

          <span className="text-3xl font-medium absolute right-2 bottom-2">
            Foods
          </span>
        </Link>
        <Link
          href="/portfolio/drink"
          className="border-4 border-solid border-orange-400 w-72 h-72 relative hover:text-orange-500"
        >
          <Image
            src="/drinkcate.jpeg"
            fill={true}
            alt=""
            className="object-cover "
          />
          <span className="text-3xl font-medium absolute right-2 bottom-2">
            Drinks
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
