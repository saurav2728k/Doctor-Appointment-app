// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const[showMenu, setShowMenu] = useState(false)
//   const [token, setToken] = useState(true);

//   return (
//     <div className="flex items-center justify-between text-sm pt-4 mb-5 border-b border-gray-300 px-6">
//       {/* Logo */}
//       <img onClick={()=> navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

//       {/* Navigation Links */}
//       <ul className="hidden md:flex items-center gap-6 font-medium">
//         {[
//           { path: "/", label: "HOME" },
//           { path: "/doctors", label: "ALL DOCTORS" },
//           { path: "/about", label: "ABOUT" },
//           { path: "/contact", label: "CONTACT" },
//         ].map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               `relative flex flex-col items-center py-2 ${
//                 isActive ? "text-primary font-semibold" : "text-gray-700"
//               }`
//             }
//           >
//             <span className="relative pb-2">{item.label}</span>
//             {/* Lowered underline */}
//             {window.location.pathname === item.path && (
//               <span className="absolute bottom-[-6px] left-1/2 w-3/5 h-0.5 bg-primary transform -translate-x-1/2"></span>
//             )}
//           </NavLink>
//         ))}
//       </ul>

//       {/* Profile / Login Button */}
//       <div className="flex items-center gap-4">
//         {token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
//             <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-md">
//                 <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
//                   My Profile
//                 </p>
//                 <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
//                   My Appointments
//                 </p>
//                 <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-[#5f6FFF] text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-[#4a5de5] cursor-pointer"
//           >
//             Create Account
//           </button>
//         )}

        // <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        // {/* Mobile Menu */}
        // <div>
        //   <div>
        //     <img src={assets.logo} alt="" />
        //     <img onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
        //   </div>

        //   <ul>

        //   </ul>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';

// const Navbar = () => {

//     const navigate = useNavigate();

//     const {token,setToken,userData} = useContext(AppContext)

//     const [showMenu, setShowMenu] = useState(false);
//     // const [token, setToken] = useState(true);

//     // logout functionality
//     const logout = () => {
//         setToken(false)
//         localStorage.removeItem('token')
//     }

//   return (
//     <div className='flex items-center justify-between text-sm pt-4 mb-5 border-b border-b-gray-400'>
//         <img onClick={()=> navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
//         <ul className='hidden md:flex items-start gap-5 font-medium'>
//             <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold border-b border-primary' : ''}>
//                 <li className='py-1'>HOME</li>
//             </NavLink>
//             <NavLink to='/doctors' className={({ isActive }) => isActive ? 'font-bold border-b border-primary' : ''}>
//                 <li className='py-1'>ALL DOCTORS</li>
//             </NavLink>
//             <NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold border-b border-primary' : ''}>
//                 <li className='py-1'>ABOUT</li>
//             </NavLink>
//             <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-bold border-b border-primary' : ''}>
//                 <li className='py-1'>CONTACT</li>    
//             </NavLink>
//         </ul>

//         <div className='flex items-center gap-4'>
//             {
//                 token && userData
//                 ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//                     <img className='w-8 rounded-full' src={userData.image} alt="" />
//                     <img className='w-2.5' src={assets.dropdown_icon} alt="" />

//                     <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                         <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                             <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                             <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointmens</p>
//                             <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
//                         </div>
//                     </div>
//                 </div>
//                 : <button onClick={()=> navigate('/login')} className='bg-[#5f6FFF] text-white px-6 py-2 rounded-full font-light hidden md:block'>Create account</button>
//             }

//             <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
//             {/* Mobile Menu */}
//             <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//               <div className='flex items-center justify-between px-5 py-6'>
//                 <img className='w-36' src={assets.logo} alt="" />
//                 <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
//               </div>
//               <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//                 <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
//                 <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
//                 <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
//                 <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
//               </ul>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken, userData } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);

    // Logout functionality
    const logout = () => {
        setToken(false);
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
    };

    return (
        <div className='flex items-center justify-between text-sm pt-4 pb-5 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logoDoc} alt="" />
            
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/' 
                    className={({ isActive }) => 
                        `font-semibold inline-block w-fit relative ${
                          isActive ? "after:content-[''] after:absolute after:left-[12%] after:bottom-0 after:w-3/4 after:border-b-2 after:border-[#5f6FFF]" : ""
                        }`
                      }
                    >
                    <li className='py-0.5 '>HOME</li>
                </NavLink>
                <NavLink to='/doctors' 
                    className={({ isActive }) => 
                        `font-semibold inline-block w-fit relative ${
                          isActive ? "after:content-[''] after:absolute after:left-[12%] after:bottom-0 after:w-3/4 after:border-b-2 after:border-[#5f6FFF]" : ""
                        }`
                      }
                    >
                    <li className='py-0.5 '>ALL DOCTORS</li>
                </NavLink>
                <NavLink to='/about' 
                    className={({ isActive }) => 
                        `font-semibold inline-block w-fit relative ${
                          isActive ? "after:content-[''] after:absolute after:left-[12%] after:bottom-0 after:w-3/4 after:border-b-2 after:border-[#5f6FFF]" : ""
                        }`
                      }
                    >
                    <li className='py-0.5'>ABOUT</li>
                </NavLink>
                {/* <NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold border-b border-[#5f6FFF]' : ''}>
                    <li className='py-1'>ABOUT</li>
                </NavLink> */}
                <NavLink to='/contact' 
                    className={({ isActive }) => 
                        `font-semibold inline-block w-fit relative ${
                          isActive ? "after:content-[''] after:absolute after:left-[12%] after:bottom-0 after:w-3/4 after:border-b-2 after:border-[#5f6FFF]" : ""
                        }`
                      }
                    >
                    <li className='py-0.5'>CONTACT</li>
                </NavLink>

                {/* Move Admin Panel here, closer to navigation */}
                <p 
                    onClick={() => window.open("http://localhost:5174/", "_blank")} 
                    className='border text-xs px-2.5 py-1 font-semibold rounded-full border-gray-500 text-black-600 cursor-pointer hover:bg-gray-200'
                >
                    Admin Panel
                </p>
            </ul>

            <div className='flex items-center gap-4'>
                {token && userData ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={userData.image} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />

                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-[#5f6FFF] text-white px-6 py-2 rounded-full font-light hidden md:block'>
                        Create account
                    </button>
                )}

                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
                {/* Mobile Menu */}
            <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                </ul>
            </div>

            
            </div>
        </div>
    );
}

export default Navbar;




