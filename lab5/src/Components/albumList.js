import React from 'react';
import axios from 'axios';

export default class albumList extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const albums = res.data;
        this.setState({ albums });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.albums
            .map(albums =>
              <li key={albums.id}>{albums.title}</li>
            )
        }
      </ul>
    )
  }
}