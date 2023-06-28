import Image from "next/image";
import loader from "@/public/assets/loader.svg";

const CustomLoader = () => {
  return (
    <>
      <Image
        src={loader}
        alt="loader"
        className="w-[6.25rem] h-[6.25rem]  object-contain"
      />
    </>
  );
};

export default CustomLoader;
