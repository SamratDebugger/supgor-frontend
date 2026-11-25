import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
export default function Registration() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration Failed");
      error(error.message);
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
          name="name"
          type="text"
          className="input w-full"
          placeholder="Joy"
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
        />
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
        <button type="submit" className="btn bg-main mt-4 text-white">
          Registration
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link link-hover link-info">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
