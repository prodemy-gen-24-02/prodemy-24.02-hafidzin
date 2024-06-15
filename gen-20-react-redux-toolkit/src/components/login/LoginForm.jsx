import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../store/reducers/authSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        // console.log(res.data.user);
        dispatch(setToken(res.data.accessToken));
        dispatch(setUser(res.data.user));
        navigate("/home");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-color-primary shadow-md w-2/3 mt-32 flex flex-col items-center gap-8">
        <h1 className="mt-24 text-center text-2xl font-semibold">Login Form</h1>
        <form
          action=""
          className="flex flex-col gap-8 w-1/3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-4">
            <label className="grid grid-col text-lg font-medium">Email</label>
            <input
              type="text"
              className="w-full shadow-md"
              {...register("email")}
            />
          </div>
          <div>
            <label className="grid grid-col text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full shadow-md"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="bg-color-accent mb-24 rounded-lg h-8 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
