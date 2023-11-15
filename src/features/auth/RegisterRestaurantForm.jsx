import { useState } from "react";
import { registerRestaurantSchema } from "../../validation/auth-validator";
import RegisterInput from "./RegisterInput";
import MyButton from "../../components/MyButton";
import InputErrorMessage from "./InputErrorMessage";
import DropdownCategory from "./DropdownCategory";
import DropdownNation from "./DropdownNation";
import DropdownLocation from "./DropdownLocation";
import DropdownDistrict from "./DropdownDistrict";
import Logo from "../../components/Logo";
import useAuth from "../../Hooks/use-auth";
import useRes from "../../Hooks/use-res";

export default function RegisterRestaurantForm() {
  const { registerRestaurant } = useAuth();
  const { input, setInput } = useRes();
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({});

  const validateRegisterRestaurant = (input) => {
    const { error } = registerRestaurantSchema.validate(input, {
      abortEarly: false,
    });

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

  const handleChangePrice = (e) => {
    setInput({ ...input, [e.target.name]: +e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validationError = validateRegisterRestaurant(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    registerRestaurant(input);
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="px-8 pt-14 pb-6 flex flex-col justify-evenly border shadow-lg w-[36rem] h-[50rem] bg-white relative z-10"
      >
        <div className="absolute top-[-4rem] left-[40%]">
          <Logo />
        </div>
        <h1 className="text-center text-3xl font-semibold">
          SIGN UP FOR BUSINESS
        </h1>

        <div className="flex justify-between gap-2">
          <div className="w-[50%]">
            <RegisterInput
              value={input.ownerFirstName}
              onChange={handleChangeInput}
              name="ownerFirstName"
              label="OWNER FIRST NAME"
              hasError={error.ownerFirstName}
            />
            {error.ownerFirstName && (
              <InputErrorMessage message={error.ownerFirstName} />
            )}
          </div>
          <div className="w-[50%]">
            <RegisterInput
              value={input.ownerLastName}
              onChange={handleChangeInput}
              name="ownerLastName"
              label="OWNER LAST NAME"
              hasError={error.ownerLastName}
            />
            {error.ownerLastName && (
              <InputErrorMessage message={error.ownerLastName} />
            )}
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <div className="w-[50%]">
            <RegisterInput
              value={input.restaurantName}
              onChange={handleChangeInput}
              name="restaurantName"
              label="RESTAURANT NAME"
              hasError={error.restaurantName}
            />
            {error.restaurantName && (
              <InputErrorMessage message={error.restaurantName} />
            )}
          </div>
          <div className="w-[50%]">
            <RegisterInput
              type="number"
              value={input.price}
              onChange={handleChangePrice}
              name="price"
              label="STARTING PRICE"
              hasError={error.price}
            />
            {error.price && <InputErrorMessage message={error.price} />}
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <div className="w-[50%]">
            <RegisterInput
              value={input.email}
              onChange={handleChangeInput}
              name="email"
              label="EMAIL ADDRESS"
              hasError={error.email}
            />
            {error.email && <InputErrorMessage message={error.email} />}
          </div>

          <div className="w-[50%]">
            <RegisterInput
              value={input.phone}
              onChange={handleChangeInput}
              name="phone"
              label="PHONE NUMBER"
              hasError={error.phone}
            />
            {error.phone && <InputErrorMessage message={error.phone} />}
          </div>
        </div>

        <div>
          <DropdownCategory input={input} setInput={setInput} />
          {error.categoryIndex && (
            <InputErrorMessage message={error.categoryIndex} />
          )}
        </div>
        <div>
          <DropdownNation input={input} setInput={setInput} />
          {error.nationIndex && (
            <InputErrorMessage message={error.nationIndex} />
          )}
        </div>
        <div>
          <DropdownDistrict input={input} setInput={setInput} />
          {error.districtIndex && (
            <InputErrorMessage message={error.districtIndex} />
          )}
        </div>

        <div>
          <DropdownLocation input={input} setInput={setInput} error={error} />
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
            <MyButton type={`submit`} style={`py-2 bg-primary`}>
              SUBMIT
            </MyButton>
          </>
        ) : (
          <>
            <div className="inline-block text-center bg-gray-600 px-4 py-2 text-white shadow-sm ">
              SUBMIT
            </div>
          </>
        )}
      </form>
    </>
  );
}
