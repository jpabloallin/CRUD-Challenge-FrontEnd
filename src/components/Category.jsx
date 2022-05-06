import React from 'react'

const Category = ({category, removeCategory}) => {
  return (
    <div>
      <>{`${category.name}`}</>
      <button onClick={() => removeCategory(category.id)}>Remove</button>
    </div>
  )
}

export default Category