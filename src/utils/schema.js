import * as Yup from "yup";
const Email = 'israelyaya0@gmail.com'
const Password = '080israeL@'
export const loginSchema = Yup.object({
    email : Yup.string().email('Invalid email address').required('Required').oneOf([Email], 'Email not found'),
    password : Yup.string().required('Required').oneOf([Password], 'Incorrect password')      
})

export const signUpSchema = Yup.object({
    email : Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/,
        'Password must contain an uppercase letter, a lowercase letter, a number, a symbol, and be at least 8 characters long'
      ).required('Required'),
    confirmPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
});

export const onBoardingSchema = Yup.object({
    fname : Yup.string().required('This field is required').matches(
        /^(?=.*[A-z])(?=.*[a-z])$/,
        'Invalid name, name must not contain a number',
    ),
    lname : Yup.string().required('This field is required').matches(
        /^(?=.*[A-z])(?=.*[a,z])$/,
        'Invalid name, name must not contain a number',
    ),
    mname : Yup.string().required('This field is required').matches(
        /^(?=.*[A-z])(?=.*[a,z])$/,
        'Invalid name, name must not contain a number',
    ),
    number : Yup.number('Should be a number').required('Field is required').matches(
        /^(?=.*\d).{11,}$/,
        'Number can only contain digits and cannot be more than 11 digits'
    )
});
