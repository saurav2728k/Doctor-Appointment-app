import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

  const {dToken, profileData, setProfileData, getProfileData, backedUrl} = useContext(DoctorContext)
  const {currency} = useContext(AppContext)

  // state variable so that doctor can edit their profile from doctor panel
  const [isEdit, setIsEdit] = useState(false)

  // logic to save the edited doctor profile data to DB
  const updateProfile = async () => {

    try {

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const {data} = await axios.post(backedUrl + '/api/doctor/update-profile', updateData, {headers:{dToken}})

      if(data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()

      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      
      toast.error(error.message)
      console.log(error)

    }
  }

  useEffect(()=> {
    if (dToken) {
      getProfileData()
    }
  },[dToken])


  return profileData && (

    <div>

      <div className='flex flex-col gap-4 m-5'>


        <div>
          <img className='bg-[#5f6FFF]/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
        </div>

        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

          {/* Doc info : name, degree, experience */}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
          </div>

          {/* Doc about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
              {profileData.about}
            </p>
          </div>

          <p className='text-gray-600 font-medium mt-4'>
            Appointment fee: <span className='text-gray-800'>{currency} {isEdit ? <input type="number" className='bg-gray-100 px-1 py-1 rounded' onChange={(e)=>setProfileData(prev => ({...prev, fees: e.target.value}))} value={profileData.fees} /> : profileData.fees}</span>
          </p>

          <div className='flex gap-2 py-2'>
            <p>Address:</p>
            <p className='text-sm'>
              {isEdit ? <input type="text" className='bg-gray-100 px-1 py-1 rounded' onChange={(e)=> setProfileData(prev => ({...prev,address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1} /> : profileData.address.line1}
              <br />
              {isEdit ? <input type="text" className='bg-gray-100 px-1 py-1 rounded' onChange={(e)=> setProfileData(prev => ({...prev,address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2} /> : profileData.address.line2}
            </p>
          </div>

          <div className='flex gap-1 pt-2'>
            <input onChange={()=> isEdit && setProfileData(prev => ({...prev, available: !prev.available}))} checked={profileData.available} type="checkbox" />
            <label htmlFor="">Available</label>
          </div>

          {
            isEdit
            ? <button onClick={updateProfile} className='px-4 py-1 border border-[#5f6FFF] text-sm rounded-full mt-5 hover:bg-[#5f6FFF] hover:text-white cursor-pointer transition-all'>Save</button>
            : <button onClick={()=>setIsEdit(true)} className='px-4 py-1 border border-[#5f6FFF] text-sm rounded-full mt-5 hover:bg-[#5f6FFF] hover:text-white cursor-pointer transition-all'>Edit</button>
          }



        </div>
      </div>
      
    </div>
  )
}

export default DoctorProfile


// import React, { useContext, useEffect, useState } from "react";
// import { DoctorContext } from "../../context/DoctorContext";
// import { AppContext } from "../../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const DoctorProfile = () => {
//   const { dToken, profileData, setProfileData, getProfileData, backedUrl } =
//     useContext(DoctorContext);
//   const { currency } = useContext(AppContext);

//   // State for edit mode
//   const [isEdit, setIsEdit] = useState(false);

//   // State for new image upload
//   const [image, setImage] = useState(null);

//   // Function to update profile
//   const updateProfile = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("address", JSON.stringify(profileData.address));
//       formData.append("fees", profileData.fees);
//       formData.append("available", profileData.available);
//       formData.append("about", profileData.about);
      
//       if (image) {
//         formData.append("image", image);
//       }

//       // API call to update profile
//       const { data } = await axios.post(
//         backedUrl + "/api/doctor/update-profile",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             dToken,
//           },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setIsEdit(false);
//         setImage(null);
//         getProfileData(); // Refresh data after update
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Update failed:", error);
//       toast.error("Failed to update profile.");
//     }
//   };

//   useEffect(() => {
//     if (dToken) {
//       getProfileData();
//     }
//   }, [dToken]);

//   return (
//     profileData && (
//       <div>
//         <div className="flex flex-col gap-4 m-5">
//           {/* Doctor Image */}
//           <div>
//             {isEdit ? (
//               <label htmlFor="image">
//                 <div className="relative cursor-pointer">
//                   <img
//                     className="bg-[#5f6FFF]/80 w-full sm:max-w-64 rounded-lg opacity-75"
//                     src={image ? URL.createObjectURL(image) : profileData.image}
//                     alt=""
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="bg-gray-700 text-white px-2 py-1 text-xs rounded">
//                       Change Image
//                     </span>
//                   </div>
//                 </div>
//                 <input
//                   type="file"
//                   id="image"
//                   hidden
//                   onChange={(e) => setImage(e.target.files[0])}
//                 />
//               </label>
//             ) : (
//               <img
//                 className="bg-[#5f6FFF]/80 w-full sm:max-w-64 rounded-lg"
//                 src={profileData.image}
//                 alt=""
//               />
//             )}
//           </div>

//           {/* Profile Details */}
//           <div
//             className={`flex-1 border ${
//               isEdit ? "border-gray-300" : "border-stone-100"
//             } rounded-lg p-8 py-7 bg-white`}
//           >
//             {/* Doctor Name, Degree, Experience */}
//             {isEdit ? (
//               <input
//                 type="text"
//                 className="text-3xl font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded"
//                 value={profileData.name}
//                 onChange={(e) =>
//                   setProfileData((prev) => ({ ...prev, name: e.target.value }))
//                 }
//               />
//             ) : (
//               <p className="text-3xl font-medium text-gray-700">
//                 {profileData.name}
//               </p>
//             )}
//             <div className="flex items-center gap-2 mt-1 text-gray-600">
//               <p>
//                 {profileData.degree} - {profileData.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {profileData.experience}
//               </button>
//             </div>

//             {/* Doctor About Section */}
//             <div className="mt-3">
//               <p className="text-sm font-medium text-neutral-800">About:</p>
//               {isEdit ? (
//                 <textarea
//                   className="w-full bg-gray-100 text-sm p-2 mt-1 rounded"
//                   value={profileData.about}
//                   onChange={(e) =>
//                     setProfileData((prev) => ({
//                       ...prev,
//                       about: e.target.value,
//                     }))
//                   }
//                 />
//               ) : (
//                 <p className="text-sm text-gray-600 max-w-[700px] mt-1">
//                   {profileData.about}
//                 </p>
//               )}
//             </div>

//             {/* Appointment Fee */}
//             <p className="text-gray-600 font-medium mt-4">
//               Appointment fee:{" "}
//               <span className="text-gray-800">
//                 {currency}{" "}
//                 {isEdit ? (
//                   <input
//                     type="number"
//                     className="bg-gray-100 px-2 py-1 rounded"
//                     onChange={(e) =>
//                       setProfileData((prev) => ({
//                         ...prev,
//                         fees: e.target.value,
//                       }))
//                     }
//                     value={profileData.fees}
//                   />
//                 ) : (
//                   profileData.fees
//                 )}
//               </span>
//             </p>

//             {/* Address */}
//             <div className="flex gap-2 py-2">
//               <p>Address:</p>
//               <p className="text-sm">
//                 {isEdit ? (
//                   <>
//                     <input
//                       type="text"
//                       className="bg-gray-100 px-2 py-1 rounded mb-1"
//                       onChange={(e) =>
//                         setProfileData((prev) => ({
//                           ...prev,
//                           address: { ...prev.address, line1: e.target.value },
//                         }))
//                       }
//                       value={profileData.address.line1}
//                     />
//                     <br />
//                     <input
//                       type="text"
//                       className="bg-gray-100 px-2 py-1 rounded"
//                       onChange={(e) =>
//                         setProfileData((prev) => ({
//                           ...prev,
//                           address: { ...prev.address, line2: e.target.value },
//                         }))
//                       }
//                       value={profileData.address.line2}
//                     />
//                   </>
//                 ) : (
//                   <>
//                     {profileData.address.line1}
//                     <br />
//                     {profileData.address.line2}
//                   </>
//                 )}
//               </p>
//             </div>

//             {/* Availability Checkbox */}
//             <div className="flex gap-1 pt-2">
//               <input
//                 type="checkbox"
//                 checked={profileData.available}
//                 onChange={() =>
//                   isEdit &&
//                   setProfileData((prev) => ({
//                     ...prev,
//                     available: !prev.available,
//                   }))
//                 }
//               />
//               <label htmlFor="">Available</label>
//             </div>

//             {/* Buttons */}
//             {isEdit ? (
//               <button
//                 onClick={updateProfile}
//                 className="px-4 py-1 border border-[#5f6FFF] text-sm rounded-full mt-5 hover:bg-[#5f6FFF] hover:text-white cursor-pointer transition-all"
//               >
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsEdit(true)}
//                 className="px-4 py-1 border border-[#5f6FFF] text-sm rounded-full mt-5 hover:bg-[#5f6FFF] hover:text-white cursor-pointer transition-all"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorProfile;
