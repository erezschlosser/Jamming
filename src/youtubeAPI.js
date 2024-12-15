const fetchYouTubeVideos = async (query) => {
    const apiKey = "AIzaSyACTrsNrSqj7F3-I-vnBiw2l1DQ4BLkXck";
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
      query
    )}&key=${apiKey}&maxResults=10`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
  
      const data = await response.json();
      return data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export default fetchYouTubeVideos;