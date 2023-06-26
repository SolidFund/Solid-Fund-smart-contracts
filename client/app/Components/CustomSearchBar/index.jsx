import Image from "next/image";
import search from "@public/assets/search.svg";

const CustomSearchBar = () => {
  return (
    <>
    <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[3rem] bg-[#e5e5ee] items-center rounded-full">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[1rem]   bg-transparent border-none "
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#E8831D] flex justify-center items-center cursor-pointer">
          <Image
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default CustomSearchBar