import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("Email is ", email)
        console.log("Password is ", password)
        handleLogin(email, password)

        setemail('')
        setpassword('')

    }

    const EmailChanger = (e) => {
        setemail(e.target.value)

    }
    const PassChanger = (e) => {
        setpassword(e.target.value)

    }

    return (
        <>
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => { SubmitHandler(e) }} className='flex flex-col items-center justify-center'>
                    <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='enter your email' onChange={EmailChanger} value={email} />
                    <input className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-5' type='password' placeholder='enter your password' onChange={PassChanger} value={password} />
                    <button className='text-white outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-5 border-none'>Log in</button>
                </form>
            </div>
            

        </div>
        <div className='text-white absolute top-1'>
        <strong>Login info</strong><br/>
                admin:=admin@me.com,123<br/>
                student:=student1@example.com,123/ """""" /student4@example.com,123

            </div>

        </>
        
    )
}

export default Login
