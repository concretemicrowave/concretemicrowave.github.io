import { useState } from "react";
import "./SermonsList.css";

const sermons = [
  {
    title: "April 14, 2025 – The Power of Grace",
    description:
      "An inspiring sermon on how grace transforms our lives and relationships.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    title: "April 7, 2025 – Walking by Faith",
    description:
      "This message encourages believers to trust in God even when the path is unclear.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    title: "March 31, 2025 – Love in Action",
    description:
      "A call to show Christ’s love through tangible acts of service.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
  {
    title: "March 24, 2025 – The Peace that Surpasses",
    description:
      "Exploring the peace of God in a world full of anxiety and fear.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
  },
];

function SermonsList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const [latest, ...others] = sermons;

  return (
    <div className="sermons-wrapper">
      <div className="latest-sermon">
        <h2 className="latest-title">Latest Sermon {latest.title}</h2>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${extractVideoId(latest.youtubeLink)}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>{latest.description}</p>
      </div>
      <div className="sermons-list">
        {others.map((sermon, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`sermon${isOpen ? " open" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="sermon-header">{sermon.title}</div>
              <div className="sermon-content">
                {isOpen && (
                  <>
                    <div className="video-wrapper">
                      <iframe
                        src={`https://www.youtube.com/embed/${extractVideoId(latest.youtubeLink)}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p>{sermon.description}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SermonsList;
