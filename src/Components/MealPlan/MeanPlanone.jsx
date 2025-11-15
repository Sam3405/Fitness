import React from 'react'
const pdfLinks = [
    {
        title: "1600 CALORIES VEGETARIAN+WHEY MEAL PLAN",
        url: "https://drive.google.com/file/d/1Mu8nbCHNRUOXMVroyxVIk-PZo2peFA_J/view?usp=drive_link",
    },
    {
        title: "1600 Calories Vegetarian Whey Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1eVF5BEOEv9HR8pTvC1qWmcMpK7dau926/view?usp=drive_link",
    },
    {
        title: "1600 Calories Vegetarian Meal",
        url: "https://drive.google.com/file/d/1kGI3l0zxzkLvt4oAeIiPdg5dbjHU6E4c/view?usp=drive_link",
    },
    {
        title: "1600 Calories Vegetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1sounGQmhON0WsqqofeTOlbjQvk26eguF/view?usp=drive_link",
    },
    {
        title: "1600 CALORIES NON-VEGETARIAN MEAL PLAN",
        url: "https://drive.google.com/file/d/1o0wkB5YnScC-XkFm4BdHd9t0GkWVEzg7/view?usp=drive_link",
    },
    {
        title: "1600 Calories Non Vegetarian + Whey Meal Plan Grocery List - 1 Week",
        url: "https://drive.google.com/file/d/1Srx8r9GDzXDQTjhQW97Py12G_f5qS7ea/view?usp=drive_link",
    },
    {
        title: "1600 Calories Non Vegetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/12JmNAC06w4BlBRmSUuFiYxIuJtA5Awsg/view?usp=drive_link",
    },
    {
        title: "1600 Calories Eggetarian+Whey",
        url: "https://drive.google.com/file/d/1TlF5Q8NDhykoeRXICWGefOayCPWIcY_x/view?usp=drive_link",
    },
    {
        title: "1600 Calories Eggetarian",
        url: "https://drive.google.com/file/d/1J5F4XOc4WHdMA6ZpuJWt4gqX6rd2EtXq/view?usp=drive_link",
    },
    {
        title: "1600 Calories Eggetarian Whey Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/13oR80H2X4HQen66iFNsTcylQE36ExvLu/view?usp=drive_link",
    },
    {
        title: "1600 Calories Eggetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1Hy-q-_5uDBaEdg0bP82dCBM0H-6kID19/view?usp=drive_link",
    },
    {
        title: "1600 Calories Eggetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1U7rgUShwgOZR_ykDk43uDEiRP9bZrO-F/view?usp=drive_link",
    }
];


const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };

function MeanPlanone() {
    return (
        <>
         <div className="container mt-4">
        <h1 className="text-center mb-4">Meal Plans for 1600 Calories</h1>
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
} export default MeanPlanone;