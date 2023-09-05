"use client";
import Image from "next/image";
const ShoeCard = ({ bigShowImg, changeBigShoeImage, imgUrl }) => {
  const handleClick = () => {
    if (bigShowImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={` border-2 rounded-xl max-sm:flex-1 cursor-pointer ${
        bigShowImg === imgUrl.bigShoe ? " border-coral-red" : " border-transparent "
      }`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgUrl.thumbnail}
          alt="shoe collection "
          width={127}
          height={103}
          className=" object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
