import React from 'react'
const pdfLinks = [
    {
      title: "2500 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1BgC8gIMThznUVT5ictsBlWbHzQieFixs/view?usp=drive_link",
    },
    {
      title: "2500 Calories Eggetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1oe2NKwXoW90ywzrSYP3HEEZmm1Bw7C2r/view?usp=drive_link",
    },
    {
      title: "2500 Calories Eggetarian Whey Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1olwxljDn9GrklbEYNtBNXzoOQTbedFiC/view?usp=drive_link",
    },
    {
      title: "2500 Calories Eggetarian",
      url: "https://drive.google.com/file/d/1VdBlH1i00rrhy_G1ZRsG82gInARsw3kb/view?usp=drive_link",
    },
    {
      title: "2500 Calories Eggetarian+Whey",
      url: "https://drive.google.com/file/d/1kiJL2FG5QqMwfptfYdrvsJXavfNpxhbT/view?usp=drive_link",
    },
    {
      title: "2500 Calories Non Vegetarian Meal Grocery List 1  Week",
      url: "https://drive.google.com/file/d/1426WLyjTFrkm9h9yAONUMY7gDgrvQf0x/view?usp=drive_link",
    },
    {
      title: "2500 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
      url: "https://drive.google.com/file/d/1B5YnQ-zt4QRaroArgP4V1-8weW4nSrxf/view?usp=drive_link",
    },
    {
      title: "2500 CALORIES NON-VEGETARIAN MEAL PLAN",
      url: "https://drive.google.com/file/d/1SA9q6IrK_y6aof1yam6nec-9LJZGJe0M/view?usp=drive_link",
    },
    {
      title: "2500 Calories Vegetarian Meal Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1BrLE3wQBrTIZVwmhNUaPrF6gdLpkszKe/view?usp=drive_link",
    },
    {
      title: "2500 Calories Vegetarian Whey Grocery List 1 Week",
      url: "https://drive.google.com/file/d/1eHTS6ak9CBTmUzNNqj7-B3uGKoB-s4J2/view?usp=drive_link",
    },
    {
      title: "2500 Calories Vegetarian Meal",
      url: "https://drive.google.com/file/d/1wxt69yVQgyCve_YyMLI57QBK_10oczqn/view?usp=drive_link",
    },
    {
      title: "2500 CALORIES VEGETARIAN+WHEY MEAL PLAN",
      url: "https://drive.google.com/file/d/1ff_BvY6G7TW_fAApDDaq2EHJSv5TcKXK/view?usp=drive_link",
    },
  
  ];
  
  const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };


function MealPlanten() {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2500 Calories</h1>
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
    )
};

export default MealPlanten;
