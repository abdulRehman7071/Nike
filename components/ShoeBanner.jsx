"use client";
import ShoeCard from "./ShoeCard";
import Image from "next/image";
import { bigShoe1, bigShoe2, bigShoe3 } from "@/public/assets/images";
import { shoes } from "@/constants/index";
import { useState } from "react";

const ShoeBanner = () => {
  const [bigShowImage, setBigShowImage] = useState(bigShoe1);
  return (
    <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <Image
        className=" object-contain relative z-10"
        src={bigShowImage}
        alt="shoe-collection"
        height={500}
        width={610}
      />
      <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => {
                setBigShowImage(shoe);
              }}
              bigShowImg={bigShowImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeBanner;
