import React from 'react'

interface userPayments{
    id: string
    userID: string
    payment_type: string
    provider: string
    accountNumber: string
    expiration: string
}
// this is forf later for right now we have the template ready

const UserPayments = () => {
    return (
        <div>UserPayments</div>
    )
}
export default UserPayments
