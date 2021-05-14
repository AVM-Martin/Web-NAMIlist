import React, { Component } from "react";
import { connect } from 'react-redux';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from "griddle-react";

import rowLayout from "./components/song-card";


const newLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div> <Filter /> <Table /> <Pagination /> </div>
);

const CustomRowComponent = connect((state, props) => ({
  rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
}))(({ rowData }) => rowLayout(rowData) );

const CustomTableComponent = OriginalComponent => class CustomTableComponent extends Component {
  static contextTypes = { components: React.PropTypes }
  render() { return <this.context.components.TableBody /> }
}

const CustomTableBody = ({ rowIds, Row, style, className }) => (
  <div style={style} className={className}>
    { rowIds && rowIds.map(r => <Row key={r} griddleKey={r} />) }
  </div>
);


class SongTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      class: props.class,
      songFetcher: props.fetch,
      songParser: props.parser,
    };
  }

  async componentDidMount() {
    let data = (await this.state.songFetcher.get()).data;
    this.setState({ data: this.state.songParser(data) });
  }

  render() {
    return (
      <div id={ this.state.id } class={ this.state.class }>
        <div class="h1">Song List</div>

        <Griddle
          data={ this.state.data }
          plugins={[ plugins.LocalPlugin ]}
          pageProperties={{ pageSize: 10 }}
          components={{
            Layout: newLayout,
            Row: CustomRowComponent,
            TableContainer: CustomTableComponent,
            TableBody: CustomTableBody,
          }}
        >
          <RowDefinition>
            <ColumnDefinition id="title" />
            <ColumnDefinition id="alttitle" />
            <ColumnDefinition id="artist" />
            <ColumnDefinition id="videoDate" />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}


export default SongTable;
