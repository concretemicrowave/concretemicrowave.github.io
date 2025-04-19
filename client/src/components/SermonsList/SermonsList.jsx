import LatestSermon from "./LatestSermon";
import "./SermonsList.css";
import { extractVideoId } from "../../utils/SermonsUtils";
import { useSermons } from "../../hooks/useSermons";

function SermonsList() {
  const sermons = useSermons();
  const [latest, ...others] = sermons;

  return (
    <div className="sermons-wrapper">
      {latest && <LatestSermon latest={latest} />}
      <div className="sermons-list">
        {others.map((sermon, index) => (
          <div key={index} className="sermon-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${extractVideoId(sermon.youtubeLink)}`}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="sermon-details">
              <h3>{sermon.title}</h3>
              <p className="sermon-date">{sermon.date}</p>
              <p>{sermon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SermonsList;
