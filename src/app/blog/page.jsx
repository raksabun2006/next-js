import React from 'react'
import BlogComponent from '../../components/BlogComponent'
import { blogType } from '@/lib/blog'

export default function page() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-8">
      {
        blogs.map(({ profile, name, position }, _) => (
          <BlogComponent
            key={_}
            profile={profile}
            name={name}
            position={position}
          />
        ))
      }
    </div>
  )
}