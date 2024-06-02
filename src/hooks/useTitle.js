import  { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(() => {
        document.title =`${title} | ShopCart`
    },[title])
  return null;
}
