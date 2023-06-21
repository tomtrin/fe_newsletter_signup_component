import React from "react";
import signupImgDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import signupImgMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import checkmark from "../../assets/images/icon-list.svg";

function Signup() {
  return (
    <div className='flex max-w-2xl flex-col-reverse bg-white p-0 sm:rounded-3xl lg:h-auto lg:max-w-4xl lg:flex-row lg:p-6'>
      <div className='min-h-1/2 flex max-w-md flex-col gap-6 px-8 py-8 lg:my-10 lg:max-w-md'>
        <h1 className='text-5xl font-bold'>Stay updated!</h1>
        <div>Join 60,000+ product managers receiving monthly updates on:</div>
        <div>
          <div className='flex space-x-4 py-1'>
            <img src={checkmark} alt='checkmark' />
            <p>Product discovery and building what matters</p>
          </div>
          <div className='flex space-x-4 py-1'>
            <img src={checkmark} alt='checkmark' />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className='flex space-x-4 py-1'>
            <img src={checkmark} alt='checkmark' />
            <p>And much more!</p>
          </div>
        </div>
        <div className='mt-4 flex flex-col space-y-2'>
          <label className='font-bold'>Email address</label>
          <input
            type='email'
            placeholder={"email@company.com"}
            className='rounded-lg border-2 border-solid border-grey p-4'
          ></input>
        </div>
        <button className='rounded-lg bg-dark-slate-grey p-4 text-center text-white hover:bg-tomato'>
          Subscribe to monthly newsletter
        </button>
      </div>
      <div className='flex justify-center rounded-none lg:pl-6'>
        <picture>
          <source media='(min-width:1024px)' srcSet={signupImgDesktop} />
          <img src={signupImgMobile} alt='Signup Graphic' />
        </picture>
      </div>
    </div>
  );
}

export default Signup;
