import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-4 bg-black text-white">
            <ul className="flex space-x-20 justify-center">
              <Link href="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer">About</li>
              </Link>
              <Link href="/blog">
                <li className="cursor-pointer">Blog</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
          </nav>
  )
}

export default Navbar
