import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import InputField from './InputFields';

const LoginForm = () => {
    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = { email, name: 'Aman', password };
        dispatch({ type: 'LOGIN', payload: user });
    };

    return (<form onSubmit={handleLogin} className="flex flex-col justify-center items-center">
        <h1 className='text-white text-xl font-inter'> Sign up your account</h1>
        <p className="text-[#B9B6B6] text-xs font-inter py-2"> Enter required information to create your account </p>
        <div className=''>
            <InputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
        />
        <input
            type="password"
            placeholder='"Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"> Login </button>
    </form>
    );

};

export default LoginForm;