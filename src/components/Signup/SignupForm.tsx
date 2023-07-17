import signupImgDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import signupImgMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import checkmark from "../../assets/images/icon-list.svg";
import { useRef, useState } from "react";

interface SignupFormProps {
  onSubscribe: (email: string) => void;
}

function SignupForm(props: SignupFormProps) {
  const emailInput = useRef<HTMLInputElement | null>(null);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailInput.current?.value
    const isValid = validateEmail(email);
    if (email && isValid) {
      props.onSubscribe(email);
    }
  };

  const validateEmail = (email:string | undefined) => {
    if(email && email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      setValidEmail(true);
      return true
    } else {
      setValidEmail(false);
      return false
    }
  }

  const emailBlurHandler = () => {
    validateEmail(emailInput.current?.value)
  }

  const emailChangeHandler = () => {
    setValidEmail(true);
  }

  return (
    <form onSubmit={submitHandler} noValidate>
      <div className='flex max-w-2xl flex-col-reverse bg-white p-0 sm:rounded-3xl lg:h-auto lg:max-w-4xl lg:flex-row lg:p-6'>
        <div className='min-h-1/2 flex max-w-md justify-center flex-col gap-6 px-8 py-8 lg:max-w-md'>
          <h1 className='text-5xl font-bold lg:text-6xl'>Stay updated!</h1>
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
            <div className="flex">
              <label className='font-bold'>
                <span>Email address</span>
              </label>
              <span className="flex-auto"/>
              <span className={` ${!validEmail ? "block text-red-500": "hidden"}`}>Valid email required</span>
            </div>
            <input
              type='email'
              ref={emailInput}
              placeholder={"email@company.com"}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              className={`rounded-lg border-2 border-solid border-grey/50 p-4 ${!validEmail ? "border-red-500 bg-red-100 text-red-500" : ""}`}
            ></input>
            <div>
            </div>
          </div>
          <button
            type='submit'
            className='rounded-lg bg-dark-slate-grey p-4 text-center text-white hover:bg-tomato'
          >
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
    </form>
  );
}

export default SignupForm;
