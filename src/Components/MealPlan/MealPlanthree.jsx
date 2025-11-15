import React from 'react'
const pdfLinks = [
    {
      title: "1800 Calorie Non Veg Whey",
      url: "https://drive.google.com/file/d/1zysTU8Jy1VW9-t-b4DldtNfby8DmiJYh/view?usp=drive_link",
    },
    {
        title: "1800 Calories Eggetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/179VRm5eu4d2Nl_rseZNB9-kXDLPWtPgM/view?usp=drive_link",
      },
      {
        title: "1800 Calories Eggetarian + Whey Meal Plan Grocery List - 1 Week",
        url: "https://drive.google.com/file/d/1itIOS_0kDsE_fz1RFiU_qhbZtQcLcnb3/view?usp=drive_link",
      },
      {
        title: "1800 Calories Eggetarian",
        url: "https://drive.google.com/file/d/1nT2qUCm91izpm-HTN7yDLqsxQpwEVMQW/view?usp=drive_link",
      },
      {
        title: "1800 Calories Eggetarian+Whey",
        url: "https://drive.google.com/file/d/1aH0iKJEz-5BH7XHT-hIX9A6p5JlUa3_t/view?usp=drive_link",
      },
      {
        title: "1800 Calories Non Vegetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1qUThz-hGfhwbu96T71nlBKiIkZsfUC5u/view?usp=drive_link",
      },
      {
        title: "1800 Calories Non Vegetarian Whey Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1VmxRL-bzpM-ZtGgeczZArO1KGcdpbO7H/view?usp=drive_link",
      },
      {
        title: "1800 Calories Non Vegetarian",
        url: "https://drive.google.com/file/d/1j13hehPp70RnP5DtY6RMI70mvOkwCEOq/view?usp=drive_link",
      },
      {
        title: "1800 Calories Vegetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1Qfe_2_sy9xdfIxGfmpZKAqu1Fo5-wu2D/view?usp=drive_link",
      },
      {
        title: "1800 Calories Vegetarian Whey Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1vYcmJdStZ69XvkSq59aLuVevHPCB3iFD/view?usp=drive_link",
      },
      {
        title: "1800 Calories Vegetarian",
        url: "https://drive.google.com/file/d/1LKIjPa-fb6uIl0UNNgdSvRzmBprJkJt-/view?usp=drive_link",
      },
      {
        title: "1800 Calories Vegetarian+Whey",
        url: "https://drive.google.com/file/d/13Owcmb4XmIM3MQ-qNU-1KVWbQPn0WA2O/view?usp=drive_link",
      }
                            
];


const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };

function MealPlanthree() {
  return (
    <>
       <div className="container mt-4">
        <h1 className="text-center mb-4">Meal Plans for 1800 Calories</h1>
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
                      className="btn btn-success"
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
}export default MealPlanthree;