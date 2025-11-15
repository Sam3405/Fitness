import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
    { title: "", link: "https://youtu.be/V0wTEkW3u6Y?si=zFCgqp4pFf_aT1BY" },
    { title: "", link: "https://youtu.be/VqIwC93h1Iw?si=MOcfyyJ7K6hy7DB9" },
    { title: "", link: "https://youtu.be/lCo0BrOXiKU?si=UVkkIj0D_AZVNhF4" },
    { title: "", link: "https://youtu.be/Vocz-MPF6Tk?si=I6CytmLR7dzlsr6l" },
    { title: "", link: "https://youtu.be/USC_ZiMjH3I?si=G02LnI38S_mBy6mK" },
    { title: "", link: "https://youtu.be/hlgUKkE45d4?si=LkEl30uxMLlJLWjk" }
];

function Triceps() {
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

export default Triceps;