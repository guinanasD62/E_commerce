"use client"

import { useEffect, useState } from "react"

const AddCartBtn = () => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        },4000)

        return () => clearTimeout(timeout)
    }, [isSuccess]
)

return (
    <button type="submit" onClick={() => {
        setIsSuccess(true)
    }}> 
        {isSuccess ? "Added!" : "Add to cart"}
    </button>
  )
}

export default AddCartBtn

//uthjs.dev/geting-started/providers/oauth-tutorial