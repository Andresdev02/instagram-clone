import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto my-6'>
      <section className='col-span-2'>
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section>
        {/* Mini Profile */}
        {/* Sugesstions*/}
      </section>
    </main>
  )
}

export default Feed
