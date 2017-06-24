export default class YouTubeIE {

  static get _VALID_URL() {
    return /(?:https?:\/\/)(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([0-9A-Za-z_-]{11})/;
  }

  getVideoId(url) {
    let matchObj = url.match(YouTubeIE._VALID_URL);
    if (!matchObj) {
      return null;
    }
    return matchObj[1];
  }
}
