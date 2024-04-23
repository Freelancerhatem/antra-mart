import { useContext } from "react";
import { AntraMartContext } from "../../Hooks/ContextProvider/ContextProvider";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEmail} from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { handleGoogleLogin, handleLoginUser, loginUser } =
    useContext(AntraMartContext);

  const loginPopUp = () => {
    handleGoogleLogin();
  };
  const loginWithPass = (data) => {
    
    const email = data.email;
    const pass = data.password;

    handleLoginUser(email, pass)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Login Success!",
          icon: "success",
        });
        reset()
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Login Failed!",
          icon: "error",
        });
      });
    
  };
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="relative md:w-[30%] border py-5 rounded-md shadow-2xl">
        <div className="absolute top-2 right-3 text-2xl">
          <button onClick={handleNavigate} className="">
            <RxCross2 />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(loginWithPass)}
          className="w-[70%] mx-auto"
        >
          <div>
            <h1 className="text-center text-xl font-bold pt-5">Hello!</h1>
            <p className="text-center mb-2">Create Your Account</p>
          </div>

          <div className="mb-4">
            <div className="relative mb-4">
              <input
                className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              <MdEmail className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></MdEmail>
            </div>
            <div className="relative ">
              <input
                {...register("password", { required: true })}
                className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                type={`${eye ? "password" : "text"}`}
                placeholder="Password must be 6 characters "
              />
              <RiLockPasswordFill className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></RiLockPasswordFill>
              <div
                onClick={() => setEye(!eye)}
                className={`absolute top-3 right-2 `}
              >
                {eye ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>}
              </div>
            </div>
          </div>

          <div className="">
            <button
              className="w-full bg-[#fe5d1d] text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-[#fe5d1dc0] transition duration-300"
              type="submit"
            >
              Sign up
            </button>
            <div className="divider">or</div>
            <div className="flex flex-col  items-center justify-center text-lg border rounded-md">
              <p className="font-bold">Sign up with</p> <FcGoogle />
            </div>
            <span>
              Have an account{" "}
              <Link to={"/registration"}>
                <span className="text-blue-500 underline">sign up</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
