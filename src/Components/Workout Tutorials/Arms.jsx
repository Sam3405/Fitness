import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "Intense Arm Workout", link: "https://youtu.be/kLHZmvAG5CI?si=_qq7H8ntbyOoxuuJ" },
    { title: "Biceps & Triceps Training", link: "https://youtu.be/3XpvcJ8CwGE?si=GLioDGg5p6C1PgdH" },
    { title: "15 Min Arm Shred", link: "https://youtu.be/qkPU0qX79PM?si=Yorz547ndvfFX6_J" },
    { title: "No Equipment Arm Workout", link: "https://youtu.be/baGe_MjwqyE?si=LNh21qoWmNGwsDXG" },
    { title: "Dumbbell Arm Routine", link: "https://youtu.be/ziOfgM47z9c?si=b8eTcgc6L7YQgCjG" },
    { title: "Home Arm Workout", link: "https://youtu.be/9ShRmxiqqV8?si=6Pu_2M4begp8O2Os" }
];

function Arms() {
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
            {/* Adding hover effect via inline style on hover */}
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

export default Arms;
