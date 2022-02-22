import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border object-contain p-[2px]"
        src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911"
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Andres Vergauwen</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
