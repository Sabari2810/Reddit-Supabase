import Image from 'next/image'
import React from 'react'

import { HomeIcon, MenuIcon } from '@heroicons/react/solid'

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  GlobeIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="sticky top-0 flex items-center bg-white px-6 py-2">
      <Image
        src="https://links.papareact.com/fqy"
        className="object-contain"
        height={50}
        width={100}
      />
      <div className="mx-4 flex items-center space-x-2 xl:min-w-[300px]">
        <HomeIcon className="h-6 w-6" />
        <p className="hidden flex-1 md:inline-flex">Home</p>
        <ChevronDownIcon className="h-6 w-6" />
      </div>
      <div className="flex flex-1 items-center rounded-sm bg-gray-200 p-2">
        <SearchIcon className="h-6 w-6 text-gray-600" />
        <input
          type="text"
          className="flex-1 bg-transparent px-1 outline-none"
          name=""
          id=""
          placeholder="Search..."
        />
      </div>
      <div className="mx-2 hidden items-center space-x-2 text-gray-500 md:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-300" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-2 flex items-center md:hidden">
        <MenuIcon className="icon" />
      </div>
      <div className="ml-3 hidden items-center space-x-1 lg:flex">
        <div className="relative h-5 w-5">
          <Image layout="fill" src="https://links.papareact.com/23l" alt="" />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  )
}

export default Header
