import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {

    const btnStyles = isSelected 
    ? 'btn btn-outline-light mx-3 fw-bold' 
    : 'btn text-orange bg-white mx-3 fw-bold'

  return (
    <button 
    className={`${btnStyles} btn btn-outline-light mx-3 fw-bold`}
    onClick={() => onClick(name)}
    >
        {name}
        </button>
  )
}

export default ProjectTag