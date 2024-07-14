import { useFormik } from 'formik'
import React from 'react'

const Home = () => {
   
  const formik =useFormik({
    initialValues:{
      username:''
    },
    onSubmit: (val)=>{
      console.log(val);
    }
  });

  return (
    <div className='p-4'>
      <h1>HEllo THIs is time pass</h1>
      <form onSubmit={formik.handleSubmit}>
        <input 
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        className='border-2 border-black' type='text' placeholder='Your Name'></input>
      </form>
      

    </div>
  )
}

export default Home