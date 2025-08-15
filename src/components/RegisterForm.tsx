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
        <form onSubmit={handleRegister} className="flex flex-col items-center justify-center">
            <h1 className='text-white text-xl font-inter'> Sign up your account</h1>
            <p className="text-[#B9B6B6] text-xs font-inter py-2"> Enter required information to create your account </p>

            <div className='w-[19.5rem] h-[15rem] space-y-2'>
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
            <div className='flex flex-col gap-2'>
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

            <button className='bg-white rounded-md p-1.5 text-sm font-semibold mt-2'>
                Register
            </button>

            </div>
            </div>
            <p className='font-inter text-[13px] mt-10 text-[#C9BEBE] font-semibold'>Already have an account? <span className='text-white'>Log in</span></p>
            

            <hr className='text-[#1F1F1F] w-full mt-5' />



            <div className="flex items-center justify-center gap-3 mt-4">
                <Button 
                    logo={"./google-icon.svg"}
                    content="Google"
                />
                <Button
                    logo={`./github-icon.svg`}
                    content="Github"
                />
            </div>

        </form>
    );
}


function Button({logo, content}) {
    return(
       <button className='border border-[#1f1f1f] rounded-lg px-6 py-2 flex items-center justify-center gap-2 tracking-normal'>
                <img src={logo} className='flex items-center justify-center w-3.5 h-3.5' />
                <p className="font-inter text-sm text-white">{content}</p>
        </button>
    )
}

export default RegisterForm;