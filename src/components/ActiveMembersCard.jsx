import React from 'react'
import IMAGES from "../static"

const ActiveMembersCard = (props) => {
  return (
    <div className=' h-auto w-72 shadow-2xl flex items-center justify-center flex-col px-5 py-8 mx-3 my-2 rounded-2xl bg-white-800'>
        <div className='relative '>
        <img src={IMAGES.imageAbstract} alt="" className='absolute top-0 left-0'/>
        <img src={props.staffPhoto} alt="" className='w-40 h-40' />
        </div>
        <div className='mt-2'>

        <h5 className='text-base font-semibold text-center'>{props.staffName}</h5>
        <p className='text-sm text-blue-500 font-semibold text-center cursor-pointer'> <a href="/">{props.staffId}</a> </p>
        </div>
    </div>
  )
}

export default ActiveMembersCard