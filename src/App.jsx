import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "./LandingLayout";
import Landing from "./Pages/Landing";
import BookingLayout from "./BookingLayout";
import Booking from "./Pages/Booking";
import AuthLayout from "./AuthLayout";
import PageNotFound from "./Error/PageNotFound";
import LoginSignup from "./Pages/LoginSignup";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Landing Screen */}
                <Route element={<LandingLayout />}>
                    <Route path="/home" element={<Landing />} />
                </Route>

                {/* Auth Screen */}
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<LoginSignup />} />
                </Route>

                {/* Booking Screen */}
                <Route element={<BookingLayout />}>
                    <Route path="/booking" element={<Booking />} />
                </Route>

                {/* Error routes */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;