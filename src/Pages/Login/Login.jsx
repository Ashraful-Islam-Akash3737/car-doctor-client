import { Link, useLocation } from "react-router-dom";
import LoginImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    // const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // const user = { email, password };
        // console.log("sign up user", user);

        //create user
        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log("result from login", loggedInUser);
            

            

        })
        .catch(error => {
            console.log("error from login", error);
        })
    } 
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="w-1/2">
                    
                    <img src={LoginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LOGIN" />
                        </div>
                        <p className="my-4 text-center">New to car-doctor?.....<Link className="text-orange-400 font-bold" to="/signup">Sign Up</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;