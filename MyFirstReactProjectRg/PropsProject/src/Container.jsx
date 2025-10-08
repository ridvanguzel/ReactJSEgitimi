import React from 'react'

function Container({children}) {
    // console.log(props);
  return (
    <>
    <div>Main Container</div>
        <div>{children}</div>
    </>
  )
}

export default Container