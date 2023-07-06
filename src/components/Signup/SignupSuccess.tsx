import checkmark from "../../assets/images/icon-success.svg";

interface SignupSuccessProps {
  email: string
  onDismiss: () => void
}

const SignupSuccess = ({email, onDismiss}: SignupSuccessProps) => {

  return (
    <div className='flex max-w-xl flex-col-reverse bg-white sm:rounded-3xl'>
      <div className='flex flex-col max-w-md gap-8 px-12 py-12'>
        <div>
          <img src={checkmark} alt='checkmark' />
        </div>
        <h1 className='text-5xl font-bold'>Thanks for subscribing!</h1>
        <div>A confirmation email has been sent to <a href={`mailto:${email}`} className="font-bold">{email}</a>. Please open it and click the button inside to confirm your subscription.</div>
        <button onClick={onDismiss} className='rounded-lg bg-dark-slate-grey p-4 text-center text-white hover:bg-tomato'>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SignupSuccess;