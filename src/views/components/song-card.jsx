function rowLayout(data) {
  return (
    <div class="my-3">
      <div class="card">
        <div class="card-header">
          <div class="h4 card-title">{ data.title }</div>
        </div>
        <div class="card-body">
          Alt Title: { data.alttitle }<br/>
          Artist: { data.artist }<br/>
          Video Link: <a
            href={ `https://www.youtube.com/watch?v=${data.videoId}&t=${data.startTime}s` }
            target="blank"
          >Click Here</a>
        </div>
        <div class="card-footer text-end">
          { data.videoDate }
        </div>
      </div>
    </div>
  );
}


export default rowLayout;
