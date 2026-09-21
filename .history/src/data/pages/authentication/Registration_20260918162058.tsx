import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';


interface IFormInput {
    name: string
    email: string
    password: string
    repassword: string

}

const Registration = () => {
    const {register,
        handleSubmit,
        formState: { errors },
} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> =(data)=>
        console.log(data)
        return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    type="email" className="input" placeholder="Email" />
                                {errors.email && <p>{errors.email.message}</p>}
                                <input
                                    {...register("name")}
                                    type="text" className="input" placeholder="Name" />
                                <input
                                    {...register("password")}
                                    type="password" className="input" placeholder="Password" />
                                <input
                                    {...register("repassword")}
                                    type="password" className="input" placeholder="Re-Password" />
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