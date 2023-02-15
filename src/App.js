import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Hotel from "./pages/Hotel/Hotel";
import SingleHotel from "./pages/SingleHotel/SingleHotel";
import CarRental from "./pages/CarRental/CarRental";
import Attraction from "./pages/attraction/Attraction";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/hotels/:id" element={<SingleHotel />} />
      <Route path="/attractions" element={<Attraction />} />
      <Route path="/carrentals" element={<CarRental />} />
    </Routes>
  );
};
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
