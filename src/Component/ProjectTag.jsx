import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {

    const buttonStyles = isSelected 
    ? 'bg-orange-700' 
    : 'border-slate-500 hover:border-orange-500 hover:bg-orange-700 cursor-pointer'

  return (
    <button 
    className={`${buttonStyles} rounded-full  px-3 py-2 text-xl cursor-pointer `}
    onClick={() => onClick(name)}
    >
        {name}
        </button>
  )
}

export default ProjectTag