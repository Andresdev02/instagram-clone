import faker from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [sugesstions, setSugesstions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSugesstions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold  text-gray-400">
          Suggestions for you
        </h3>
        <button className="font-semibold text-gray-600"> See all</button>
      </div>
      {sugesstions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={suggestion.avatar}
            alt=""
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{suggestion.username}</h2>
            <h3 className="w-36 truncate text-xs font-semibold text-gray-400">
              Works at {suggestion.company?.name}
            </h3>
          </div>

          <button className="text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
