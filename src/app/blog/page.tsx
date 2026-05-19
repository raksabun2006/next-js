import React from 'react'
import BlogComponent from '../../components/BlogComponent'
import { blogType } from '@/lib/blog'

export default function page() {
   const blogs: blogType[]=[
        {id: 1, profile: "https://i.pinimg.com/736x/76/a6/ff/76a6ff24827e10303b7f1023d2a28457.jpg" ,name:"kaka",position: "barista"},
        {id: 2, profile: "https://i.pinimg.com/1200x/89/c1/61/89c161a0986ff427c8e84848119458ab.jpg" ,name:"momo",position: "manager"},
        {id: 3, profile: "https://i.pinimg.com/736x/19/1c/84/191c84af6327227c337a19dd158c9657.jpg" ,name:"maama",position: "staff"},
        {id: 4, profile: "https://i.pinimg.com/1200x/77/05/4b/77054b6f50cde2c75201d523be17ae3b.jpg" ,name:"ena",position: "staff"},
        {id: 5, profile: "https://i.pinimg.com/1200x/18/57/51/185751ba0deb1c1ca17d03023d35268b.jpg" ,name:"mamfcw",position: "leader"}
    ]
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-8">
      {
        blogs.map(({ id, profile, name, position }) => (
          <BlogComponent
            key={id}
            id={id}
            profile={profile}
            name={name}
            position={position}
          />
        ))
      }
    </div>
  )
}