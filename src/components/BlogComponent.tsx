import React from 'react'
import { blogType } from '@/lib/blog'

export default function BlogComponent({id, profile, name , position}:blogType) {
   
  return (
    <div>
      <img src={profile} alt="" width={"100px"}/>
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  )
}