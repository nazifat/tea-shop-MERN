import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                      
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <input type="email" className="input" placeholder="Email" />
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                               
                                <button className="btn btn-neutral mt-4">Login</button>
                                 <div className='flex gap-5 mt-2'>
                                    <div className="">New here? </div>
                                    <Link to='/register' className='link link-hover text-blue-400'>Register Now</Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;