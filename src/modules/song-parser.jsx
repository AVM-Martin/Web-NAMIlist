import dateFormat from "dateformat"


function toLocalDate(epoch) {
  let videoDate = new Date(epoch * 1000);
  return dateFormat(videoDate, "dd mmmm yyyy, HH:MM (Z)");
}


function songParser(data) {
  let result = [];

  for (let videoId in data) {
    data[videoId]["songs"].forEach((song) => {
      result.push({
        videoDate: toLocalDate(data[videoId]["epoch"]),
        videoId: videoId,
        startTime: song[0],
        title: song[1],
        alttitle: song[2],
        artist: song[3],
      });
    });
  }

  return result;
}


export default songParser;
