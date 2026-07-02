import { Outlet, Navigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const PrivateLayout = () => {

    const { store, dispatch } = useGlobalReducer();
    const [sideBarOpen, setSideBarOpen] = useState(true);
    
    if (!store.user) {
        return <Navigate to="/login" replace />;
    }

    const toggleSidebar = () => {
        setSideBarOpen(prev => !prev);
    };

    return (
        <ScrollToTop>
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <Sidebar isOpen={sideBarOpen}/>
                </div>
                <div className="w-100">
                    <Topbar toggleSidebar={toggleSidebar}/>
                    <Outlet /> 
                </div>
            </div>
        </ScrollToTop>
    )
}