import React ,{useRef} from 'react'

const useRefIs =() => {
    let inputRef = useRef(null)

  return (
    <div>
        <input type='text' ref={inputRef} />
        <button>handle evenet</button>
    </div>
  )
}
export default useRefIs;