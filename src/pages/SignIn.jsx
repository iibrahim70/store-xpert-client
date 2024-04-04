import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailImg from "/src/assets/icons/email.png"
import passwordImg from "/src/assets/icons/password.png"

const SignIn = () => {
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
    <section className="flex max-lg:flex-col-reverse lg:min-h-dvh">
      {/* sign in form */}
      <div className="p-5 lg:w-3/5 w-full overflow-hidden">
        <h4 className="max-lg:hidden">
          Store<span className="text-primary">Xpert</span>
        </h4>
        <div className="h-full text-center flex flex-col items-center justify-center lg:p-10">
          <h1 className="text-primary max-lg:mt-5">Sign in to Account</h1>
          <p className="text-gray-500 mt-8">
            Please provide your verified information.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col items-start gap-8 w-full max-w-sm">
            {/* email */}
            <div className="w-full">
              <label className="flex items-center bg-gray-200 w-full">
                <img
                  className="w-12 p-3"
                  src={emailImg}
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
                  src={passwordImg}
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

            <Button size="lg" className="rounded-full mx-auto">
              <input className="uppercase" type="submit" />
            </Button>
          </form>
        </div>
      </div>

      {/* 2nd column */}
      <div className="bg-primary lg:w-2/5 w-full  text-white overflow-hidden p-5">
        <h4 className="lg:hidden">StoreXpert</h4>
        <div className="h-full pb-8 text-center flex flex-col items-center justify-center">
          <h1 className="my-8">Hello, Friend!</h1>
          <p className="text-secondary mb-9">
            Fill up personal information and start journey with us.
          </p>
          <Link to="/sign-up">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-white border-white">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
