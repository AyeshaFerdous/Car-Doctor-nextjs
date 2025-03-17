import Image from 'next/image';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center items-center gap-20'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} width={460} height={502} alt='login img'/>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;