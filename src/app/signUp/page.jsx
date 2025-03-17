import React from 'react';
import SignupForm from './Components/SignupForm';
import Image from 'next/image';

const SignUp = () => {
    return (
        <section className="w-11/12 mx-auto">
        <div className="flex items-center justify-center gap-20">
          <div className="mt-20">
            <Image
              src={"/assets/images/login/login.svg"}
              width={460}
              height={502}
              alt="Register Image"
            />
          </div>
  
          {/* right side */}
          <SignupForm />
        </div>
      </section>
    );
};

export default SignUp;