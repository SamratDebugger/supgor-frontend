import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-279px)]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
        <legend className="fieldset-legend">Login</legend>

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
        <button className="btn bg-main mt-4 text-white">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/registration" className="link link-hover link-info">
            Register Now
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
