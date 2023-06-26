import Image from "next/image";
import  folder  from '@/public/assets/folder.svg'

const CustomImageFolder = () => {
  return (
    <>
    <Image src={folder} alt="tag" className="w-[1.125rem] h-[1.125rem]  object-contain" />
    </>
  )
}

export default CustomImageFolder