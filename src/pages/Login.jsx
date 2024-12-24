import { useFormik } from "formik";
import { loginSchema } from "../utils/schema";

const Login = () => {
    const formik = useFormik({
      initialValues : {
        email : '',
        password: '',
      }, 
      validationSchema: loginSchema
    })
  return (
    <main className="mx-auto w-full mb-20">
    <div className="grid grid-cols-2 dark:bg-dark-main bg-white shadow-2xl mx-auto max-w-3xl mt-20 py-5 px-0 rounded-md w-fit">
    <form 
    className="flex flex-col dark:text-white
    text-black max-w-80 m-10 my-auto"
    onSubmit={formik.handleSubmit}>
      <h1 className="text-5xl font-bold mb-3">Welcome!</h1>
      <label htmlFor="email" className="text-xl font-semibold">Email</label>
      <input type="email"
       name="email" 
       className="border dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef]"
       id="email" 
       placeholder="example@gmail.com" 
       value={formik.values.email} 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} 
       />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
       <br />
      <label htmlFor="password" className="text-xl font-semibold">Password</label>
      <input 
      type="password" 
      name="password" 
      className="border dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef]"
      id="password" 
      placeholder="Password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
      <a className="text-blue-400 w-fit" href="/reset-password">Forgot Password?</a><br />
      <input 
      type="submit" 
      value="Sign in"
      className="bg-btn text-white mb-3 px-5 rounded-md py-2 hover:shadow-2xl shadow-blue-200 " />
      
      <p>You dont have an account? <a className="text-blue-400" href="/signup">Sign up now!</a></p>
    </form>
    <figure className="overflow-hidden rounded-xl h-45 w-45 mr-3">
      <img className="" src="/Images/leonhard.jpg" alt="" />
    </figure>
    </div>
    </main>
  )
}

export default Login
