import React from 'react'

const pdfLinks = [
    {
      title: "2300 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1BKREFYuAmOFB9p3yxRQUZNNi0PjwQXf2/view?usp=drive_link",
    },
    {
      title: "2300 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1QqED0bUrpDnSR26srauD4B07_wR8VxLb/view?usp=drive_link",
    },
    {
      title: "2300 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1SMLGuVYZInVFqh4gv62QP7gO0q5cuZMY/view?usp=drive_link",
    },
    {
      title: "2300 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1nnrC7DvzZUse-svYs8DcB6_tOuUudx6W/view?usp=drive_link",
    },
    {
      title: "2300 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1z5YkN_N0NC815I0R2xUJfEG43eAnQNEd/view?usp=drive_link",
    },
    {
      title: "2300 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1OLVabSOuGg1OiTmKbNpO6VoArWo8hteX/view?usp=drive_link",
    },
    {
      title: "2300 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/1P77-2c336nJBkVpKsr3_0ltNAw-D8_Xe/view?usp=drive_link",
    },
    {
      title: "2300 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1XTSJ6EGComm5PN_fkWc3VCM38yjvbqOJ/view?usp=drive_link",
    },
    {
      title: "2300 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1kbG5EzTKAwecwIbv-IASkhwmyiDKvIng/view?usp=drive_link",
    },
    {
      title: "2300 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1rSinCUTCsEU6zpnfzuTVBMwROlBNjrM6/view?usp=drive_link",
    },
    {
      title: "2300 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1v3NNNdfecd1N__tuOZn_j3L1Va6bvS6m/view?usp=drive_link",
    },
    {
      title: "2300 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/10omC1zYOCZYbBRSkFS-lbtscihX6USpy/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };



function MealPlaneight() {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2300 Calories</h1>
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

export default MealPlaneight;
