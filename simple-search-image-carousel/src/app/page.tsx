import Carousel from "@/components/Carousel";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen min-w-screen text-center flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">Simple Search Image Carousel</h1>
          <div className="flex flex-col">
            <p className="text-sm">5 x Image items in infinite carousel</p>
            <p className="text-sm">
              Search images by <span className="font-bold">Pexels API</span>
            </p>
          </div>
        </div>

        <Carousel />
      </div>
    </div>
  );
}
