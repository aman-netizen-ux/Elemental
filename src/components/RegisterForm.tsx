import React, { useState } from 'react';
import InputField from './InputFields';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering user:', { email, password, name });
    }

    return (
        <form onSubmit={handleRegister} className="flex flex-col items-center justify-center h-full w-full">
            <h1 className='text-white text-xl font-inter'> Sign up your account</h1>
            <p className="text-[#B9B6B6] text-xs font-inter py-2"> Enter required information to create your account </p>

            <div className='w-[20rem] h-[15rem] mt-2 space-y-2'>
                <div className=' flex gap-4 items-center justify-center '>
                <InputField
                    label="First Name"
                    type="name"
                    placeholder="eg: James"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputField
                    label="Last Name"
                    type="name"
                    placeholder="eg: Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <InputField
                type="email"
                placeholder='eg: jamesmorgan@gmail.com'
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
                type="password"
                placeholder='Enter your password'
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            </div>
            </div>
            <p className='font-inter text-[13px] mt-10 text-[#C9BEBE] '>Already have an account? Log in</p>

            {/* <button type = "submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700"> Register</button> */}
        </form>
    );
}

export default RegisterForm;