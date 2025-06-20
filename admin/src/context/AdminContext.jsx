import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');
    const [services, setServices] = useState([]);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getAllServices = async () => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/admin/service-list`,  // ✅ FIXED: Correct route
                {},
                { headers: { aToken } }
            );

            if (data.success) {
                setServices(data.services);
                console.log(data.services);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message); // ✅ Proper error message
        }
    };

    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/admin/change-availability`,
                { docId },
                { headers: { aToken } }
            );

            if (data.success) {
                toast.success(data.message);
                getAllServices(); // Refresh after change
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const value = {
        aToken,
        setAToken,
        backendUrl,
        services,
        getAllServices,
        changeAvailability,
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
