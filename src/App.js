import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

// Layout Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Public Pages
import Frontpage from './Components/Frontpage';
import Register from './Components/Register';
import Login from './Components/Login';

// User Pages
import UserHome from './Components/User/UserHome';
import Profile from './Components/User/Profile';
import Workouttutorials from './Components/User/Workouttutorials';
import MealSugg from './Components/User/MealSugg';

// Meal Plan Pages
import MealPlanone from './Components/MealPlan/MeanPlanone';
import MealPlantwo from './Components/MealPlan/MealPlantwo';
import MealPlanthree from './Components/MealPlan/MealPlanthree';
import MealPlanfour from './Components/MealPlan/MealPlanfour';
import MealPlanfive from './Components/MealPlan/MealPlanfive';
import MealPlansix from './Components/MealPlan/MealPlansix';
import MealPlanseven from './Components/MealPlan/MealPlanseven';
import MealPlaneight from './Components/MealPlan/MealPlaneight';
import MealPlannine from './Components/MealPlan/MealPlannine';
import MealPlanten from './Components/MealPlan/MealPlanten';
import MealPlaneleven from './Components/MealPlan/MealPlaneleven';
import MealPlantweleve from './Components/MealPlan/MealPlantweleve';
import MealPlanthirteen from './Components/MealPlan/MealPlanthirteen';

// Workout Pages
import Abs from './Components/Workout Tutorials/Abs';
import Routine from './Components/Workout Tutorials/Routine';
import Arms from './Components/Workout Tutorials/Arms';
import Back from './Components/Workout Tutorials/Back';
import Chest from './Components/Workout Tutorials/Chest';
import Shoulder from './Components/Workout Tutorials/Shoulder';
import Legs from './Components/Workout Tutorials/Legs';
import Triceps from './Components/Workout Tutorials/Triceps';
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";
import Dashboard from "./Components/Admin/Dashboard";
import Manageusers from "./Components/Admin/Manageusers";
import Userfeedback from "./Components/Admin/Userfeedback";

function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={user ? <Navigate to="/user" /> : <Frontpage />} />
          <Route path="/register" element={user ? <Navigate to="/user" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/user" /> : <Login />} />
          <Route path="/home" element={user ? <Navigate to="/user" /> : <Home />} />

          {/* Static Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Protected User Routes */}
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <UserHome />
              </ProtectedRoute>
            }
          />
          {/* <Route 
            path="/membership" 
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Membership />
              </ProtectedRoute>
            } 
          /> */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Meal Plan Routes */}
          <Route
            path="/meals"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <MealSugg />
              </ProtectedRoute>
            }
          />
          <Route path="/meals/mealone" element={<MealPlanone />} />
          <Route path="/meals/mealtwo" element={<MealPlantwo />} />
          <Route path="/meals/mealthree" element={<MealPlanthree />} />
          <Route path="/mealsplanfour" element={<MealPlanfour />} />
          <Route path="/meals/mealfive" element={<MealPlanfive />} />
          <Route path="/meals/mealsix" element={<MealPlansix />} />
          <Route path="/meals/mealseven" element={<MealPlanseven />} />
          <Route path="/meals/mealeight" element={<MealPlaneight />} />
          <Route path="/meals/mealnine" element={<MealPlannine />} />
          <Route path="/meals/mealten" element={<MealPlanten />} />
          <Route path="/meals/mealeleven" element={<MealPlaneleven />} />
          <Route path="/meals/mealtwelve" element={<MealPlantweleve />} />
          <Route path="/meals/mealthirteen" element={<MealPlanthirteen />} />

          {/* Workout Routes */}
          <Route
            path="/workout"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Workouttutorials />
              </ProtectedRoute>
            }
          >
            <Route path="/workout/routine" element={<Routine />} />
            <Route path="/workout/abs" element={<Abs />} />
            <Route path="/workout/arms" element={<Arms />} />
            <Route path="/workout/back" element={<Back />} />
            <Route path="/workout/chest" element={<Chest />} />
            <Route path="/workout/triceps" element={<Triceps />} />
            <Route path="/workout/shoulder" element={<Shoulder />} />
            <Route path="/workout/legs" element={<Legs />} />
          </Route>


          <Route path="/adminlogin" element={<Admin />}>
            <Route path="/adminlogin/dash" element={<Dashboard />} />
            <Route path="/adminlogin/manage" element={<Manageusers />} />
            <Route path="/adminlogin/feedback" element={<Userfeedback />} />
          </Route>

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
