// ServicesList.jsx
import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const ServicesList = () => {
  const { services, aToken, getAllServices, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllServices();
    }
  }, [aToken]);

  // Optional loading fallback
  if (!Array.isArray(services)) {
    return <div className="m-5">Loading services...</div>;
  }

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Services</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {services.map((item, index) => (
          <div
            className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
            key={index}
          >
            <img
              className="bg-indigo-50 group-hover:bg-orange-400 transition-all duration-500 w-full h-32 object-cover"
              src={item.image}
              alt={item.name || 'Service Image'}
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
              <p className="text-zinc-600 text-sm">{item.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;



// // ServicesList.jsx
// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'

// const ServicesList = () => {

//   const {services ,aToken ,getAllServices, changeAvailability} = useContext(AdminContext)

//   useEffect(()=>{
//     if (aToken){
//       getAllServices()
//     } 

//   },[aToken])

//   return (
//     <div className='m-5 max-h-[90vh] overflow-y-scroll'>
//       <h1 className='text-lg font-medium'>All Services</h1>
//       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6 '>
//         {
//           services.map((item,index)=>(
//               <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
//                   <img className='bg-indigo-50 group-hover:bg-orange-400 translate-all duration-500' src={item.image} alt="" />
//                   <div className='p-4'>
//                     <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
//                     <p className='text-zinc-600 text-sm'>{item.speciality}</p>
//                     <div className='mt-2 flex items-center gap-1 text-sm'>
//                       <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
//                       <p>Available</p>
//                     </div>
//                   </div>
//               </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default ServicesList
