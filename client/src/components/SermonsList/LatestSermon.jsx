import "./LatestSermon.css";
import { extractVideoId } from "../../utils/SermonsUtils";

function LatestSermon({ latest }) {
  return (
    <div className="latest-sermon">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${extractVideoId(latest.youtubeLink)}`}
          title={latest.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="latest-text">
        <div>
          <h3 style={{ marginTop: 0, fontWeight: "500" }}>LATEST</h3>
          <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>{latest.date}</p>
          <h2 style={{ margin: 0 }}>{latest.title}</h2>
        </div>
        <p>{latest.description}</p>
      </div>
    </div>
  );
}

export default LatestSermon;
