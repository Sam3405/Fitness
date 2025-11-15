import React from 'react'
const pdfLinks = [
  {
    title: "2000 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/1V6oDJvhpCNSWEPLKxNNpQOX79tsT5Xkp/view?usp=drive_link",
  },
  {
    title: "2000 Calories Eggetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1HlPW7cEI1aQeppwTH19V6x4683d0M6No/view?usp=drive_link",
  },
  {
    title: "2000 Calories Eggetarian Whey Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1k30eqtINnWotKXRtCK1ed6Ds5e3I4LA8/view?usp=drive_link",
  },
  {
    title: "2000 Calories Eggetarian",
    url: "https://drive.google.com/file/d/13dQJ6Dgk_ZRzWEdHLMEOOydyTrfMiqXx/view?usp=drive_link",
  },
  {
    title: "2000 Calories Eggetarian+Whey",
    url: "https://drive.google.com/file/d/1vG0hvOqmdRdM1aPQUzncsAz_VKCvfzGC/view?usp=drive_link",
  },
  {
    title: "2000 Calories Non Vegetarian Meal Grocery List 1  Week",
    url: "https://drive.google.com/file/d/1udvcq47H1E7gcgRvPWatn5fAnMppjRfT/view?usp=drive_link",
  },
  {
    title: "2000 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
    url: "https://drive.google.com/file/d/1xglApbyzSW3fsB7dw4IMm01A-8p-mbLi/view?usp=drive_link",
  },
  {
    title: "2000 CALORIES NON-VEGETARIAN MEAL PLAN",
    url: "https://drive.google.com/file/d/1VM865iBFJNbSiRdIk2ABNncLU1V1EIEb/view?usp=drive_link",
  },
  {
    title: "2000 Calories Vegetarian Meal Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1CuZcauwC8LQK6_TX7bts5Q7fFNcLBbjy/view?usp=drive_link",
  },
  {
    title: "2000 Calories Vegetarian Whey Grocery List 1 Week",
    url: "https://drive.google.com/file/d/1wOJR_gau0rnZbvmP7dq9EnZ2Qnzn5eRp/view?usp=drive_link",
  },
  {
    title: "2000 Calories Vegetarian Meal",
    url: "https://drive.google.com/file/d/1cXmT4mp3Vva4HQol82Fx1qpjQr67xFah/view?usp=drive_link",
  },
  {
    title: "2000 CALORIES VEGETARIAN+WHEY MEAL PLAN",
    url: "https://drive.google.com/file/d/1DmlU0EZjIqKvdJTSkeUK0aRLMtsR-NEc/view?usp=drive_link",
  },

];

const getDirectDownloadLink = (driveUrl) => {
  const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
};
function MealPlanfive() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Meal Plans for 2000 Calories</h1>
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
} export default MealPlanfive;
