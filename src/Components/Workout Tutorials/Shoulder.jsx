import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "", link: "https://youtu.be/Cj21OuGZ3o8?si=jXe7VY-dZD7MXUpE" },
    { title: "", link: "https://youtu.be/KKVAT048aCY?si=uRnhk5OItmhtBoKS" },
    { title: "", link: "https://youtu.be/TYecA8-ox4k?si=aBhVQGQ5oSo9gF8n" },
    { title: "", link: "https://youtu.be/ZRJBiX_rCE4?si=QCwKlqZeBkyiwu5T" },
    { title: "", link: "https://youtu.be/daOQGOjMEP4?si=ZjcyGnPMe4Rs3vtO" },
    { title: "", link: "https://youtu.be/j4C_i5L28tw?si=SdmJjmPfx2AVPX8n" }
];

function Shoulder() {
    const styles = {
        galleryContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            padding: "20px"
        },
        videoCard: {
            background: "#fff",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            textAlign: "center"
        },
        videoCardHover: {
            transform: "scale(1.05)"
        },
        title: {
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#333"
        }
    };

    return (
        <div>
            <div>
                <div style={styles.galleryContainer}>
                    {videos.map((video, index) => (
                        <div key={index} style={styles.videoCard}>
                            <h3 style={styles.title}>{video.title}</h3>
                            <ReactPlayer
                                url={video.link}
                                width="100%"
                                height="250px"
                                controls={true}
                                config={{ youtube: { playerVars: { modestbranding: 1, rel: 0 } } }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shoulder;
