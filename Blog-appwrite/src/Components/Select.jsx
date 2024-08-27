import React,{userId} from 'react'

function Select({
    options,
    label,
    classname,
    ...props
},ref) {
    const id=userId()
  return (
    <div>
      {label && <label htmlFor='id' className=''></label>}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`$classname`}>
        {options?.map((option)=>{<option key={option} value={option}>{option}</option>})}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)