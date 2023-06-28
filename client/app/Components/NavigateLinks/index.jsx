import React from 'react'
import Link from "next/link";
import { links } from './links'

const NavigateLinks = () => {
  return (
    <>
    {links.map((link) => (
            <li key={link.label}>
              <Link href={link.route} as={link.route} >{link.label}</Link>
            </li>
          ))}
    </>
  )
}

export default NavigateLinks