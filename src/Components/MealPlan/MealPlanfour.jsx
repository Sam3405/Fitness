import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const pdfLinks = [
  {
    title: "1900 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/1XD2GaDmr8cRM1Phkc55It6Y0dWukRKVn/view?usp=drive_link",
  },
  {
    title: "1900 Calories Eggetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/15SkDPj1W4dT5bMUm3Ck8Pdt28oU_-Sfk/view?usp=drive_link",
  },
  {
    title: "1900 Calories Eggetarian Whey Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1JuPxrmuXl-6v6sEcp3l5KqjY4eV-Z5NJ/view?usp=drive_link",
  },
  {
    title: "1900 Calories Eggetarian",
    url: "https://drive.google.com/file/d/1Pj9OGEG4KjsaD7X0-xTWuriMvNBzVrQh/view?usp=drive_link",
  },
  {
    title: "1900 Calories Eggetarian+Whey",
    url: "https://drive.google.com/file/d/1ImZ7Th5Y08FaOZFz_qqxRovMA8c7bI9H/view?usp=drive_link",
  },
  {
    title: "1900 Calories Non Vegetarian Meal Grocery List 1  Week",
    url: "https://drive.google.com/file/d/1twLMMaplAqIMOFaYZClp9hn1YP5RwzwQ/view?usp=drive_link",
  },
  {
    title: "1900 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
    url: "https://drive.google.com/file/d/1387zvdfdC2Pz1wLdwFZvvPQZuX0si2vn/view?usp=drive_link",
  },
  {
    title: "1900 CALORIES NON-VEGETARIAN MEAL PLAN",
    url: "https://drive.google.com/file/d/1zhpGzlL1b6AdzyQM_Yn4DiBClG35fmb4/view?usp=drive_link",
  },
  {
    title: "1900 Calories Vegetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1n9HSnLon-rca6NVKrK6ujCMHcLgIbR8f/view?usp=drive_link",
  },
  {
    title: "1900 Calories Vegetarian Whey Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1LzEI2Vgc4_FvRsmPkbBn1MDd6O2TNHz-/view?usp=drive_link",
  },
  {
    title: "1900 Calories Vegetarian Meal",
    url: "https://drive.google.com/file/d/1ZTO5Af-zem3tNcoZFEjbWjzP29NGdXoY/view?usp=drive_link",
  },
  {
    title: "1900 CALORIES VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/10u8YbtGme0qM5LkiYG3ospsvMCsF9R9V/view?usp=drive_link",
  },
];

const getDirectDownloadLink = (driveUrl) => {
  const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
};

function MealPlanfour() {
  return (
    <div className="container mealplanfour">
      <h1 className="text-center mb-4">Meal Plans for 1900 Calories</h1>
      <div className="row">
        {pdfLinks.map((pdf, index) => {
          const pdfUrl = pdf.url.replace("/view", "/preview");
          return (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{pdf.title}</h5>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    Open PDF
                  </a>
                  <a
                    href={getDirectDownloadLink(pdf.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-2"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MealPlanfour;
