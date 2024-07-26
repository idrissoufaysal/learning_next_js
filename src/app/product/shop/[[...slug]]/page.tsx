import React from 'react'

export default function Slug({params}:{params:{
    slug:string[]
}}) {

  if(params.slug?.length===2){
    return <h1> hey {params.slug[1]} </h1>
  }
else if(params.slug?.length===1){
    return <h1> yes {params.slug[0]} </h1>
}
  return (
    <div>everything is here</div>
  )
}
