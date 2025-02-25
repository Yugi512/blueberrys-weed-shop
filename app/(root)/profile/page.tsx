import React from 'react'
import BottomNavbar from "@/components/BottomNavbar";
import { Button } from '@/components/ui/button';
import {auth, signOut} from "@/auth";

const Page = () => {
    const session = auth();

    console.log(session);
    return (
        <div>
            <form action={
                async () => {
                    'use server'
                    await signOut()
            }} className="mb-10" >
                <Button> Logout </Button>
            </form>
            <div>ORDERS</div>
            <div>PAST ORDERS</div>
            <div>USER ADDRESS</div>
            <div>USER PAYMENT OPTION</div>
            <BottomNavbar />
        </div>
    )
}
export default Page
