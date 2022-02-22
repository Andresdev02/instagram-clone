import React from 'react'
import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
function Post({ post }) {
  const { id, username, userImg, img, caption } = post
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* COVER */}
      <img src={img} alt={username} className="w-full object-cover" />
      {/* BUTTONS */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn-post" />
          <ChatIcon className="btn-post" />
          <PaperAirplaneIcon className="btn-post" />
        </div>
        <BookmarkIcon className="btn-post" />
      </div>
      {/* CAPTION */}
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username}</span>
      </p>

      {/* COMMENTS */}
      {/* INPUT BOX */}
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 w-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none focus:ring-0"
        />
        <button className="text-blue-400 font-semibold">Post</button>
      </form>
    </div>
  )
}

export default Post
