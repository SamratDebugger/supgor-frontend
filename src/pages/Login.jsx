import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-279px)]">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4"
      >
        <legend className="fieldset-legend">Login</legend>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          required
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <label className="input w-full" htmlFor="">
          <input
            required
            name="password"
            type={isVisible ? "text" : "password"}
            placeholder="Password"
          />

          <button onClick={() => setIsVisible(!isVisible)} type="button">
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </label>
        <div className="flex justify-between items-center gap-5">
          <p className="flex items-center gap-3">
            <label htmlFor="remember">
              <input type="checkbox" name="remember" />
            </label>
            Remember Me
          </p>
          <Link to="/reset-password" className="link link-hover link-info">
            Lost Your Password?
          </Link>
        </div>
        <button
          onClick={() => setIsSubmitting(!isSubmitting)}
          className="btn bg-main mt-4 text-white"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner "></span>
          ) : (
            "Login"
          )}
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/registration" className="link link-hover link-info">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
}
