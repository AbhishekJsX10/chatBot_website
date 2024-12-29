import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className='rootLayout p-[16px_64px] h-screen w-full flex flex-col'>
        <header className='flex justify-between items-center '>
            <Link to='/' className='flex items-center font-bold gap-[9px]'>
                <img src="./logo.png"  className='w-[32px] h-[32px]' alt="" />
                <span>Abhishek AI</span>
            </Link>
            <div className="user">
            {/* <SignedOut>
                <SignInButton />
            </SignedOut> */}
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
        </header>
        <main className='flex-1 overflow-hidden'>
            <Outlet />
        </main>
    </div>
    </ClerkProvider>
  )
}

export default RootLayout