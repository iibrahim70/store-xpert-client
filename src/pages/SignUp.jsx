import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, confirmPassword } = data;
  };

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 min-h-dvh">
      <div className="bg-primary text-white overflow-hidden p-5">
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
      <div className="flex flex-col text-center items-center justify-center md:p-10 pb-10">
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
              <img
                className="w-12 p-2"
                src="/src/assets/icons/user.png"
                alt=""
              />
              <input
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Name is required
              </p>
            )}
          </div>

          {/* email */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img
                className="w-12 p-3"
                src="/src/assets/icons/email.png"
                alt=""
              />
              <input
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Email is required
              </p>
            )}
          </div>
          {/* password */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img
                className="w-12 p-3"
                src="/src/assets/icons/password.png"
                alt=""
              />
              <input
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Password is required
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img
                className="w-12 p-3"
                src="/src/assets/icons/password.png"
                alt=""
              />
              <input
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
          </div>

          <Button size="lg" className="rounded-full mx-auto">
            <input className="uppercase" type="submit" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
