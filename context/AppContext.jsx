'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([])
    const [enrolled, setEnrolled] = useState([])

    const addToWishlist = (course) => {
        setWishlist((prev) =>
            prev.find((c) => c.id === course.id) ? prev : [...prev, course]
        )
    }
    //  If the course already exists → return prev (no change)
    // If it does NOT exist → return a new array with the course added

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((c) => c.id !== id))
    }
    // run through the wishlist and keep everything except the item with this ID.

    const isWishlisted = (id) => wishlist.some((c) => c.id === id)

    const enrollInCourse = (course) => {
        setEnrolled((prev) =>
            prev.find((c) => c.id === course.id) ? prev : [...prev, course]
        )
    }
    // if already enrolled, no change return prev, else spread prev and add new course.

    const isEnrolled = (id) => enrolled.some((c) => c.id === id)

    return (
        <AppContext.Provider
            value={{
                wishlist,
                enrolled,
                addToWishlist,
                removeFromWishlist,
                isWishlisted,
                enrollInCourse,
                isEnrolled,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useApp must be used within AppProvider')
    return context
}
