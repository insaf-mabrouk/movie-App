import React from 'react'

const Title = (props) => {
    return (
        <div>
            <h1 style={{textAlign:"center", padding:60}}>{props.title}</h1>
        </div>
    )

    
}

Title.defaultProps={
    title:"insert title here"
  }

export default Title
