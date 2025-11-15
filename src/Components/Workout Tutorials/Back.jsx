import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "Back Strength Workout", link: "https://youtu.be/gaxmEx0rTkA?si=bO_EuYUOOKivzGvF" },
    { title: "Upper & Lower Back Training", link: "https://youtu.be/ekxJohNbkV8?si=Yc5Os0pFmvv7DIwK" },
    { title: "Dumbbell Back Workout", link: "https://youtu.be/EWroD_TpRwQ?si=_LOxYupcZYjckXGP" },
    { title: "Home Back Workout", link: "https://youtu.be/uedpewxah-g?si=NhDBsApS39Z9wUhp" },
    { title: "15-Min Back Exercise", link: "https://youtu.be/DSqIXJ7Q2DY?si=kPjrvAJPknZD8I_H" },
    { title: "Lower Back Pain Relief", link: "https://youtu.be/yiEkClQV4eQ?si=sUGWYC-2tbdhW7On" }
];

function Back() {
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
                <div key={index} style={styles.videoCard} className="video-card">
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
            <style>
                {`
                    .video-card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                    }
                `}
            </style>
        </div>
    );
}

export default Back;
