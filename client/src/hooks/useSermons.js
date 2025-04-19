import { useState, useEffect } from "react";

export function useSermons() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    fetch("/api/sermons")
      .then((res) => res.json())
      .then((data) => setSermons(data));

    console.log(sermons);
  }, []);

  return sermons;
}
