import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import userImg from "/src/assets/icons/user.png";
import phoneImg from "/src/assets/icons/phone.png";
import emailImg from "/src/assets/icons/email.png";
import passwordImg from "/src/assets/icons/password.png";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import BtnSpinner from "@/components/shared/BtnSpinner";

const SignUp = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    try {
      fetch("https://store-xpert-server.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            reset();
            toast.success(data.message);
            navigate("/login");
          } else {
            toast.error(data.message);
          }
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className="flex max-lg:flex-col lg:min-h-dvh select-none">
      <div className="bg-primary lg:w-2/5 w-full text-white overflow-hidden p-5">
        <h4>StoreXpert</h4>
        <div className="h-full pb-8 text-center flex flex-col items-center justify-center">
          <h1 className="my-8">Welcome Back!</h1>
          <p className="text-secondary mb-9">
            To keep connected with us please login with your personal Info
          </p>
          <Link to="/sign-in">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-white border-white">
              SIGN IN
            </Button>
          </Link>
        </div>
      </div>

      {/* sign up form */}
      <div className="lg:w-3/5 w-full flex flex-col text-center items-center justify-center md:p-10 pb-10">
        <h1 className="text-primary max-md:mt-8">Create Account</h1>
        <p className="text-gray-500 mt-8">
          Please provide your verified information.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col items-start gap-8 w-full max-w-sm">
          {/* name */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img className="w-12 p-2" src={userImg} alt="" />
              <input
                type="text"
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Name"
                {...register("fullName", { required: true })}
              />
            </label>
            {errors.fullName && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Name is required
              </p>
            )}
          </div>
          {/* phone */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img className="w-11 p-2" src={phoneImg} alt="" />
              <input
                type="text"
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required", // Comma added here
                  minLength: {
                    value: 11,
                    message: "Phone number must be 11 characters long", // Adjusted message
                  },
                })}
              />
            </label>
            {errors.phoneNumber && (
              <p className="text-red-400 text-xs font-semibold text-left">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img className="w-12 p-3" src={emailImg} alt="" />
              <input
                type="email"
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
            </label>
            {errors.email && (
              <p className="text-red-400 text-xs font-semibold text-left">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="w-full">
            <label className="flex relative items-center bg-gray-200 w-full">
              <img className="w-12 p-3" src={passwordImg} alt="" />
              <input
                type={passVisible ? "text" : "password"}
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least 8 characters, one special character, and one number",
                  },
                })}
              />

              {passVisible ? (
                <IoMdEye
                  onClick={() => setPassVisible(!passVisible)}
                  className="md:text-2xl text-xl text-slate-500 absolute top-1/2 right-4 -translate-y-1/2"
                />
              ) : (
                <IoMdEyeOff
                  onClick={() => setPassVisible(!passVisible)}
                  className="md:text-2xl text-xl text-slate-500 absolute top-1/2 right-4 -translate-y-1/2"
                />
              )}
            </label>
            {errors.password && (
              <p className="text-red-400 text-xs font-semibold text-left">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          {/* <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img className="w-12 p-3" src={passwordImg} alt="" />
              <input
                type="password"
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Confirm password is required
              </p>
            )}
          </div> */}

          <Button
            size="lg"
            type="submit"
            disabled={isLoading}
            className="rounded-full mx-auto uppercase">
            {isLoading ? <BtnSpinner /> : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
