import React from 'react'
const pdfLinks = [
    {
      title: "2600 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1BRmzNdaidWGU-dYj3K6B3KMiUe2hpjgL/view?usp=drive_link",
    },
    {
      title: "2600 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1sR2-mIekfz7FRGKKpAN23bHSJvFPYq2Z/view?usp=drive_link",
    },
    {
      title: "2600 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1PDe0FXkCkLAcxZXh2V2Qo3k7orrcV3lJ/view?usp=drive_link",
    },
    {
      title: "2600 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1fEVk_Q_KFbKn7DX1G4Nu6DdZ33LbYsv4/view?usp=drive_link",
    },
    {
      title: "2600 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1iUtSjSdhYFJP_G9dGVW0bVzlvf4YhEFw/view?usp=drive_link",
    },
    {
      title: "2600 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1u9Q3TIIHxuXZuJ04LIufGgRi_d5mZplt/view?usp=drive_link",
    },
    {
      title: "2600 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/1AwhTW6MzkTAd1ExvUX9Uv3p6D4Cvkhfi/view?usp=drive_link",
    },
    {
      title: "2600 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1Z5CIBuw7RT7UIu1fr1GCLDo2ApX0H-fg/view?usp=drive_link",
    },
    {
      title: "2600 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/11zWt0jAXmoubAabKtQvOn1SRvVUkjqiF/view?usp=drive_link",
    },
    {
      title: "2600 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1KNgWLdC4yvgOsqvVBNz-wP8jt-dUehKa/view?usp=drive_link",
    },
    {
      title: "2600 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1957ZKi8FMbfugxuAdfLy0EqtPO00Nakf/view?usp=drive_link",
    },
    {
      title: "2600 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1RFhnLPEvdFunB-EAixFTk2mf5hHKrgzW/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };
function MealPlaneleven() {
  return (
    <div>
      <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2600 Calories</h1>
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
                                            className="btn btn-success mt-2"
                                            download
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
    </div>
  );
}

export default MealPlaneleven
;