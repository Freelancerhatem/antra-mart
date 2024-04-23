import { useContext, useState } from "react";
import { AntraMartContext } from "../../Hooks/ContextProvider/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios/useAxios";
import { MdEmail, MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
const Registration = () => {
  const { handleCreateUser, handleGoogleLogin } = useContext(AntraMartContext);
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const handleSignUpForm = async (data) => {
    const name = data.name;
    const image = { image: data.image[0] }; //important for notes
    const email = data.email;
    const password = data.password;

    // // image bb image upload
    const res = await axios.post(image_upload_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const imageUrl = res.data.data.display_url;
    handleCreateUser(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageUrl,
      }).then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Registration Success!",
          icon: "success",
        });
        navigate("/");
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
          <button
            onClick={handleNavigate}
            className=""
          >
            <RxCross2 />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(handleSignUpForm)}
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
                type="text"
                id=""
                {...register("name", { required: true })}
                placeholder="Full Name"
              />
              <MdPerson className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></MdPerson>
            </div>
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
            <div className="mb-4 relative">
              <input
                {...register("phone", { required: true })}
                className="w-full   pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                type="number"
                placeholder="Phone Number"
              />
              <IoCallSharp className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></IoCallSharp>
            </div>
            <div className="relative mb-4">
              <input
                className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                type="file"
                {...register("image", { required: true })}
                placeholder="Image"
              />
              <FaImages className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></FaImages>
            </div>
          </div>

          <div className="mb-4">
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
              <Link to={"/login"}>
                <span className="text-blue-500 underline">sign in</span>
              </Link>
            </span>
          </div>
        </form>
       </div>
    </div>
  );
};

export default Registration;
