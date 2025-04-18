import LatestSermon from "./LatestSermon";
import "./SermonsList.css";
import { extractVideoId } from "../../utils/SermonsUtils";

const sermons = [
  {
    date: "April 14, 2025",
    title: "The Power of Grace",
    description:
      "An inspiring sermon on how grace transforms our lives and relationships.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    date: "April 7, 2025",
    title: "Walking by Faith",
    description:
      "This message encourages believers to trust in God even when the path is unclear.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    date: "March 31, 2025",
    title: "Love in Action",
    description:
      "A call to show Christ’s love through tangible acts of service.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    date: "March 24, 2025",
    title: "The Peace that Surpasses",
    description:
      "Exploring the peace of God in a world full of anxiety and fear.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
];

function SermonsList() {
  const [latest, ...others] = sermons;

  return (
    <div className="sermons-wrapper">
      <LatestSermon latest={latest} />
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
