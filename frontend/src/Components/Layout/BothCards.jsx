import React from 'react'
import RelatedPostCard from '../Atoms/RelatedPostCard'
import InputCard from '../Atoms/InputCard'

const BothCards = () => {
  return (
    <div style={{width:'100%',padding:'1rem',display:'flex'}}>
        <RelatedPostCard/>
        <InputCard/>
    </div>
  )
}

export default BothCards