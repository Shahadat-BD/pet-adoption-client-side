import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import Select from 'react-select'
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const initialValues = {
    petName : '',
    petAge : '',
    petLocation : '',
    petOwnerInfo : '',
    petDescription: ''
}

const AddPet = () => {
  const [category, setCategory] = useState()
  const {user} = useContext(AuthContext)
// today date and current time
    const currentDate =  new Date().toLocaleDateString()
    const currentTime =  new Date().toLocaleTimeString();

  const {values,errors,handleBlur,handleChange,handleSubmit,resetForm} = useFormik({
        initialValues : initialValues,
        onSubmit : (values) => {
           const addItem = {
              petName : values.petName,
              petAge : values.petAge,
              petLocation : values.petLocation,
              category : category.value,
              adopted : false,
              email : user.email,
              date : currentDate,
              time : currentTime,
              petOwnerInfo : values.petOwnerInfo,
              petDescription : values.petDescription
           }
           console.log('this is add item', addItem);
           resetForm()
        }
    })
    const options = [
        { value: 'cat', label: 'Cat' },
        { value: 'dog', label: 'Dog' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'goat', label: 'Goat' }
      ] 
    return (
        <div className='lg:mx-24 mx-5  h-[100%]'>
              <h1 className='text-4xl font-bold my-5'>ADD PET</h1>
              <form onSubmit={handleSubmit}>
                  <div className='flex lg:flex-row flex-col lg:gap-5'>
                     <div className='w-full'>
                        <label>
                            <p className='label-text font-semibold'>Pet Name</p>
                        </label>
                        <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                        autoComplete='off'
                        required 
                        type="text" 
                        name='petName'
                        placeholder='pet name' 
                        value={values.petName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="" />
                     </div>
                     <div className='w-full'>
                        <label>
                            <p className='label-text font-semibold'>Pet age</p>
                        </label>
                        <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md'
                        autoComplete='off'
                        required 
                        type="number" 
                        name='petAge'
                        placeholder='pet age'
                        value={values.petAge}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="" />
                     </div>
                  </div>

                   <div className='flex lg:flex-row flex-col lg:gap-5'>
                   <div className='w-full'>
                     <label>
                        <p className='label-text font-semibold'>Pet location</p>
                     </label>
                     <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                      autoComplete='off'
                      required
                      type='text'
                      name="petLocation"
                      value={values.petLocation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='pet location'/>
                   </div>
                   <div className='w-full'>
                     <label>
                        <p className='label-text font-semibold'>Pet owner info</p>
                     </label>
                     <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                      autoComplete='off'
                      required
                      type='text'
                      name="petOwnerInfo"
                      value={values.petOwnerInfo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='pet owner info'/>
                   </div>
                   </div>

                     <div>
                        <label className='label-text font-semibold'>category Name</label>
                        <Select
                             styles={{
                                control: (provided) => ({
                                  ...provided,
                                  boxShadow: "none",
                                  border: "none",
                                  padding : '6px',
                                  marginTop : "12px",
                                  marginBottom : '10px',
                                  backgroundColor: "#F5F2EB",
                                  width:"100%",
                                })
                
                              }}
                          options={options}
                          onChange={category => setCategory(category)}
                          required
                          />
                     </div>

                     <div>
                     <label>
                        <p className='label-text font-semibold'>Pet description</p>
                     </label>
                     <textarea className='form-control w-full bg-[#F5F2EB] border-none outline-none h-32 pl-2 my-3 rounded-md' 
                      autoComplete='off'
                      required
                      type='text'
                      name="petDescription"
                      value={values.petDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='pet description'/>
                   </div>

                   <div>
                    <button className='px-10 py-3 bg-[#ef233c] text-white rounded-md mt-3'  type="submit">
                        add pet
                    </button>
                   </div>
              </form>
        </div>
    );
};

export default AddPet;