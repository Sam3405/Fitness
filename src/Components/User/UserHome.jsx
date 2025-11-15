import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext';

function UserHome() {


    const { user, savecalories } = useContext(AuthContext); 

    const [formData, setFormData] = useState({
        age: user?.age || "",
        weight: user?.weight || "",
        height: user?.height || "",
        gender: user?.gender || ""
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [calories, setCalories] = useState(null);

    const faqs = [
        { question: "How often should I work out?", answer: "It depends on your fitness goals, but we recommend at least 3-5 sessions per week." },
        { question: "Are the workouts suitable for all age groups?", answer: "Yes, we have workout plans tailored for different age groups and fitness levels." },
        { question: "Do I need any equipment?", answer: "Most workouts can be done with body weight, but some may require dumbbells or resistance bands." },
        { question: "Can beginners join the program?", answer: "Absolutely! We have beginner-friendly workouts with guided instructions." },
        { question: "How do I track my progress?", answer: "You can log your workouts and track calories using our integrated fitness tracker." },
        { question: "Is there a meal plan included?", answer: "Yes! We provide nutrition guides and meal plans tailored to your fitness goals." }
    ];

    const [bmr, setBmr] = useState(0);
    const calculateCalories = () => {
        if (formData.height && formData.weight && formData.age) {
            let bmrvalue;

            if (formData.gender = "male") {
                bmrvalue = 66.47 + (13.75 * formData.weight) + (5.003 * formData.height) - (6.755 * formData.age);
                console.log("male");
                //bmrvalue = (10 * formData.weight) + (6.25 * formData.height) - (5 * formData.age) + 5;
            } else {

                bmrvalue = 655.1 + (9.563 * formData.weight) + (1.850 * formData.height) - (4.676 * formData.age);
                console.log("female");
                // bmrvalue = (10 * formData.weight) + (6.25 * formData.height) - (5 * formData.age) - 161;
            }
            setCalories(bmrvalue.toFixed(2));
            setBmr(bmrvalue.toFixed(2));
               
        }



    };



    const [value, setValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("Calorie-Nutrition");
    const [toUnit, setToUnit] = useState("Kilojoules-kJ");
    const [result, setResult] = useState(4.1868);

    const conversionRates = {
        "Calorie-Nutrition": 4.1868,
        "Kilojoules-kJ": 0.239,
    };

    const convertEnergy = () => {
        if (fromUnit === "Calorie-Nutrition" && toUnit === "Kilojoules-kJ") {
            setResult(value * conversionRates[fromUnit]);
        } else if (fromUnit === "Kilojoules-kJ" && toUnit === "Calorie-Nutrition") {
            setResult(value * conversionRates[toUnit]);
        } else {
            setResult(value);
        }
    };

    const [mealPlan, setMealPlan] = useState("");
    const [goal, setGoal] = useState("");
    const handleGoalSelection = (selectedGoal) => {
        let adjustedCalories;
        let mealPlanSuggestion;

        switch (selectedGoal) {
            case "maintain":
                adjustedCalories = bmr + 100 - 50;
                // console.log(cal);
                savecalories(adjustedCalories);
                break;
            case "lose":
                adjustedCalories = bmr - 250;
                // console.log(cal);
                savecalories(adjustedCalories);
                break;
            case "gain":
                adjustedCalories = Number(bmr) + 500;
                // console.log(cal);
                savecalories(adjustedCalories);

                break;
            default:
                adjustedCalories = bmr;
                mealPlanSuggestion = "No specific goal selected.";
                break;
        }


        // console.log(adjustedCalories);
        savecalories(adjustedCalories);
        setBmr(adjustedCalories.toFixed(2));
        setShowModal(false);
        // console.log(cal);
        alert("Check Out MealPlans for estimated Calories")

    };

    // 📌 Data for Calories Burned Table
    const caloriesData = [
        { activity: "Golf (using cart)", calories_125: 198, calories_155: 246, calories_185: 294 },
        { activity: "Walking (3.5 mph)", calories_125: 215, calories_155: 267, calories_185: 319 },
        { activity: "Kayaking", calories_125: 283, calories_155: 352, calories_185: 420 },
        { activity: "Softball/Baseball", calories_125: 289, calories_155: 359, calories_185: 428 },
        { activity: "Swimming (moderate)", calories_125: 397, calories_155: 492, calories_185: 587 },
        { activity: "Tennis (general)", calories_125: 397, calories_155: 492, calories_185: 587 },
        { activity: "Running (9 min/mile)", calories_125: 624, calories_155: 773, calories_185: 923 },
        { activity: "Bicycling (moderate)", calories_125: 454, calories_155: 562, calories_185: 671 },
        { activity: "Football (general)", calories_125: 399, calories_155: 494, calories_185: 588 },
        { activity: "Basketball (general)", calories_125: 340, calories_155: 422, calories_185: 503 },
        { activity: "Soccer (general)", calories_125: 397, calories_155: 492, calories_185: 587 }
    ];

    // 📌 Data for Energy from Food Components Table
    const foodEnergyData = [
        { food: "Fat", kj_per_gram: 37, kcal_per_gram: 8.8, kj_per_ounce: 1049, kcal_per_ounce: 249 },
        { food: "Proteins", kj_per_gram: 17, kcal_per_gram: 4.1, kj_per_ounce: 482, kcal_per_ounce: 116 },
        { food: "Carbohydrates", kj_per_gram: 17, kcal_per_gram: 4.1, kj_per_ounce: 482, kcal_per_ounce: 116 },
        { food: "Fiber", kj_per_gram: 8, kcal_per_gram: 1.9, kj_per_ounce: 227, kcal_per_ounce: 54 },
        { food: "Ethanol (alcohol)", kj_per_gram: 29, kcal_per_gram: 6.9, kj_per_ounce: 822, kcal_per_ounce: 196 },
        { food: "Organic acids", kj_per_gram: 13, kcal_per_gram: 3.1, kj_per_ounce: 369, kcal_per_ounce: 88 },
        { food: "Polyols (sweeteners)", kj_per_gram: 10, kcal_per_gram: 2.4, kj_per_ounce: 283, kcal_per_ounce: 68 }
    ];

    // 📌 Styling
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "20px",
        flexWrap: "wrap"
    };

    const tableContainerStyle = {
        width: "45%",
        minWidth: "300px",
        textAlign: "center"
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        border: "2px solid #ddd",
        boxShadow: "2px 2px 10px rgba(52, 39, 201, 0.1)",
        textAlign: "left",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        overflow: "hidden"
    };

    const headerStyle = {
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        fontSize: "18px"
    };

    const rowStyle = {
        borderBottom: "1px solid #ddd",
        padding: "10px"
    };

    const captionStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
        color: "#333"
    };



    const [food, setFood] = useState("");
    const [nutrition, setNutrition] = useState(null);

    // Hardcoded nutrition data
    const foodData = {
        "apple": { calories: 52, protein: 0.3, fat: 0.2, carbs: 14, fiber: 2.4, sugar: 10 },
        "banana": { calories: 89, protein: 1.1, fat: 0.3, carbs: 23, fiber: 2.6, sugar: 12 },
        "chicken breast": { calories: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0, sugar: 0 },
        "rice": { calories: 130, protein: 2.7, fat: 0.3, carbs: 28, fiber: 0.4, sugar: 0 },
        "egg": { calories: 68, protein: 5.5, fat: 4.8, carbs: 0.6, fiber: 0, sugar: 0.2 },
        "salmon": { calories: 208, protein: 20, fat: 13, carbs: 0, fiber: 0, sugar: 0 },
        "potato": { calories: 77, protein: 2, fat: 0.1, carbs: 17, fiber: 2.2, sugar: 0.8 },
        "milk": { calories: 42, protein: 3.4, fat: 1, carbs: 5, fiber: 0, sugar: 5 },
        "almonds": { calories: 579, protein: 21, fat: 50, carbs: 22, fiber: 12, sugar: 4.8 },
        "cheese": { calories: 402, protein: 25, fat: 33, carbs: 1.3, fiber: 0, sugar: 0.5 }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setFood(e.target.value);
    };

    // Search for food when clicking the button
    const searchNutrition = () => {
        const normalizedFood = food.trim().toLowerCase();
        setNutrition(foodData[normalizedFood] || null);
    };



    const [weight, setWeight] = useState(70);
    const [activity, setActivity] = useState("sedentary");
    const [proteinIntake, setProteinIntake] = useState(null);
  
    const activityLevels = {
      sedentary: [0.8, 1.0],
      active: [1.2, 2.2],
      muscle_gain: [1.6, 2.4],
      fat_loss: [1.8, 2.5],
    };
  
    const calculateProtein = () => {
      const [min, max] = activityLevels[activity];
      const minProtein = (weight * min).toFixed(1);
      const maxProtein = (weight * max).toFixed(1);
      setProteinIntake(`${minProtein}g - ${maxProtein}g per day`);
    };
  

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center text-center text-light py-5 position-relative"
                style={{
                    minHeight: "100vh",
                    backgroundImage: "url('https://mrwallpaper.com/images/hd/exercises-as-gym-motivation-cptouaw9168qm7gu.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <div className="row w-100 text-center">
                    <div className="col-md-6 mx-auto">
                        <h1 className="fw-bold text-uppercase">
                            <span className="text-danger">Nutrifit</span>
                            <span className="gradient-text"> Hub</span>
                        </h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="mt-3 fs-5">
                            At <strong>Nutrifit Hub</strong>, we make group workouts fun, daily food healthy & tasty and lifestyle care hassle-free.
                        </p>
                        <p className="fw-bold text-warning">#BeBetterEveryDay</p>
                    </div>
                </div>
            </div>

            {/* Calorie Calculator Form */}
            <div className="bg-light  my-5 row">
                <div className="container text-center mt-5 col-md-6">
                    <h2 className="text-center">Calorie Calculator</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Height (cm)</label>
                                <input type="number" className="form-control" value={formData.height} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Weight (kg)</label>
                                <input type="number" className="form-control" value={formData.weight} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age (years)</label>
                                <input type="number" className="form-control" value={formData.age} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select" value={formData.gender} onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <button className="btn btn-danger w-100" onClick={calculateCalories}>Calculate</button>
                            {calories && <h4 className="text-center mt-3">Estimated Calories: {calories} kcal/day</h4>}
                        </div>



                        {/* Step 2: Show BMR & Open Goal Selection Popup */}
                        {bmr > 0 && (
                            <div>
                                {/* <h2>Your BMR: {bmr} kcal/day</h2> */}
                                <button onClick={() => setShowModal(true)}>Select Goal</button>
                            </div>
                        )}

                        {/* Modal Popup for Goal Selection */}
                        {showModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <h3>Select Your Goal:</h3>
                                    <button onClick={() => handleGoalSelection("maintain")}>Maintain Weight</button>
                                    <button onClick={() => handleGoalSelection("lose")}>Lose Weight</button>
                                    <button onClick={() => handleGoalSelection("gain")}>Gain Weight</button>
                                    <button onClick={() => setShowModal(false)}>Close</button>
                                </div>
                            </div>
                        )}



                        {/* Styles for Modal */}
                        <style>
                            {`
                  .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(77, 40, 168, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        background: white;
        padding: 15px;
        width: 300px; /* Smaller width */
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
    .modal-content h3 {
        margin-bottom: 10px;
        font-size: 18px;
    }
    .modal-content button {
        margin: 5px;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
        font-size: 14px;
    }
    .modal-content button:hover {
        background-color: #0056b3;
    }
                `}
                        </style>
                    </div>
                </div>

                {/* Food Energy Converter */}
                <div className="mt-5 col-md-5 me-4">
                    <h2 className="fw-bold">Food Energy Converter</h2>
                    <p>The following converter can be used to convert between Calories and other common food energy units.</p>
                    <div className="border p-4 rounded shadow-sm bg-light">
                        <div className="d-flex mb-3">
                            <input
                                type="number"
                                className="form-control me-2"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <select className="form-select" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                                <option value="Calorie-Nutrition">Calorie-Nutrition</option>
                                <option value="Kilojoules-kJ">Kilojoules-kJ</option>
                            </select>
                        </div>
                        <h4 className="text-success fw-bold">= {result.toFixed(4)}</h4>
                        <div className="d-flex mb-3">
                            <select className="form-select" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                                <option value="Kilojoules-kJ">Kilojoules-kJ</option>
                                <option value="Calorie-Nutrition">Calorie-Nutrition</option>
                            </select>
                        </div>
                        <button className="btn btn-success w-50" onClick={convertEnergy}>Calculate</button>
                        <button className="btn btn-secondary ms-2" onClick={() => setResult(0)}>Clear</button>
                    </div>
                </div>
            </div>





            <div style={containerStyle}>
                {/* Calories Burned Table */}
                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
                        <caption style={captionStyle}>Calories Burned from Common Exercises</caption>
                        <thead>
                            <tr style={headerStyle}>
                                <th>Activity (1 hour)</th>
                                <th>125 lb</th>
                                <th>155 lb</th>
                                <th>185 lb</th>
                            </tr>
                        </thead>
                        <tbody>
                            {caloriesData.map((row, index) => (
                                <tr key={index} style={rowStyle}>
                                    <td>{row.activity}</td>
                                    <td>{row.calories_125}</td>
                                    <td>{row.calories_155}</td>
                                    <td>{row.calories_185}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Energy from Food Components Table */}
                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
                        <caption style={captionStyle}>Energy from Common Food Components</caption>
                        <thead>
                            <tr style={headerStyle}>
                                <th>Food Component</th>
                                <th>kJ/g</th>
                                <th>kcal/g</th>
                                <th>kJ/oz</th>
                                <th>kcal/oz</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodEnergyData.map((row, index) => (
                                <tr key={index} style={rowStyle}>
                                    <td>{row.food}</td>
                                    <td>{row.kj_per_gram}</td>
                                    <td>{row.kcal_per_gram}</td>
                                    <td>{row.kj_per_ounce}</td>
                                    <td>{row.kcal_per_ounce}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


<hr/>
            <div className="container mt-4">
                <h2>Food Nutrition Lookup</h2>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Enter food name (e.g., apple)"
                    value={food}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                />
                <button className="btn btn-danger" onClick={searchNutrition}>Get Nutrition</button>

                {/* Display Nutrition Data */}
                {nutrition ? (
                    <div className="mt-4">
                        <h4>Nutrition Facts for "{food}"</h4>
                        <p><strong>Calories:</strong> {nutrition.calories} kcal</p>
                        <p><strong>Protein:</strong> {nutrition.protein.toFixed(2)} g</p>
                        <p><strong>Fat:</strong> {nutrition.fat.toFixed(2)} g</p>
                        <p><strong>Carbs:</strong> {nutrition.carbs.toFixed(2)} g</p>
                        <p><strong>Fiber:</strong> {nutrition.fiber.toFixed(2)} g</p>
                        <p><strong>Sugar:</strong> {nutrition.sugar.toFixed(2)} g</p>
                    </div>
                ) : (
                    food && <p className="text-danger mt-2">Food not found. Try another item.</p>
                )}
            </div>
            <hr/>


            <div className="container mt-5">
      <div className="row">
        {/* Calculator Section */}
        <div className="col-md-6 p-4 border rounded shadow-sm bg-light">
          <h2 className="text-center mb-4">Protein Intake Calculator</h2>
          <div className="mb-3">
            <label className="form-label">Enter Your Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Your Activity Level:</label>
            <select
              className="form-select"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="sedentary">Sedentary (0.8 - 1.0g/kg)</option>
              <option value="active">Active (1.2 - 2.2g/kg)</option>
              <option value="muscle_gain">Muscle Gain (1.6 - 2.4g/kg)</option>
              <option value="fat_loss">Fat Loss (1.8 - 2.5g/kg)</option>
            </select>
          </div>
          <button className="btn btn-primary w-100" onClick={calculateProtein}>
            Calculate Protein Intake
          </button>
          {proteinIntake && (
            <div className="alert alert-success mt-3">Your recommended protein intake: <strong>{proteinIntake}</strong></div>
          )}
        </div>

        {/* Information Section */}
        <div className="col-md-6 p-4 bg-light border rounded shadow-sm">
          <h2 className="mb-3 text-dark text-center">Protein Intake Guide</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item"> <strong>Sedentary individuals:</strong> 0.8g per kg of body weight</li>
            <li className="list-group-item"> <strong>Active individuals & athletes:</strong> 1.2-2.2g per kg</li>
            <li className="list-group-item"> <strong>Muscle gain & strength training:</strong> 1.6-2.4g per kg</li>
            <li className="list-group-item"> <strong>Fat loss (preserving muscle):</strong> 1.8-2.5g per kg</li>
          </ul>
          <h3 className="mt-4 text-success">Best Sources of Protein</h3>
          <div className="alert alert-info">
            <strong>Animal-based:</strong> Chicken, eggs, fish, motton, curd, milk
          </div>
          <div className="alert alert-warning">
            <strong>Plant-based:</strong> Lentils, chickpeas, tofu, nuts, seeds, quinoa
          </div>
          <h3 className="mt-4 text-danger">Protein Timing</h3>
          <ul className="list-group">
            <li className="list-group-item">Spread protein intake evenly throughout the day (3-5 meals)</li>
            <li className="list-group-item">Post-workout protein (within 30-60 minutes) aids muscle recovery</li>
            <li className="list-group-item">Before bed: Slow-digesting protein (like curd) aids overnight repair</li>
          </ul>
        </div>
      </div>
    </div>



            <section className="container text-center my-5">
                <h2 className="fw-bold">Guide</h2>
                <p className="text-muted">Click on icons to open pdf.</p>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="p-3">
                            <a
                                href="https://drive.google.com/file/d/1wd0WWtJ0HdAIJ7Gvaj86wmmqR3nYg-Wq/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-circle bg-danger p-4 d-inline-block text-white"
                            >
                                <i class="fa-solid fa-warehouse"></i>
                            </a>
                            <h4 className="mt-3">Food Storage Guide</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <a
                                href="https://drive.google.com/file/d/1Tcxlord0g0gVtOf0Wm_oXE5uYvJA1bOQ/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-circle bg-danger p-4 d-inline-block text-white"
                            >
                                <i class="fa-solid fa-utensils"></i>
                            </a>
                            <h4 className="mt-3">Tasty Cooking Ideas</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <a
                                href="https://drive.google.com/file/d/1d6SWFLvDBAYWv6FIH5T-ohgUyOpJvV87/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-circle bg-danger p-4 d-inline-block text-white"
                            >
                                <i class="fa-solid fa-book"></i>
                            </a>
                            <h4 className="mt-3">Food Library</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3">
                            <a
                                href="https://drive.google.com/file/d/1Ilk2asnASqDorL5xtGqlG0am6L6LJqFr/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-circle bg-danger p-4 d-inline-block text-white"
                            >
                                <i class="fa-solid fa-calendar"></i>
                            </a>

                            <h4 className="mt-3">Cheat Meal Guide</h4>
                        </div>
                    </div>
                </div>
            </section >

            <div className="container mt-5 my-5">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
         
        </>
    );
}

export default UserHome;





// How Many Calories Should I Consume?

// Step 1: Calculate Your Maintenance Calories
// Use the formula below to estimate your maintenance calories:
// - If you go to the gym 4-6 times per week:
// 22 x Your Body Weight (kg) x 1.4
// - If you go to the gym 0-3 times per week:
// 22 x Your Body Weight (kg) x 1.2

// Step 2: Decide Your Goal
// - Fat Loss: Subtract 400 from your maintenance calories.
// - Muscle Gain: Add 200 to your maintenance calories.
// - Body Recomp: Subtract 250 from your maintenance calories.

// Step 3: Follow the Meal Plan
// Stick to a meal plan with the calculated calories. Suitable meal plans can be found in the available
// folders.

// Step 4: Adjust for Progress
// - For Fat Loss: Every 2-3 weeks, reduce 100 calories.
// - For Muscle Gain: Every 2-3 weeks, add 100 calories.
// - For Body Recomp: Every 2-3 weeks, reduce 50 calories.

// Final Note
// Repeat the process until you reach your goal!