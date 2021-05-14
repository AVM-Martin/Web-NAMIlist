import React from "react";

import webname from "./components/webname"


class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      class: props.class,
    };
  }

  render() {
    return (
      <div id={ this.state.id } class={ this.state.class }>
        <div class="h1">Notes</div>

        This is a simple website that contains a list of <a href="https://twitter.com/namirin_2525">*Namirin</a>'s <b>public-only</b> karaoke and cover songs. You can search the song (by its JP title, EN title, artist name, or stream/video upload date) and click it to access the video (it will be redirected to her youtube). Do not forget to support *Namirin through <a href="https://www.patreon.com/namirin">her patreon</a>.

        <div class="h3 mt-3">Developer Notes</div>
        <b>{ webname }</b> is built with ReactJS + bootstrap and hosted on GH Pages. I spent approx. 4 hours of coding and 6++ hours of data collection + data parsing, all by myself. If you encounter any issues or have any suggestions, do not hesitate to contact me (AVM.Martin) on my <a href="https://twitter.com/AVM_Martin">twitter</a>. Please contact me if you want to reuse this website to host another vtuber karaoke setlists (as long as someone wants to collect and parse all data by themselves).

        <div class="h3 mt-3">Credits</div>
        Special thanks to all timestampers!
        <ul>
          <li>ましー</li>
          <li>floyd / / lewlasdfghjkl</li>
          <li>Quacky</li>
        </ul>
      </div>
    );
  }
}


export default Notes;
