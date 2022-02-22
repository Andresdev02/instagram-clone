import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
const Header = () => {
  return (
    <nav className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        {/* Left */}
        <div className="relative hidden  w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="relative  w-10 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/* Middle - search input */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md  p-3 ">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-gray-600  focus:ring-gray-600 sm:text-sm "
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911"
            alt="profile pic"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
