import React from "react";

const pdfLinks = [
  {
    title: "1700 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/10I0yhT2_Hl4JH9QqgZdHGNx_y4pe9xVu/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Eggetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1iavnxF6F8SGeof7LNEuSoshDrT2NwDpT/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Eggetarian Whey Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1Y2rUBVRBAgwqLqferzgyq3YXrlyty8KY/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Eggetarian",
    url: "https://drive.google.com/file/d/1FeW29PhARNBZ2hUih0y47abwx54wHibZ/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Eggetarian+Whey",
    url: "https://drive.google.com/file/d/1QNltY4dr3kXMavbKF6oyIwbFml47WyfO/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Non Vegetarian Meal Grocery List 1  Week",
    url: "https://drive.google.com/file/d/1gHudO9NGF35JLhE_R6ClrgoMJdqvACK6/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
    url: "https://drive.google.com/file/d/18YEjIrDnnkiHxBoUZaOOevLgDVRhrFEH/view?usp=drivesdk",
  },
  {
    title: "1700 CALORIES NON-VEGETARIAN MEAL PLAN",
    url: "https://drive.google.com/file/d/1gxVyS79PIFvm-Y2y_On_8VXDOR-uvCCQ/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Vegetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1bV5N1mZWnPumxTwU32roLEmSPqYWNnfd/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Vegetarian Whey Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1EpwctQslvBaOnOEX7x4WlC99SA9WrqcI/view?usp=drivesdk",
  },
  {
    title: "1700 Calories Vegetarian Meal",
    url: "https://drive.google.com/file/d/1LG663KVvbiH2tiXrZ0wraBhtaX8d9l8q/view?usp=drivesdk",
  },
  {
    title: "1700 CALORIES VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/1QEMG9vo866ffsO0aGIKt_OBDJzBLwRje/view?usp=drivesdk",
  },
];

// Function to get a direct Google Drive download link
const getDirectDownloadLink = (driveUrl) => {
  const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
};

function MealPlantwo() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Meal Plans for 1700 Calories</h1>
      <div className="row">
        {pdfLinks.map((pdf, index) => {
          const pdfUrl = pdf.url.replace("/view", "/preview");
          return (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{pdf.title}</h5>
                  <div className="btn-group mt-auto">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View PDF
                    </a>
                    <a
                      href={getDirectDownloadLink(pdf.url)}
                      className="btn btn-success"
                      download
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MealPlantwo;
