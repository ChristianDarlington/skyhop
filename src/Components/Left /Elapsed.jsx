import React from 'react'

const Elapsed = () => {
  return (
    <>
    <div className='flex justify-center items-center h-[50px] w-[350px] pt-8'>
      <p className='font-bold'>
        Elapse Data Checking
      </p>
    </div>
      <div className='flex justify-center items-center w-[320px] h-11'>        
      <p className='font-bold text-green-600'>
        No Elapsed Dates!
      </p>   
      </div>
      <div className='flex justify-center items-center w-[540px] h-6 pr-3'>
      <hr className='w-[60%] m-10 ml-0 border-[1px] '/>
      </div>
    </>
  )
}

export default Elapsed
