import { useFormik} from "formik"
import { onBoardingSchema } from "../utils/schema"

const Onboarding = () => {

  console.log(formik.errors.fname)

  const formik = useFormik({
    initialValues : {
      fname : '',
      mname : '',
      lname : '',
      number : '',
    },
    validationSchema: onBoardingSchema,
  })

  return (
    <main className="mx-auto w-full">
      <form className="dark:text-white mx-auto mt-20 max-w-4xl px-8 py-5 rounded-lg dark:bg-gray-50/10 bg-zinc-500/10 bg- border border-white/20" 
      onSubmit={formik.handleSubmit}
      action="">
          <div className="grid grid-cols-3 gap-5 justify-center">
            <div className="items-start">
          <label className="text-sm font-semibold " htmlFor="fname">First Name:</label><br />
          <input
          className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
          type="text" 
          name="fname" 
          id="fname"
          value={formik.values.fname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Israel" />
          {formik.touched.fname && formik.errors.fname ? <div className="text-red-500">{formik.errors.fname}</div> : null }
            </div>
            <div>
          <label className="text-sm font-semibold" htmlFor="mname">Middle name</label><br />
          <input 
          className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
          type="text" 
          name="mname" 
          id="mname"
          value={formik.values.mname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Ovie" />
            </div>
            <div>
          <label className="text-sm font-semibold" htmlFor="lname">Last Name:</label><br />
          <input 
          className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
          type="text" 
          name="lname" 
          id="lname"
          value={formik.values.lname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Yaya" />
            </div>
            <div className="col-span-2">
              <label className="text-sm font-semibold" htmlFor="number">Phone number</label><br />
              <input className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
              type="tel" 
              name="number" 
              id="number" 
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="+2347041400350" />
            </div>
          <div>
          <label className="text-sm font-semibold" htmlFor="age">D.O.B</label><br />
          <input 
          className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
          type="date" 
          name="age" 
          id="age"
           />
          </div>
          <div>
          <label className="text-sm font-semibold " htmlFor="country">Country</label><br />
          <select className="dark:bg-slate-800 px-5 w-full dark:border-slate-600 p-3 rounded-lg bg bg-[#ededef]" name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Male">Female</option>
          </select>
          </div>
          <div>
          <label className="text-sm font-semibold " htmlFor="state">State</label><br />
          <select className="dark:bg-slate-800 px-5 w-full dark:border-slate-600 p-3 rounded-lg bg bg-[#ededef]" name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Male">Female</option>
          </select>
          </div>
          <div>
          <label 
          className="text-sm font-semibold " 
          htmlFor="city">City</label><br />
          <select className="dark:bg-slate-800 w-full px-5 dark:border-slate-600 p-3 rounded-lg bg bg-[#ededef]" name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Male">Female</option>
          </select>
          </div>
          <div>
          <label 
          className="text-sm font-semibold " 
          htmlFor="gender">Gender</label><br />
          <select className="dark:bg-slate-800 w-full px-5 dark:border-slate-600 p-3 rounded-lg bg bg-[#ededef]" name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Male">Female</option>
          </select>
          </div>
          <div className="col-span-2">
            <label
            className="text-sm font-semibold " 
            htmlFor="address">Address</label><br />
            <input className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
            placeholder="Put your address for here!"
            type="text" />
          </div>
          <div className="col-span-3 grid grid-rows-1 grid-cols-2 gap-5">
          <div className="col-span-1">
            <label 
            className="text-sm font-semibold "
            htmlFor="proof">Proof of address</label><br />
            <input
            className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full" 
            type="file" 
            accept="image/*" />
          </div>
          <div className="col-span-1">
            <label 
            className="text-sm font-semibold "
            htmlFor="Id">Id:</label><br />
            <input 
            className="dark:bg-slate-800 dark:border-slate-600 p-3 rounded-lg bg-[#ededef] w-full"
            type="file" 
            name="Id" 
            id="Id" 
            accept="image/*"/>
          </div>
          </div>
          </div>
          <div className="col-span-2">
          <input 
          className="bg-btn w-full text-white px-5 rounded-md py-2 my-3" 
          type="submit" 
          value="Submit" />
          </div>
          <div className="">
          <input type="reset" value="Reset form" />
          </div>
         </form>
    </main>
  )
}

export default Onboarding

