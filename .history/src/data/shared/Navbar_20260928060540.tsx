import { Link } from "react-router";
import './Navbar.css'
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const navlink = <>

        <li className=""> <Link to="/" > Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>

    </>

    const signOutCustom = () => {
        logOut()
            .then(() => {
            })
            .catch(((error: unknown) => {
                console.log("logout error", error);
            }))
    }
    return (

        <div>


            <div className="navbar bg-base-100 shadow-sm custom-menu">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Tea Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="aura aura-gold">
                        <div className=" bg-base-100">
                            {
                                user ? <>
                                    <span className="text-sm font-medium text-gray-700">
                                        {user?.displayName}
                                    </span>

                                    <Link to='' className="flex items-center gap-1 rounded-full px-2 py-1 text-sm text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
                                        onClick={signOutCustom}><CiLogout></CiLogout></Link>
                                </>
                                    : <> <Link to='/sign-in' className="btn"> Login</Link>

                                    </>
                            }
                        </div>
                    </div>
                    {/* <div className="aura aura-gold">
                        <div className=" bg-base-100">
                            <Link to='/register' className="btn" >Register</Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;