import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
export default function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration Failed");
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
        <legend className="fieldset-legend">Registration</legend>

        <label htmlFor="name" className="label">
          Enter Your Name
        </label>
        <input
          required
          name="name"
          type="text"
          className="input w-full"
          placeholder="Joy"
        />
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
        <button
          onClick={() => setIsSubmitting(!isSubmitting)}
          type="submit"
          className="btn bg-main mt-4 text-white"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Registration"
          )}
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="link link-hover link-info">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
