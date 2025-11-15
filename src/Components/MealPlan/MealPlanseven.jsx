import React from 'react'

const pdfLinks = [
    {
      title: "2200 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1bP28DNcfg-U7ZWwXZxTuJIIaeJ-Sg3l2/view?usp=drive_link",
    },
    {
      title: "2200 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1hHRLADPytSsPAXBKX4bOwZLZT2YV3Kja/view?usp=drive_link",
    },
    {
      title: "2200 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1X9oGcWF2lRrH39q81OVzKGYsI6eRH12E/view?usp=drive_link",
    },
    {
      title: "2200 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1cBKTAwp9wdfFwbiYn5e2WbU7-yW01bvF/view?usp=drive_link",
    },
    {
      title: "2200 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1EfUcOIzlRUGpKFGaRvF8p1DiFM0XXMIO/view?usp=drive_link",
    },
    {
      title: "2200 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1v5ovBNHnD__iv4LEtHHCQW0QDpPWYCb2/view?usp=drive_link",
    },
    {
      title: "2200 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/1QpFWg56qcYGd2mMkFBjUDJnlPRj54wMV/view?usp=drive_link",
    },
    {
      title: "2200 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1kIDdM8ZoqAFVm3d6S7IwqZlXtwdDwixu/view?usp=drive_link",
    },
    {
      title: "2200 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1w45dmApjFE6OQcvxPwwTkSdnNT2_JuQV/view?usp=drive_link",
    },
    {
      title: "2200 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1ixFjg8zw99qyqMx9ZGLSToXtBKZtfBYC/view?usp=drive_link",
    },
    {
      title: "2200 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1RPYP1pQSu2X5aMXh3yLJKWqTLP5EpvTN/view?usp=drive_link",
    },
    {
      title: "2200 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1O-1auqKuFzvTjtuLAxe14BLirxvGju8e/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };



function MealPlanseven() {
  return (
    <div>
        <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2200 Calories</h1>
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
}export default MealPlanseven;