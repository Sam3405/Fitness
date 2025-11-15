import React from 'react'
const pdfLinks = [
    {
        title: "2800 CALORIES NON-VEGETARIAN+WHEY MEAL PLAN",
        url: "https://drive.google.com/file/d/1a-qjnVEwpsdPBnMUXhSXLqxeXLJliKVl/view?usp=drive_link",
    },
    {
        title: "2800 Calories Eggetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1cML-nzj1MqZIcvo7b4Fl93w-L08aE31P/view?usp=drive_link",
    },
    {
        title: "2800 Calories Eggetarian Whey Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1FWN4bZ3RYrkeDx7cHF2ecILPxseppYgI/view?usp=drive_link",
    },
    {
        title: "2800 Calories Eggetarian",
        url: "https://drive.google.com/file/d/1H_hhQ2ebis4Ja44x7MFDCgCHS4HVl3Cf/view?usp=drive_link",
    },
    {
        title: "2800 Calories Eggetarian+Whey",
        url: "https://drive.google.com/file/d/1dt2PlyEMQPSpZxIGopHT0rmnVMDGVur1/view?usp=drive_link",
    },
    {
        title: "2800 Calories Non Vegetarian Meal Grocery List 1  Week",
        url: "https://drive.google.com/file/d/18G96hKLlZsgOHvTfpqj9bWhk5a0pYmp0/view?usp=drive_link",
    },
    {
        title: "2800 Calories Non Vegetarian + Whey Meal Plan  Grocery List - 1 Week",
        url: "https://drive.google.com/file/d/1AYBakhfH9LnztYoNLNf6i6lT95khrgAs/view?usp=drive_link",
    },
    {
        title: "2800 CALORIES NON-VEGETARIAN MEAL PLAN",
        url: "https://drive.google.com/file/d/1X8QQvYlB-tg0mjNF14xGobY9p6ksCMfF/view?usp=drive_link",
    },
    {
        title: "2800 Calories Vegetarian Meal Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1lyrYOxq7ctUlSkeogUZaxn6cht3FKVMJ/view?usp=drive_link",
    },
    {
        title: "2800 Calories Vegetarian Whey Grocery List 1 Week",
        url: "https://drive.google.com/file/d/1T-S0XWRq3fviZc_U9oAUnGROtq02r4y_/view?usp=drive_link",
    },
    {
        title: "2800 Calories Vegetarian Meal",
        url: "https://drive.google.com/file/d/1VTqGsxaZYnqVVpexKq414phKP-xhNdlG/view?usp=drive_link",
    },
    {
        title: "2800 CALORIES VEGETARIAN+WHEY MEAL PLAN",
        url: "https://drive.google.com/file/d/15OFs1H7eSoGDFDqsFy7La9QtV-UdgwRP/view?usp=drive_link",
    },

];

const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
};

function MealPlanthirteen() {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Meal Plans for 2800 Calories</h1>
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

export default MealPlanthirteen;
