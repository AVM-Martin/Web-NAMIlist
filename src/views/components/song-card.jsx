function rowLayout(data) {
  return (
    <div class="my-3">
      <a
        class="text-decoration-none text-body"
        href={ `https://www.youtube.com/watch?v=${data.videoId}&t=${data.startTime}s` }
        target="blank"
      >
        <div class="card">
          <div class="card-header">
            <div class="h4 card-title">{ data.title }</div>
          </div>
          <div class="card-body">
            Alt Title: { data.alttitle }<br/>
            Artist: { data.artist }
          </div>
          <div class="card-footer text-end">
            { data.videoDate }
          </div>
        </div>
      </a>
    </div>
  );
}


export default rowLayout;
