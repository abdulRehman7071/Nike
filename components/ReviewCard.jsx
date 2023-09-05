import { star } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ feedback, rating, customerName, imgUrl }) => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Image
        src={imgUrl}
        alt="customer"
        className=" rounded-full object-cover m-0"
        width={120}
        height={120}
      />
      <p className=" mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          alt={customerName}
          className=" "
          width={24}
          height={24}
        />

        <p className=" text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className=" mt-1 font-palanquin text-3xl text-center font-bold ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
