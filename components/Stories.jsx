import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
  const { data: session } = useSession()
  const [sugesstions, setSugesstions] = useState([])
  useEffect(() => {
    const sugesstions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSugesstions(sugesstions)
  }, [])

  return (
    <div className="flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin hover:scrollbar-thumb-slate-50">
     {session && <Story key={session.user.uid} name={session.user.name} avatar={session.user.image} />}
      {sugesstions.map((profile) => (
        <Story key={profile.id} name={profile.name} avatar={profile.avatar} />
      ))}
    </div>
  )
}

export default Stories
