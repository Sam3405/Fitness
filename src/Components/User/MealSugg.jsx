import React, { useContext, useEffect, useState } from 'react'
import MeanPlanone from '../MealPlan/MeanPlanone';
import { AuthContext } from '../../AuthContext';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MealSugg() {
  const { cal } = useContext(AuthContext);
  const data = (cal);
  console.log(data);
  alert(`Your goal calories is ${data}`)
  // useEffect(() => {

  // }, []);
  return (
    <>
      <div className='container mt-5 text-dark'>


        {/* <MeanPlanone/> */}
        {
          // data <= 1600 ? ( 
          //  <>  <Link to={"/meals/mealone"} className="nav-item text-decoration-none">
          //    <a className="nav-link active" href="#">1600 Cal-MealPlan</a>
          //   </Link>
          //   <Link to={"/meals/mealtwo"}   >
          //    <a className="nav-link text-decoration-none" href="#">1700 Cal-MealPlan</a>
          //   </Link>
          //     <br />
          //   </>
          // ) :
          data <= 1700 ? (

            <>
              <Link to={"/meals/mealone"} className="text-decoration-none">
                <a className="text-reset text-decoration-none bg-light border me-5" href="#">1600 Cal-MealPlan</a>
              </Link>

              <Link to={"/meals/mealtwo"}   className="text-decoration-none">
                <a className="text-reset text-decoration-none bg-light border" href="#">1700 Cal-MealPlan</a>
              </Link>
              <br />
            </>
          ) : data <= 1800 ? (
            <>
              <Link to={"/meals/mealtwo"}   className="nav-item text-decoration-none">
                <a className="nav-link text-decoration-none me-5 bg-light border" href="#">1700 Cal-MealPlan</a>
              </Link>

              <Link to={"/meals/mealthree"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>1800 Cal-MealPlan</a>
                <br />
              </Link>
            </>
          ) : data <= 1900 ? (
            <>
              <Link to={"/meals/mealthree"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>1800 Cal-MealPlan</a>

              </Link>

              <Link to={"/meals/mealfour"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>1900 Cal-MealPlan</a>
                <br />
              </Link>
            </>
          ) : data <= 2000 ? (
            <>
              <Link to={"/meals/mealfour"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>1900 Cal-MealPlan</a>

              </Link>
              <Link to={"/meals/mealfive"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2000 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2100 ? (
            <>
              <Link to={"/meals/mealfive"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>2000 Cal-MealPlan</a>

              </Link>
              <Link to={"/meals/mealsix"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2100 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2200 ? (
            <> <Link to={"/meals/mealsix"} className="text-decoration-none">
              <a className='text-reset text-decoration-none bg-light border me-5'>2100 Cal-MealPlan</a>
            </Link>
              <Link to={"/meals/mealseven"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2200 Cal-MealPlan</a>
                <br />
              </Link>
            </>
          ) : data <= 2300 ? (
            <>
              <Link to={"/meals/mealseven"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>2200 Cal-MealPlan</a>

              </Link>
              <Link to={"/meals/mealeight"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2300 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2400 ? (
            <>
              <Link to={"/meals/mealeight"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'><span>2300 Cal-MealPlan</span></a>
              </Link>
              <Link to={"/meals/mealnine"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'><span>2400 Cal-MealPlan</span></a>
                <br />
              </Link></>
          ) : data <= 2500 ? (
            <>
              <Link to={"/meals/mealnine"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>2400 Cal-MealPlan</a>
              </Link>
              <Link to={"/meals/mealten"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2500 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2600 ? (
            <>
              <Link to={"/meals/mealten"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>2500 Cal-MealPlan</a>
              </Link>
              <Link to={"/meals/mealeleven"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2600 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2700 ? (
            <>
              <Link to={"/meals/mealeleven"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border me-5'>2600 Cal-MealPlan</a>
              </Link>
              <Link to={"/meals/mealtwelve"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2700 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : data <= 2800 ? (
            <>
              <Link to={"/meals/mealtwelve"} className="text-decoration-none">
                <a className='text-reset text-decoration-none m3-5 bg-light border'>2700 Cal-MealPlan</a>
              </Link>
              <Link to={"/meals/mealthirteen"} className="text-decoration-none">
                <a className='text-reset text-decoration-none bg-light border'>2800 Cal-MealPlan</a>
                <br />
              </Link></>
          ) : (
            <>
              <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>404 - Page Not Found</h1>
                <p>Oops! You must set your goal first.</p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
              </div>
            </>
          )}

        <Outlet />
      </div>
      <section className="container rounded text-center my-5 bg-warning">
        <h2 className="fw-bold pt-4">How Many Calories Should I Consume?</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="p-3">
              <div className="p-4 d-inline-block text-dark">
                <h4 className="mt-3">Step 1: Calculate Your Maintenance Calories</h4>
              </div>
              <p className="text-muted">Use the formula below to estimate your maintenance calories:
                - If you go to the gym 4-6 times per week:
                22 x Your Body Weight (kg) x 1.4
                - If you go to the gym 0-3 times per week:
                22 x Your Body Weight (kg) x 1.2.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <div className="p-4 d-inline-block text-dark">
                <h4 className="mt-3">Step 2: Decide Your Goal</h4>


              </div>
              <p className="text-muted">- Fat Loss: Subtract 400 from your maintenance calories.
                - Muscle Gain: Add 200 to your maintenance calories.
                - Body Recomp: Subtract 250 from your maintenance calories.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <div className="p-4 d-inline-block text-dark">
                <h4 className="mt-3">Step 3: Follow the Meal Plan</h4>
              </div>
              <p className="text-muted">Stick to a meal plan with the calculated calories. Suitable meal plans can be found in the available
                folders..</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3">
              <div className="p-4 d-inline-block text-dark">
              <h4 className="mt-3">Step 4: Adjust for Progress</h4>
                

              </div>
              <p className="text-muted">- For Fat Loss: Every 2-3 weeks, reduce 100 calories.
                - For Muscle Gain: Every 2-3 weeks, add 100 calories.
                - For Body Recomp: Every 2-3 weeks, reduce 50 calories..</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} export default MealSugg;
