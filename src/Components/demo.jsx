import React, { useEffect, useState } from 'react';

const API_KEY = "YVNW4nf1yDpIRnluhsbX8M3RMqHLL6vPjwNia2q5"; // Replace with your USDA API key


const IMPORTANT_NUTRIENTS = {
    Calories: 208, // Energy (kcal)
    Protein: 203, // Protein (g)
    Fat: 204, // Total Fat (g)
    Carbohydrates: 205, // Carbs (g)
    Fiber: 291, // Dietary Fiber (g)
    Sugar: 269 // Total Sugars (g)
};

function Demo() {
    const [query, setQuery] = useState("apple");
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [nutrients, setNutrients] = useState([]);

    // Fetch food search results
    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch(
                    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${API_KEY}`
                );
                const data = await response.json();
                setFoods(data.foods || []);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        };

        if (query) fetchFoodData();
    }, [query]);

    // Fetch detailed nutrients for selected food
    const fetchFoodDetails = async (fdcId) => {
        try {
            const response = await fetch(
                `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`
            );
            const data = await response.json();

            // Extract only essential nutrients
            const extractedNutrients = {};
            if (data.foodNutrients) {
                data.foodNutrients.forEach((nutrient) => {
                    if (Object.values(IMPORTANT_NUTRIENTS).includes(nutrient.nutrientId)) {
                        const key = Object.keys(IMPORTANT_NUTRIENTS).find(
                            (k) => IMPORTANT_NUTRIENTS[k] === nutrient.nutrientId
                        );
                        if (key) extractedNutrients[key] = `${nutrient.value} ${nutrient.unitName}`;
                    }
                });
            }

            setSelectedFood(data);
            setNutrients(extractedNutrients);
            console.log(nutrients);
            
        } catch (error) {
            console.error("Error fetching food details:", error);
        }
    };


    return (
        <>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Food Nutrient Search</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search food..."
                    style={{ padding: "10px", fontSize: "16px" }}
                />
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {foods.map((food) => (
                        <li
                            key={food.fdcId}
                            onClick={() => fetchFoodDetails(food.fdcId)}
                            style={{
                                cursor: "pointer",
                                padding: "10px",
                                borderBottom: "1px solid #ccc",
                            }}
                        >
                            {food.description} ({food.foodCategory})
                        </li>
                    ))}
                </ul>

                {selectedFood && (
                    <div style={{ marginTop: "20px" }}>
                        <h2>{selectedFood.description}</h2>
                        <h3>Nutrient Information:</h3>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {Object.keys(nutrients).length > 0 ? (
                                Object.entries(nutrients).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))
                            ) : (
                                <p>No essential nutrient data available.</p>
                            )}
                        </ul>
                    </div>
                )}
            </div>






        </>
    );
}

export default Demo;
