'use client'
import React from 'react'
import { useThemeContext } from '../../Context/GetCampaigns'
import glimmer from '@public/assets/glimmer.png'
import Image from 'next/image'
import { CustomImageFolder, CustomLogo } from '..'


const HomeCard = ({owner, target, votes, id}) => {
    const {data} = useThemeContext()    
    const parsedData = data.map((item) => ({...item}))
    const dataFirebase = (id) => {
        return parsedData.find(item => item.id === id);
      };
      const item = dataFirebase(id);
      if (item) {
        return (
          <div className="sm:w-[18rem] w-full rounded-[1rem] bg-[#e5e5ee] p-[20px] cursor-pointer" onClick={() => {window.location.href = `/pages/campaigns/${item.id}`}}>
            <img src={item.image} alt="fund" className="w-full h-40 object-cover rounded-[1rem]"  />
            <div className="flex flex-col p-2">
      <div className="flex flex-row items-center mb-[1.25rem]">
        <CustomImageFolder />
        <p className="ml-[0.75rem] font-epilogue font-medium text-[1rem] ">Campaign</p>
      </div>
      </div>
      <div className="block p-2">
        <h3 className="font-epilogue font-semibold text-[1rem] text-left leading-[1.625rem] truncate">Title: <span className='font-normal'>{item.title}</span> </h3>
        <h3 className="font-epilogue font-semibold text-[1rem]  text-left leading-[1.625rem] truncate">Name: <span className='font-normal'> {item.name}</span> </h3>
        <p className="mt-[5px] font-epilogue font-semibold  text-left leading-[1.625rem] truncate">Story: <span className='font-normal'>{item.description}</span></p>
      </div>
      <div className="flex justify-between flex-wrap gap-2 p-2">
        <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[1rem] leading-[1.625rem]">Amount Collected</h4>
          <div className='flex flex-row items-center'>
          <p className="mt-[0.12rem] font-epilogue font-semibold text-[1rem] leading-[1.625rem] sm:max-w-[9rem] truncate">Goals of: <span className='font-normal truncate'>{target}</span></p>
          <Image className='ml-[0.5rem]'
          src={glimmer}
          alt='glimmer'
          width={20}
          height={20}
          />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[12px] p-2 ">
        <div className="w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center"> 
        <CustomLogo />
        </div>
        <p className="flex-1 font-epilogue font-semibold text-[0.875rem]  truncate">by: <span className="font-normal">{owner}</span></p>
      </div>
      <div className="flex items-center p-2 gap-[12px] ">
        <p className="flex-1 font-epilogue font-semibold text-[0.875rem] truncate">Votes: <span className="font-normal">{votes}</span></p>
      </div>            
          </div>
        );
      }
}

export default HomeCard