import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "Chest Workout for Strength", link: "https://youtu.be/mFwvlbe9K5I?si=-Gze_HHp0E9H5cHV" },
    { title: "Best Chest Exercise Routine", link: "https://youtu.be/t1pmh-ajpqI?si=4U6gkhkSUKMcGGhp" },
    { title: "Dumbbell Chest Workout", link: "https://youtu.be/ukmFw90bEoI?si=-izHq74StllyDZsl" },
    { title: "Home Chest Workout", link: "https://youtu.be/1JR74Tick_4?si=XpU0MFtBSp7Ng5M8" },
    { title: "Upper Chest Training", link: "https://youtu.be/IL4KTdRLcTM?si=-SAD4yHCzfinDdBM" },
    { title: "Full Chest Workout", link: "https://youtu.be/RdwmWJIg5lI?si=_p-qf_ysro4zvHoX" }
];

function Chest() {
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

export default Chest;
