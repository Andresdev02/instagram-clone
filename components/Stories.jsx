import React, { useEffect } from 'react'
import faker from 'faker'

function Stories() {
  useEffect(() => {
    const sugesstions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }));
    console.log(sugesstions);
  }, [])

  return <div>
      <h1>Stories</h1>
  </div>
}

export default Stories
