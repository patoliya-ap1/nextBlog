"use client";
import { useFormik } from "formik";
import { loginSchema } from "@/utility/loginSchema";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { globalState } from "../app/store";
import { toast } from "react-toastify";
import Image from "next/image";

interface InitialValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const { toggleLogin,addUser } = globalState();

  const initialValues: InitialValues = { email: "", password: "" };

  const [loginError, setLoginError] = useState(null);

  const loginPost = async (loginInfo: InitialValues) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const data = await response.json();

    if (data.status === 200) {
      setLoginError(null);

      router.replace("/");
      addUser(data.user.email)
      toast.success("Login Successfully")
      localStorage.setItem("user", JSON.stringify(data.user.email));
      toggleLogin(true);
    } else {
      setLoginError(data.message);
    }
  };

  const handleLogin = (values: InitialValues) => {
    loginPost(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleLogin,
    validationSchema: loginSchema,
  });

return (
  <div className="min-h-[80vh] flex justify-center items-center px-4">
    <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-xl overflow-hidden">


      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-center items-center text-center">
       <div className="relative w-60 md:w-72 h-48 md:h-60 mb-6">
  <Image
    src="/images/about1.jpg"
    alt="Login Illustration"
    fill
    className="rounded-lg shadow-lg object-cover"
    priority
  />
</div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Welcome to Next Blog
        </h2>
      </div>


      <div className="md:w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-3">
            <div className="h-18 w-full">
              <TextField
                type="email"
                name="email"
                variant="outlined"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email && formik.touched.email ? true : false}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                fullWidth
              />
            </div>

            <div className="h-18">
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.errors.password && formik.touched.password ? true : false
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
            </div>

            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>

            <div className="mt-3 text-red-500 text-sm">
              <p>{loginError}</p>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
);

};
export default Login;
