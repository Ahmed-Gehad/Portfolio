import React from 'react'

const InfoContact = () => {
  return (
    <div className='InfoContact '>
        <h1 className='fw-bold'>let's work Together</h1>
        <p className='w-75 fs-5 lead py-4'>im currently avaliable to take on new projects,
            so feel free to send me a message about anything that you want me to work on.
            you can contact anytime.
        </p>
        <div>
            <div className='info py-3'>
                <i className='fa-solid fa-envelope fs-3 me-3' > </i>
                <span className='fs-5'>Agehad248@gmail.com</span>
            </div>
            <div className='info py-3'>
                <i className='fa-solid fa-phone fs-3 me-3' > </i>
                <span className='fs-5'>+01204426814</span>
            </div>
        </div>
    </div>
  )
}

export default InfoContact