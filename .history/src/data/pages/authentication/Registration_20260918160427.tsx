import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <fieldset className="fieldset">
                                <input type="email" className="input" placeholder="Email" />
                                <input type="text" className="input" placeholder="Name" />
                                <input type="password" className="input" placeholder="Password" />
                                <input type="password" className="input" placeholder="Re-Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                                 <div className='flex gap-5'>
                                    <div className="">Already have an account? </div>
                                    <Link to='/sign-in' className='link link-hover text-blue-400'>Login</Link>
                                </div>
                            </fieldset>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;