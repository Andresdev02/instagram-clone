import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 123,
    username: 'ssshanga',
    userImg: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911',
    img: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911',
    caption: 'This is dope! ',
  },
  {
    id: 333,
    username: 'andres.alvarez.v_',
    userImg: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911',
    img: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/90790493_3159991150718111_858633665494646784_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YsyIjAtgI-4AX_Xpy1O&tn=DwPz_Ixj9vfizmjD&_nc_ht=scontent-bru2-1.xx&oh=00_AT_oGjpZEU8igTEtID5wI8GUJ--7bDRtd0q-1XnXzoxl1w&oe=623BA911',
    caption: 'This is dope! ',
  },
]
function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Posts
