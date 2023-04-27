import React from 'react'

const ChildComponent = (props) => {
    console.log(props);
    const { parentname, fathername, cardobj } = props;
  return (
    <div>
      <h1>Child Component </h1>
      <p>{parentname}</p>
      <p>{fathername}</p>
      <p>{cardobj.name}</p>
    </div>
  );
}

export default ChildComponent