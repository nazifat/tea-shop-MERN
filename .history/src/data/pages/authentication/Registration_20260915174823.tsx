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
                        <div className="card-body">
                            <fieldset className="fieldset">
                                {/* <label className="label">Email</label> */}
                                <input type="email" className="input" placeholder="Email" />
                                {/* <label className="label">Password</label> */}
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Already have an account?</a></div>
                                <Link to='/sign-in' className='text-blue-400'>Signin</Link>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;