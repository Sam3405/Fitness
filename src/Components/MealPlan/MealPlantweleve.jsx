import React from 'react'

const pdfLinks = [
    {
      title: "2700 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1HCYBr8kGbOzTpDqbpT76lL0eTr9cK1Zv/view?usp=drive_link",
    },
    {
      title: "2700 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1MVcrZ1Xqr4DpVpoIJB7C0V9ulMyNgNs3/view?usp=drive_link",
    },
    {
      title: "2700 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1Y50HRWJiRHDt0EDNUd7-VaVvyTGUAMpu/view?usp=drive_link",
    },
    {
      title: "2700 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1Qy-uy3SlvEI2k5Rao-hXTOgA_0KJq_vP/view?usp=drive_link",
    },
    {
      title: "2700 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1SiLUeo7XNNRKG7EriM_oGMih7JxnUZ83/view?usp=drive_link",
    },
    {
      title: "2700 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1nn6KCXQhlAG-uLagLiydYPwQA11sRQ0u/view?usp=drive_link",
    },
    {
      title: "2700 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/19UxzZQm0n15RY7Blm8aUq2qPTD0nlqNa/view?usp=drive_link",
    },
    {
      title: "2700 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1jR5N-aA7qUxTSPObiiFekwX2KP1mTgD8/view?usp=drive_link",
    },
    {
      title: "2700 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1E1_T5AOBRtk9iqlsB_BAsIiIj7w6ESqa/view?usp=drive_link",
    },
    {
      title: "2700 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1vhfivJZZn1xUEUIyTrYrzAjS5LdnL7-z/view?usp=drive_link",
    },
    {
      title: "2700 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1v6O8cx0O0nLsDFY_W8eltFXqjslcdtwa/view?usp=drive_link",
    },
    {
      title: "2700 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1OvZnZidN2rOqZ_5hpBQV8T4NU-WHmUB6/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };


function MealPlantweleve() {
  return (
    <>
      <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2700 Calories</h1>
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
    </>
  );
}export default MealPlantweleve;