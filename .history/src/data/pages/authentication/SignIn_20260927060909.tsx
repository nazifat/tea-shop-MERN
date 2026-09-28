import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const [loginError, setLoginError] = useState<string | null>(null);

    const { user } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if (loginError) setLoginError(null);
        const password = form.password.value;
        if (loginError) setLoginError(null);
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('success', user);
                navigate('/shop');
                
            })
            .catch((error) => {
                console.log('Login error', error.message);
                setLoginError("Invalid user or password");
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <input type="email" name='email' className="input" placeholder="Email" required />

                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password' 
                                        className="input w-full pr-10   px-3 py-2" 
                                        placeholder="Password" 
                                        required />
                                    <button type='button'
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-100'
                                    > 
                                        {showPassword? <FaEyeSlash/> : <FaEye/>}
                                    </button>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {/* login error message */}
                                {(loginError) ? <p className='text-red-400'>{loginError}</p> : null
                                }

                                <button className="btn btn-neutral mt-4">Login</button>
                                <div className='flex gap-5 mt-2'>
                                    <div className="">New here? </div>
                                    <Link to='/register' className='link link-hover text-blue-400'>Register Now</Link>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;