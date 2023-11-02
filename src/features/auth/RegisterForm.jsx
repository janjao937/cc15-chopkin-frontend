import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { registerSchema } from "../../validation/auth-validator";
import InputErrorMessage from "./InputErrorMessage";
import MyButton from "../../components/MyButton";
import { BsEyeSlash } from "react-icons/bs";
import Logo from "../../components/Logo";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({});

  const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });

    if (error) {
      const result = error.details.reduce((acc, el) => {
        const { message, path } = el;
        acc[path[0]] = message;
        return acc;
      }, {});
      return result;
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});

    // register(input).catch((err) => console.log(err));
  };
  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="px-8 pt-14 pb-6 flex flex-col justify-evenly border shadow-lg w-[36rem] h-[40rem] bg-white relative z-10"
      >
        <div className="absolute top-[-4rem] left-[40%]">
          <Logo />
        </div>
        <h1 className="text-center text-3xl font-semibold">SIGN UP</h1>
        <div>
          <RegisterInput
            value={input.firstName}
            onChange={handleChangeInput}
            name="firstName"
            label="FIRST NAME"
            hasError={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            value={input.lastName}
            onChange={handleChangeInput}
            name="lastName"
            label="LAST NAME"
            hasError={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>

        <div>
          <RegisterInput
            value={input.email}
            onChange={handleChangeInput}
            name="email"
            label="EMAIL ADDRESS"
            hasError={error.email}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <div>
          <RegisterInput
            value={input.phone}
            onChange={handleChangeInput}
            name="phone"
            label="PHONE NUMBER"
            hasError={error.phone}
          />
          {error.phone && <InputErrorMessage message={error.phone} />}
        </div>
        <div>
          <RegisterInput
            value={input.password}
            onChange={handleChangeInput}
            name="password"
            label="PASSWORD"
            type="password"
            icon={<BsEyeSlash />}
            hasError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div>
          <RegisterInput
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            label="CONFIRM PASSWORD"
            type="password"
            icon={<BsEyeSlash />}
            hasError={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            value={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
          <small className="underline text-[10px]">
            I agree to the Terms of Service and Privacy Policy.
          </small>
        </div>
        {checkbox ? (
          <>
            <MyButton type={"submit"} style={`py-2 bg-primary`}>
              CREATE AN ACCOUNT
            </MyButton>
          </>
        ) : (
          <>
            <div className="inline-block text-center bg-gray-600 px-4 py-2 text-white shadow-sm ">
              CREATE AN ACCOUNT
            </div>
          </>
        )}
      </form>
    </>
  );
}
