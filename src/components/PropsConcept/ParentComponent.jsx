import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  let name="Hello world";
  let fathername="feafea"
  let obj={
        name: "Hedy Lamarr",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90
  }
  return (
    <div>ParentComponent
      <h1>{name}</h1>
      <ChildComponent parentname={name} fathername={fathername} cardobj={obj}/>
    </div>
  )
}

export default ParentComponent