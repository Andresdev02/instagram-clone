import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import Story from './Story'

function Stories() {
  const [sugesstions, setSugesstions] = useState([])
  useEffect(() => {
    const sugesstions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSugesstions(sugesstions)
  }, [])

  return (
    <div className="flex space-x-2 rounded-sm border border-gray-200 bg-white p-6 overflow-x-scroll scrollbar-thin hover:scrollbar-thumb-slate-50">
      {sugesstions.map((profile) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  )
}

export default Stories
