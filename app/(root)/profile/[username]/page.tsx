import React from 'react'
import BottomNavbar from "@/components/BottomNavbar";
import { Button } from '@/components/ui/button';
import { signOut } from "@/auth";
import ProfilePage from "@/components/ProfilePage";

const Page = async ({params} : {params: Promise<{username: string}>}) => {
    const user = (await params).username;
    return (
        <div>
            <form action={
                async () => {
                    'use server'
                    await signOut()
            }} className="mb-10" >
                <Button> Logout </Button>
            </form>
            <ProfilePage username={user!}/>
            <BottomNavbar />
        </div>
    )
}
export default Page
