import React,{useId} from 'react'

const Input=React.forwardRef(function Input(
  {
    label,
    type='text',
    className='',
    ...props
  },ref
){
    const id=useId()
    return (
        
        <div className='w-full'>
            {label && <label
            className='inline mb-1 ml-1'
            htmlFor='id'>
                {label}</label>}
            <input
            type={type}
            className={`${className}`}
            ref={ref}
            {...props}
            id={id}
            ></input>
        </div>
      
      )
    
}) 
 

export default Input