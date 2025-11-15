import React from 'react'
const pdfLinks = [
    {
      title: "2400 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1VK36_a-s4AI3AatApJNLFZHAmba0zlHC/view?usp=drive_link",
    },
    {
      title: "2400 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/15skVxF8Co_p8lX7-Obn3Hh1mXC6jz9Ub/view?usp=drive_link",
    },
    {
      title: "2400 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1GTTjmlPJ0PJmTMpX_kfWdMH3n9WWd_Yf/view?usp=drive_link",
    },
    {
      title: "2400 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1Eq1C4b8ILy76rcLcd0ilMf5tMSekrof9/view?usp=drive_link",
    },
    {
      title: "2400 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1Vcmx3CSIG2HMKzqbKcqPitUPUYIL2Gs8/view?usp=drive_link",
    },
    {
      title: "2400 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/165cnpu5x2Nm1nSO7OR8ll1BIogSBNqyb/view?usp=drive_link",
    },
    {
      title: "2400 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/1hEJKcr10Gi7Wn2GIOjm_JvZaXm8ORNeC/view?usp=drive_link",
    },
    {
      title: "2400 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1zNzqqAlK2MtBFEuuxl7ROAs6caXhrODB/view?usp=drive_link",
    },
    {
      title: "2400 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/160GHgj-dhK8sXrtAG5Mf4GmNadAEOsmt/view?usp=drive_link",
    },
    {
      title: "2400 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1wdSiZcbDliebFuMXKCrz3haG3o00T3Em/view?usp=drive_link",
    },
    {
      title: "2400 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1XBl-zLPYL5fOiToqp_lEwaeHHztUavxX/view?usp=drive_link",
    },
    {
      title: "2400 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1vhMqpSL3FzlSEigSx3KqTNPMHfDoprrO/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };

function MealPlannine() {
  return (
    <div>
     <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2400 Calories</h1>
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

export default MealPlannine;
