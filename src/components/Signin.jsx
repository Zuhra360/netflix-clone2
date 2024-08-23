

import { useFormik } from 'formik';

export const Signin = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <div className="signin">
        <div className=" text-black  ">
        <form className="flex  flex-col gap-5 justify-center items-center" onSubmit={formik.handleSubmit}>
          <label className='text-white' htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            required
          />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    
          <label className='text-white' htmlFor="lastName">Last Name</label>
          <input
          
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            required
          />
          
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
    
          <label  className='text-white' htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
    
          <button className='text-white bg-red-700 mx-2.5' type="submit">Submit</button>
        </form>
        </div>
        </div>
      );
};
   