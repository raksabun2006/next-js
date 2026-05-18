import React from 'react'
import { blogType } from '@/lib/blog'
import Image from 'next/image'

export default function BlogComponent({profile, name , position}) {
    const blogs=[
        {profile: "https://i.pinimg.com/736x/76/a6/ff/76a6ff24827e10303b7f1023d2a28457.jpg" ,name:"kaka",position: "barista"},
        {profile: "https://i.pinimg.com/1200x/89/c1/61/89c161a0986ff427c8e84848119458ab.jpg" ,name:"momo",position: "manager"},
        {profile: "https://i.pinimg.com/736x/19/1c/84/191c84af6327227c337a19dd158c9657.jpg" ,name:"maama",position: "staff"},
        {profile: "https://i.pinimg.com/1200x/77/05/4b/77054b6f50cde2c75201d523be17ae3b.jpg" ,name:"ena",position: "staff"},
        {profile: "https://i.pinimg.com/1200x/18/57/51/185751ba0deb1c1ca17d03023d35268b.jpg" ,name:"mamfcw",position: "leader"}
    ]
  return (
    <div>
      <img src={props?.profile} alt="" width={"100px"}/>
      <h1>{props?.name}</h1>
      <p>{props?.position}</p>
    </div>
  )
}