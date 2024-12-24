import { useFormik } from "formik";
import { signUpSchema } from "../utils/schema";
import { EyeClosed, EyeIcon} from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowpassword] = useState((prev)=> !prev);
  const formik = useFormik({
     initialValues: {
       email: '',
       password: '',
       confirmPassword: '',
     },
     validationSchema: signUpSchema,
   });
  return (
    <main className="mb-20 mx-auto w-full">
    <div className="grid grid-cols-2 dark:bg-dark-main bg-white shadow-2xl mx-auto mt-20 py-5 px-0 max-w-3xl rounded-md w-4/6">
     <figure className="overflow-hidden rounded-xl ml-3 w-full">
      <img className="" src="/Images/leonhard.jpg" alt="" />
    </figure> 
    <form 
    className="flex flex-col dark:text-white text-black my-auto max-w-80 m-10"
    onSubmit={formik.handleSubmit}>
      <h1 className="text-5xl font-bold mb-3">Sign up now</h1>
      <label htmlFor="email" className="text-xl font-semibold">Email</label>
      <input type="email"
       name="email" 
       className=" dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef]"
       id="email" 
       placeholder="example@gmail.com" 
       value={formik.values.email} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       />
       {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
       <br />
      <label htmlFor="password" className="text-xl font-semibold">Password</label>
      <div className="flex items-center">
      <input 
      type={showPassword ? 'text' : 'password'} 
      name="password" 
      className="border dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] flex-1"
      id="password" 
      placeholder="Password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <button className="-ml-7"
      onClick={()=> {setShowpassword(!showPassword)}}>
        {
          showPassword ? <EyeClosed /> : <EyeIcon />
        }
      </button>
      </div>
      {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
      <br />
      <label htmlFor="confirmPassword" className="text-xl font-semibold">Confirm Password</label>
      <input 
      type='password'
      name="confirmPassword" 
      id="confirmPassword"
      className="border dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef]"
      value={formik.values.confirmPassword}
      placeholder="Confirm Password" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500">{formik.errors.confirmPassword}</div> : null}
      <br />
      <label htmlFor="agreement">
      <input type="checkbox" name="" id="agreement" className=""/>
      I accept the <a className=" text-blue-300" href="/onboarding">Terms & Conditions</a>
      </label>
      <input 
      type="submit" 
      value="Sign up"
      className="bg-btn text-white px-5 rounded-md py-2 my-3" />
      
      <p>Have an account? <a className="text-blue-400" href="/login">Sign in now!</a></p>
    </form>
    </div>
    </main>
  )
}

export default SignUp
