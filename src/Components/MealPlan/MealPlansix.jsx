import React from 'react'


const pdfLinks = [
    {
      title: "2100 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1lyJzo89gercL4tRZQRXoiD149gy64tZh/view?usp=drive_link",
    },
    {
      title: "2100 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/101Q5CIXD71hri8tNMBE_gJQd65M8vFVy/view?usp=drive_link",
    },
    {
      title: "2100 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1LUeQE-PTJyabNcU-O93yQymPsLeYSm00/view?usp=drive_link",
    },
    {
      title: "2100 Calories Eggetarian",
      url: "https://drive.google.com/file/d/103WDs1bgddGDldMW00Ey8_NPW3bDJ4Sp/view?usp=drive_link",
    },
    {
      title: "2100 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1OTxSlsXZguqMZz8OPwZ2E_iXSgIU25Nt/view?usp=drive_link",
    },
    {
      title: "2100 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1n9LzRhebaQmS-YJFlcPSG81EIwkZYMw0/view?usp=drive_link",
    },
    {
      title: "2100 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/19A5ojTcy9wkcyOUUs77686lKcT_Lbty4/view?usp=drive_link",
    },
    {
      title: "2100 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1zNdDGo3nHZfrEM3P8rpWFE8BUmfL_-IW/view?usp=drive_link",
    },
    {
      title: "2100 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1vq5aEFYXqOHxe-tUsdr1ydwXlyy8JCtX/view?usp=drive_link",
    },
    {
      title: "2100 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/16d7wn9ZIALNpflR8uipTfSeYT3Y4X0aj/view?usp=drive_link",
    },
    {
      title: "2100 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1jiIf_vVRjBYRWnEh0-tAchIJACz3hVge/view?usp=drive_link",
    },
    {
      title: "2100 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1pmxEmhKXetql_dgdqiIe9GaptoTD4-ok/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };


function MealPlansix() {
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2100 Calories</h1>
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
} export default MealPlansix;