import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "", link: "https://youtu.be/kxoBjTxWys4?si=kezt4D7Bj0cdYNjQ" },
    { title: "", link: "https://youtu.be/1_OiZnVPNqY?si=YzY2CcZ393TktQeI" },
    { title: "", link: "https://youtu.be/xbw82vxKDLc?si=C058XGiwc7iAp0X_" },
    { title: "", link: "https://youtu.be/yYJO3E5cQ6I?si=DnWKC5QzQy-HRmJ0" },
    { title: "", link: "https://youtu.be/EhCmgogjCOo?si=9vQlEC4eVvuO_gOw" },
    { title: "", link: "https://youtu.be/cbdkNk7Cy74?si=kuFE4G335Vets7oN" }
];

function Legs() {
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
    );
}

export default Legs;
