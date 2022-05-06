import React from 'react'

const Category = ({category, removeCategory}) => {
  return (
    <div className="m-3 d-flex justify-content-between">
      <>{`${category.title}`}</>
      <button onClick={() => removeCategory(category.id)} className="btn btn-danger me-2 m-1">Remove</button>
    </div>
  )
}

export default Category