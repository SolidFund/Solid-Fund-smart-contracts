import Image from "next/image";
import Logo from "@public/assets/Logo.jpg";

const CustomLogo = () => {
  return (
    <>
      <Image
        className="object-contain rounded-[100px]"
        src={Logo}
        alt="logo"
        width={50}
        height={50}
      />
    </>
  );
};

export default CustomLogo;
