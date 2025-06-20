import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Services = () => {

  const { speciality } = useParams();
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]); 
  const [showFilter, setShowFilter] = useState(false);

  const { services } = useContext(AppContext); 

  const applyFilter = () => {
    if (Array.isArray(services)) { 
      if (speciality) {
        setFilterDoc(services.filter(doc => doc.speciality === speciality));
      } else {
        setFilterDoc(services);
      }
    } else {
      setFilterDoc([]); 
    }
  };

  useEffect(() => {
    applyFilter()
  }, [services, speciality])

  return (
    <div className='text-black px-4'>
      <p>Connect with trusted service providers, guided by Ayodhya’s spirit of service.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Filter toggle for mobile */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-orange-400 text-white' : ''}`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>

        {/* Filter options */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {/* Updated category names and logic pandit */}
          <p
            onClick={() => speciality === 'Pandit' ? navigate('/services') : navigate('/services/Pandit')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pandit' ? 'bg-indigo-100 text-black' : ''}`}
            >
            Pandit
          </p>
            {/* Updated category names and logic TouristGuide */}
          <p
            onClick={() => speciality === 'TouristGuide' ? navigate('/services') : navigate('/services/TouristGuide')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'TouristGuide' ? 'bg-indigo-100 text-black' : ''}`}
            >
            Tourist Guide
          </p>
            {/* Updated category names and logic Photographer */}
          <p
            onClick={() => speciality === 'Photographer' ? navigate('/services') : navigate('/services/Photographer')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Photographer' ? 'bg-indigo-100 text-black' : ''}`}
            >
            Photographer
          </p>
            {/* Updated category names and logic LocalRooms */}
          <p
            onClick={() => speciality === 'LocalRooms' ? navigate('/services') : navigate('/services/LocalRooms')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'LocalRooms' ? 'bg-indigo-100 text-black' : ''}`}
          >
          Hotels/Rooms
          </p>
          {/* <p
            onClick={() => speciality === 'transport' ? navigate('/services') : navigate('/services/transport')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'transport' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Transport
          </p>
          <p
            onClick={() => speciality === 'Food&Drink' ? navigate('/services') : navigate('/services/food')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'food' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Food & Drink
          </p>
          <p
            onClick={() => speciality === 'AyodhyaTour' ? navigate('/services') : navigate('/services/AyodhyaTour')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'AyodhyaTour' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Ayodhya Tour
          </p> */}
        </div>

        {/* Services Display */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {!Array.isArray(filterDoc) || filterDoc.length === 0 ? (
            <p className='text-center text-gray-500 col-span-full'>No services found.</p>
          ) : (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='first-line:border border-blue-200 rounded-xl overflow-hidden cursor-pointer ${speciality=== "" ? "bg-indigo-100 text-black" : ""}hover:translate-y-[-10px] transition-all duration-500'
                key={index}
              >
                <img className='bg-blue-50 w-full h-48 object-cover' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
