import React from "react";
import $ from "jquery";

import webname from "./webname"


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      component: props.component,
      name: props.name,
    };
  }

  _handleClick() {
    $("div#content").children().addClass("d-none");
    $(this.state.component).toggleClass("d-none");
  }

  render() {
    return (
      <li class="nav-item">
        <div class="nav-link" onClick={ this._handleClick }>
          { this.state.name }
        </div>
      </li>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <div class="navbar-brand">{ webname }</div>

          <button id="navbar-button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Menu component="div#songs" name="Song List" />
              <Menu component="div#notes" name="Notes" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header;
