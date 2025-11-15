import React from 'react'

const pdfLinks = [
    {
        title: "Warm-Up Guide",
        url: "https://drive.google.com/file/d/1Iwf6xd-UvcycILriUwPdTS7P6rB4PSlI/view?usp=drive_link",
    },
    {
        title: "3 Days Training Plan",
        url: "https://drive.google.com/file/d/14nWH-CF66wN_ltS52bvYSV-owpckjPyo/view?usp=drive_link",
    },
    {
        title: "6 Days Training Plan",
        url: "https://drive.google.com/file/d/1jI4lm0yMBnKlob3tS4_cTyUcs29vrY-t/view?usp=drive_link",
    }
]




const getDirectDownloadLink = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/); // Extract Google Drive file ID
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
};

function Routine() {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Work Out Routine Plan</h1>
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

export default Routine;
