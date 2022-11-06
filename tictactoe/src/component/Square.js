import React from 'react'

function square({value,onclick}) {
  return (
    <button
    type='button'
    className='square'
    onClick={onclick}
    >
        {value}

    </button>
  )
}

export default square