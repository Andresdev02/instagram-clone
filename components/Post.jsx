import React, { useState, useEffect } from 'react'
import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from '@firebase/firestore'
import { db } from '../firebase'
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

function Post({ post, id }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const { username, profileImg, image, caption } = post

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapchot) => setComments(snapchot.docs)
      ),
    [db, id]
  )
  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapchot) =>
        setLikes(snapchot.docs)
      ),
    [db, id]
  )
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session.user.uid) !== -1
      ),
    [likes]
  )
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }
  const sendComment = async (e) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={profileImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* COVER */}
      <img src={image} alt={username} className="w-full object-cover" />
      {/* BUTTONS */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 ">
            {hasLiked ? (
              <HeartIconFilled
                className="btn-post text-red-500"
                onClick={likePost}
              />
            ) : (
              <HeartIcon className="btn-post" onClick={likePost} />
            )}
            <ChatIcon className="btn-post" />
            <PaperAirplaneIcon className="btn-post" />
          </div>
          <BookmarkIcon className="btn-post" />
        </div>
      )}

      {/* CAPTION */}
      <p className="truncate p-5">
        {likes.length > 0 && <p className="font-bold mb-1">{likes.length} likes</p>}
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* COMMENTS */}
      {comments.length > 0 && (
        <div className="scrollbar-hidden ml-10 max-h-20 overflow-y-scroll ">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().profileImg}
                alt=""
                className="h-7 rounded-full"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <TimeAgo
                className="pr-5 text-xs"
                live={false}
                date={comment.data().timestamp?.toDate()}
              />
            </div>
          ))}
        </div>
      )}
      {/* INPUT BOX */}
      {session && (
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 w-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0"
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
