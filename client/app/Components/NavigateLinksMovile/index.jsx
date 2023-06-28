import React from 'react'
import Link from "next/link";
import {links} from "../NavigateLinks/links"

const NavigateLinksMovile = () => {
  return (
    <>
    {links.map((link) => (
                <li
                  key={link.label}
                  className="flex align-center justify-center  py-4 px-8"
                >
                  <Link
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    href={link.route}
                    as={link.route}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
    </>
  )
}

export default NavigateLinksMovile