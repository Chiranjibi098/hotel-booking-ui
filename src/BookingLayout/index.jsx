import React from "react";
import { Outlet } from "react-router-dom";
function BookingLayout(){
    return(
        <>
            <div>
                    <Outlet />
            </div>
        </>
    );
}

export default BookingLayout;