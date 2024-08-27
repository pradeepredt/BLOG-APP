import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div classname="min-h-screen mt-20">
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left*/}
        <div className='flex-1'>
        <Link  to="/" className='font-semibold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        Deepu </span>
        Blog
        </Link>
        <p>
          This is my Blog app. You can signup using your email address
        </p>
        </div>
        {/*right*/}
        <div className='flex-1'>
          <form >
           <div className='flex flex-col gap-4'>
            <Label value="Your Username"/>
            <TextInput type="text" placeholder='Username' id="username" />
           </div>
           <div className=''>
            <Label value="Your email"/>
            <TextInput type="text" placeholder='name@email.com' id="email" />
           </div>
           <div className=''>
            <Label value="Your password"/>
            <TextInput type="text" placeholder='Password' id="password" />
           </div>
           <Button gradientDuoTone='purpleToPink' type="submit">Signup</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className='text-blue-500'>SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
