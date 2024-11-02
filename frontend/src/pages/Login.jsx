import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserData } from "../context/User";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loginUser, btnLoading} = UserData();

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();
        loginUser(email,password, navigate);
    }
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-8">
                Login to Sprinkle<span className="text-violet-600">.music</span>
            </h2>

            <form className="mt-8" onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email or username</label>
                    <input type="email" placeholder="Email or Username" value={email} onChange={e => setEmail(e.target.value)} className="auth-input" required/>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="auth-input" required/>
                </div>

                <button disabled={btnLoading} className="auth-btn">{btnLoading? "Please Wait...": "Login"}</button>
            </form>

            <div className="text-center mt-6">
                <Link to="/register" className="text-sm text-gray-400 hover:text-gray-300">
                Don&apos;t have account?
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login