import React from 'react'

const RelativeList = () => {
    const lists=['omkar','bhushan','kartik','nayan']
  return (
    <div>
      <ol key='relativeList'>
       {
       lists.map((list,index)=><li key={`relativeListItem${index+1}`}>{list}</li>)
       }
      </ol>
    </div>
  )
}

export default RelativeList;
