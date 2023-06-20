import React from "react";
import signupImgDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import checkmark from "../../assets/images/icon-list.svg";

function Signup() {
  return (
    <div className='flex w-[900px] rounded-3xl bg-white p-6'>
      <div className='flex w-1/2 flex-col gap-6 p-8 my-10'>
        <h1 className='text-5xl font-bold'>Stay updated!</h1>
        <div>Join 60,000+ product managers receiving monthly updates on:</div>
        <div className="">
          <div className='flex space-x-4 py-1'><img src={checkmark} alt='checkmark'/><p>Product discovery and building what matters</p></div>
          <div className='flex space-x-4 py-1'><img src={checkmark} alt='checkmark'/><p>Measuring to ensure updates are a success</p></div>
          <div className='flex space-x-4 py-1'><img src={checkmark} alt='checkmark'/><p>And much more!</p></div>
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          <label className="font-bold">Email address</label>
          <input
            type='email'
            placeholder={'email@company.com'}
            className="p-4 border-solid border-2 border-charcoal-grey rounded-lg"></input>
        </div>
        <div className="bg-dark-slate-grey hover:bg-tomato text-white text-center p-4 rounded-lg">
           Subscribe to monthly newsletter
        </div>
      </div>
      <div className='flex w-1/2 rounded-none justify-end'>
        <img src={signupImgDesktop} className='rounded-none' alt='Signup Graphic' />
      </div>
    </div>
  );
}

export default Signup;
