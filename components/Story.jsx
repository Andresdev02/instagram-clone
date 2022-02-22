import React from 'react'

function Story({ profile }) {
  const { name, avatar } = profile
  return (
    <div className="">
      <img
        src={avatar}
        alt={name}
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="w-14 text-xs truncate text-center"> {name}</p>
    </div>
  )
}
export default Story
