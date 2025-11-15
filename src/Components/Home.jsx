import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>
            <div className="container-fluid bg-light text-primary min-vh-100 d-flex align-items-center justify-content-center p-4">
                <div className="container bg-dark p-5 rounded shadow-lg text-light">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="text-center fw-bold text-warning mb-4">What Are Calories?</h1>
                            <p className="lead">
                                Calories are a unit of energy that measure how much energy food provides when consumed. The body uses calories for essential functions like breathing, digestion, movement, and other bodily processes.
                            </p>

                            <h2 className="fw-bold text-info mt-4">Types of Calories</h2>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item bg-dark text-white border-info"><strong>Empty Calories</strong> – Foods that provide energy but little to no nutritional value (e.g., sugary drinks, processed snacks).</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Nutrient-Dense Calories</strong> – Foods that provide energy along with essential nutrients like vitamins, minerals, and fiber (e.g., fruits, vegetables, lean proteins).</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h1 className="text-center fw-bold text-warning mb-4">Why Calories Are Important?</h1>
                            <p className="lead">Calories are essential because they provide the energy needed for the body to function properly. Here’s why they matter:</p>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item bg-dark text-white border-info"><strong>Energy for Daily Activities</strong> – Calories fuel everything from basic bodily functions like breathing and digestion to physical activities like walking, running, and lifting weights.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Supports Metabolism</strong> – Your body constantly burns calories to maintain organ function, body temperature, and cellular processes.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Muscle Growth & Recovery</strong> – For muscle growth and repair, a sufficient calorie intake (especially from protein and healthy fats) is crucial.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Brain Function</strong> – The brain relies on calories (mainly from carbohydrates) to perform cognitive functions like thinking, concentration, and memory.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Weight Management</strong> – Deficit (Burning more than consuming) → Fat loss. Surplus (Consuming more than burning) → Weight/muscle gain. Balance → Maintaining weight.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Hormonal & Immune System Support</strong> – A proper calorie intake supports hormone regulation and a strong immune system, preventing issues like fatigue, mood swings, and illness.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="fw-bold text-info mt-4">Calories in Macronutrients</h2>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item bg-dark text-white border-info">Carbohydrates: 4 kcal per gram</li>
                                <li className="list-group-item bg-dark text-white border-info">Proteins: 4 kcal per gram</li>
                                <li className="list-group-item bg-dark text-white border-info">Fats: 9 kcal per gram</li>
                                <li className="list-group-item bg-dark text-white border-info">Alcohol: 7 kcal per gram</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h2 className="fw-bold text-info mt-4">Macronutrient Distribution Based on User Goals</h2>
                            <p className="lead">The ideal ratio of protein, fats, and carbs depends on the user's fitness goal: fat loss, muscle gain, or maintenance.</p>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item bg-dark text-white border-info"><strong>Protein</strong> (4 kcal per gram) – Essential for muscle repair, growth, and recovery.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Fats</strong> (9 kcal per gram) – Supports hormones, brain function, and energy balance.</li>
                                <li className="list-group-item bg-dark text-white border-info"><strong>Carbohydrates</strong> (4 kcal per gram) – Main energy source for workouts and daily activities.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="fw-bold text-info mt-4">Daily Calorie Needs</h2>
                    <p className="lead">
                        Calorie requirements vary based on factors like age, gender, activity level, and goals (weight loss, maintenance, or gain).
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-dark text-white border-info">Sedentary: 1800-2200 kcal (women), 2200-2800 kcal (men)</li>
                        <li className="list-group-item bg-dark text-white border-info">Moderately active: 2000-2400 kcal (women), 2600-3000 kcal (men)</li>
                        <li className="list-group-item bg-dark text-white border-info">Active: 2200-2800 kcal (women), 3000-3500 kcal (men)</li>
                    </ul>

                    <h2 className="fw-bold text-info mt-4">Calorie Balance & Weight Management</h2>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-dark text-white border-info"><strong>Caloric Surplus</strong> (more intake than burned) = Weight Gain</li>
                        <li className="list-group-item bg-dark text-white border-info"><strong>Caloric Deficit</strong> (less intake than burned) = Weight Loss</li>
                        <li className="list-group-item bg-dark text-white border-info"><strong>Caloric Maintenance</strong> (equal intake and burn) = Stable Weight</li>
                    </ul>

                    <p className="text-center fs-5 mt-4 text-warning">
                        Would you like a customized macronutrient plan based on your weight and goal?
                    </p>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="fw-bold text-info mt-4">Types of Workouts</h2>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-dark text-white border-info"><strong>Strength Training</strong> – Focuses on lifting heavy weights for fewer reps (1-6 reps per set). Best for building strength and power.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Hypertrophy Training</strong> – Uses moderate weights with moderate reps (8-12 reps per set). Ideal for muscle growth.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Endurance Training</strong> – High reps (12-20+ reps per set) with lighter weights. Improves muscular endurance.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Functional Training</strong> – Uses bodyweight, resistance bands, kettlebells, and balance exercises. Helps in everyday movement efficiency.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>HIIT</strong> – Short bursts of intense exercise followed by rest. Great for fat loss and cardiovascular endurance.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Cardio Workouts</strong> – Improves heart health and burns calories. Includes running, cycling, swimming.</li>
                </ul>

                <h2 className="fw-bold text-info mt-4">Workout Splits</h2>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-dark text-white border-info"><strong>Full-Body Workout</strong> – Works all major muscle groups in each session. Good for beginners.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Upper/Lower Split</strong> – Divides workouts into upper and lower body sessions.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Push/Pull/Legs Split</strong> – Each workout focuses on a different movement pattern.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Bro Split</strong> – Trains one muscle group per day, common in bodybuilding.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>Hybrid Strength + Hypertrophy</strong> – Mixes heavy strength training and hypertrophy workouts.</li>
                </ul>

                <h2 className="fw-bold text-info mt-4">Daily Step</h2>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-dark text-white border-info"><strong>Walking and increasing daily steps play a crucial role in fat loss and body recomposition (losing fat while building muscle).</strong></li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>1. Increases Caloric Expenditure (Fat Loss)</strong> – Walking contributes to your Total Daily Energy Expenditure (TDEE) by increasing the number of calories burned without adding excessive fatigue like high-intensity workouts.<br /><br />Example: 10,000 steps can burn 300–500 calories, depending on your weight. This creates a caloric deficit, which is necessary for fat loss.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>2. Improves Fat Oxidation</strong> – Low-intensity activities like walking primarily use fat as the primary fuel source rather than carbohydrates, making it effective for fat loss when combined with a proper diet.</li>
                    <li className="list-group-item bg-dark text-white border-info"><strong>3. Helps in Recovery & Reduces Cortisol</strong> – High-intensity workouts can increase cortisol (stress hormone), which can lead to fat retention. Walking lowers cortisol levels, reducing the likelihood of belly fat storage, and enhances muscle recovery by improving blood flow.</li>
                </ul>
            </div>
        </>
    );
}

export default Home;
