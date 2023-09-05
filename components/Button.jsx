import Image from "next/image";

const Button = ({
  label,
  iconUrl,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full ${
        fullWidth && "w-full"
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " text-white border-coral-red"
      }`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow right"
          className=" ml-2 rounded-full "
          height={20}
          width={20}
        />
      )}
    </button>
  );
};

export default Button;
