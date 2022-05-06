import React from 'react'

const Category = () => {
    const {state, dispatch} = useContext(Store)
    console.log(state);
    return (
        <div>
            <h1>Category test</h1> 
            <ul>
            {state.category.map(todo => {
                return <p key={todo.id}>
                {todo.id} <br />
                {todo.name} <br />
            </p>
            })}
            </ul>
        </div>
    )
}

export default Category