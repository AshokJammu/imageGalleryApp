import React from 'react'

const TodoData = ({data,deleteHandler}) => {
  return (
    <div>
        <h4>Todo Data</h4>
        {data.map((item,index)=>(
            <div key={index}>
                <h4 >{item} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h4>
            </div>
        ))}
    </div>
  )
}

export default TodoData