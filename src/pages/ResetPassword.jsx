import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
export default function ResetPassword() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-279px)]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
        <legend className="fieldset-legend">Reset Password</legend>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <button className="btn bg-main mt-4 text-white">Reset Password</button>
        <Link to="/login">
          <button className="btn btn-info w-full">
            Back To Login <FaArrowAltCircleRight />
          </button>
        </Link>
      </fieldset>
    </div>
  );
}
