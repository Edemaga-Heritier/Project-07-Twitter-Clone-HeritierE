import React, { useState } from 'react'

const react= "imgages/React.svg"
const liked ="images/ heart.svg"

export default function like() {
const [icon,setIcon] = useState(true)
const [count,setCount] =useState(counts)

const changeIcon = () =>{
    setIcon(!icon)
}

const handleClick = () =>{
    if (!icon) {
        setCount(count -1)
    }else{
        setCount(count +1)
    }
}


  return (
<div className='' title ='like' onClick={ ()=>{ changeIcon(),handleClick()}}>
<span>
    <img src={`${icon ? react : liked}`}  />
</span>
<span style={{ color: !icon ? 'red ' :'', padding:"10px"}}>{count}</span>
</div>
  )
}

