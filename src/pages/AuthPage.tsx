import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { ArrowRight } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-screen bg-black flex overflow-y-auto tracking-tighter">

      <GradientBlock />
      <div className='w-[35%] flex justify-center items-center'>
        <RegisterForm />
      </div>


    </div>
  );
}

export default AuthPage;

function GradientBlock() {
  return(
        <div className='w-[535px] h-[620px] bg-gradient-to-b from-[#FF0000] via-[#FF4201] to-[#FF8401] rounded-2xl flex flex-col justify-center items-center bg-white'>
        <p className="font-judson text-6xl text-white">Elemental</p>
        <p className="font-italianno text-4xl text-white">way to creativity</p>
        <button
          className='bg-black text-white  rounded-lg mt-4 w-63 h-10 flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => { alert("Button pressed!"); }}
        ><span className='font-semibold'>Register your account
          </span> <ArrowRight /> </button>
      </div>
  )
}



{/* <div className="min-h-screen bg-black bg-gradient-to-br from-purple-100 to-purple-800 flex items-center justify-center px-4">
      
    </div> */}

{/* <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex transition-all duration-700"> */ }

{/* Image Section */ }
{/* <div
          className={`w-1/2 p-10 flex items-center justify-center transition-transform duration-700 ${
            isLogin ? 'translate-x-0' : '-translate-x-full'
          }`}
        > */}
{/* <img
            src="https://images.app.goo.gl/VPfRse8iqeA6tvvx5"
            alt="Auth Visual"
            className="max-w-full h-auto object-cover"
          /> */}
// </div>

{/* Form Section */ }
// <div className="w-1/2 p-10 flex flex-col justify-center transition-all duration-700">
//   {isLogin ? <LoginForm /> : <RegisterForm />}
//   <p className="mt-4 text-sm text-center">
//     {isLogin ? "New user? " : "Already have an account? "}
//     <button
//       onClick={() => setIsLogin((prev) => !prev)}
//       className="text-blue-600 hover:underline font-medium ml-1"
//     >
//       {isLogin ? "Register now" : "Login"}
//     </button>
//   </p>
// </div>
// </div>