import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginError, setLoginError] = useState(null);

    const { user } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('success', user);
            })
            .catch((error) => {
                console.log('Login error', error.message);
                setLoginError(error.message);
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
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {/* login error message */}
                                {(loginError)&& <p>{loginError}</p>
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