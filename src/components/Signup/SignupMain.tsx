import { useState } from 'react';
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSuccess';

const SignupMain = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState<string>("");

  const subscriptionHandler = (email:string) => {
    setSubscribedEmail(email);
    setIsSubscribed(true);
  }

  const dismissHandler = () => {
    setSubscribedEmail("");
    setIsSubscribed(false);
  }

  return (
    <div>
      {!isSubscribed && <SignupForm onSubscribe={subscriptionHandler}/>}
      {isSubscribed && <SignupSuccess email={subscribedEmail} onDismiss={dismissHandler}/>}
    </div>
  );
};

export default SignupMain;