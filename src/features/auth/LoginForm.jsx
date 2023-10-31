import { useState } from "react";
import LoginInput from "./LoginInput";
import Joi from "joi";
import useAuth from "../../Hooks/use-auth";
import InputErrorMessage from "./InputErrorMessage";
import LoginButton from "./LoginButton";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Logo";

const loginSchema = Joi.object({
  emailOrPhone: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState({});
  //   const { login } = useAuth()

  const handleSumbitForm = (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    login(input).catch((err) => {
      console.log(err);
      if (err.response.data) {
        setError({
          emailOrPhone: err.response.data.message,
          password: err.response.data.message,
        });
      }
    });
  };

  return (
    <div>
      <form
        className="px-8 pt-8 flex flex-col justify-center gap-8 border shadow-lg w-[36rem] h-[34rem] bg-white relative z-10"
        onSubmit={handleSumbitForm}
      >
        <Logo />
        <h1 className="text-center text-3xl font-semibold">SIGN IN</h1>
        <div>
          <LoginInput
            label="EMAIL OR PHONE NUMBER"
            value={input.emailOrPhone}
            onChange={(e) =>
              setInput({ ...input, emailOrPhone: e.target.value })
            }
            name="emailOrPhone"
            hasError={error.emailOrPhone}
          />
          {error.emailOrPhone && (
            <InputErrorMessage message={error.emailOrPhone} />
          )}
        </div>

        <div>
          <LoginInput
            type="password"
            label="PASSWORD"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            name="password"
            hasError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>

        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="text-sm">Remember Me</span>
        </div>
        <LoginButton />
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm">OR USE</span>
          <FcGoogle className="w-7 h-7 cursor-pointer" />
        </div>
      </form>
    </div>
  );
}
