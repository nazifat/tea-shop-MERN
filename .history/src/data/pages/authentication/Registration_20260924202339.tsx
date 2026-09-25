import React, { useContext } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';


interface IFormInput {
    name: string
    email: string
    password: string
    rePassword: string


}
const { createUser } = useContext(AuthContext)
const Registration = () => {
    const { register,
        handleSubmit,
        reset,
        formState,
        formState: { isSubmitSuccessful, errors },
    } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)

    }



    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                name: "",
                email: "",
                password: "",
                rePassword: ""
            })
        }
    }, [formState, reset])

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
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                            message: "Password must be at least 8 characters with one upptercase one lowercase and one numeric"
                                        }
                                    })}
                                    type="password" className="input" placeholder="Password" />

                                {errors.password && <p>{errors.password.message}</p>}
                                <input
                                    {...register("rePassword", {
                                        required: "Please confirm your password",
                                        validate: (value, formValues) =>
                                            value === formValues.password || "Passwords do not match"
                                    })}
                                    type="password" className="input" placeholder="Re-Password" />
                                {errors.rePassword && (<p>{errors.rePassword.message}</p>)}
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