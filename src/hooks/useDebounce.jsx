import { useEffect, useState } from 'react'

const useDebounce = (Function,delay) => {
  useEffect(() => {
    const id=setTimeout(() => {
        Function()
    }, delay);
    return () => {
        clearTimeout(id)
    };
  }, [delay])

}

export default useDebounce