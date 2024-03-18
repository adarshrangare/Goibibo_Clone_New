import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Flights,
  RootLayout,
  Hotels,
  Trains,
  Bus,
  MyTrip,
  Profile,
  FlightSearch,
  ProtectedRoute,
  HotelSearch,
  HotelPayment,
  HotelBookingPage,
  FlightInformation,
  FlightBooking,
} from "./pages";
import HotelInformation from "./pages/HotelInformation/HotelInformation";
import LoginSignup from "./pages/Login_Signup/LoginSignup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Flights />} />
      <Route path="/flight" element={<Flights />} />
      <Route path="/flight/:searchQuery" element={<FlightSearch />} />
      <Route
        path="/flight/:searchQuery/:flightData"
        element={
          <ProtectedRoute>
            <FlightInformation/>
          </ProtectedRoute>
        }
      />

<Route
        path="/flight/:searchQuery/:flightData/payment"
        element={
          <ProtectedRoute>
            <FlightBooking/>
          </ProtectedRoute>
        }
      />


      <Route path="/hotels" element={<Hotels />} />
      <Route
        path="/hotels/:hotelSearchQuery"
        element={
          <ProtectedRoute>
            <HotelSearch />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotels/:hotelSearchQuery/:hotelId"
        element={
          <ProtectedRoute>
            <HotelInformation />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotels/:hotelSearchQuery/:hotelId/:roomDetails"
        element={
          <ProtectedRoute>
            <HotelPayment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotels/:hotelSearchQuery/:hotelId/:roomDetails/payment"
        element={
          <ProtectedRoute>
            <HotelBookingPage />
          </ProtectedRoute>
        }
      />

      <Route path="/trains" element={<Trains />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/login-signup" element={<LoginSignup />} />
      <Route path="/mysupport/trips" element={<MyTrip />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Flights />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
