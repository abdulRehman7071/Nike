import Image from "next/image";
import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-110 ease-in-out transition-all delay-100 cursor-pointer ">
      <div className=" w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
        <Image src={imgURL} alt="label" height={24} width={24} />
      </div>
      <h3 className=" mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className=" mt-3 break-words font-montserrat text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
