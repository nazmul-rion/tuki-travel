import React from 'react'
import useAuth from '../../hooks/useAuth'

const MyOrders = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="text-center">MY ORders</h1>

        </div>
    )
}

export default MyOrders
