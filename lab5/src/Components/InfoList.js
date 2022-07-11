import React from 'react';
import axios from 'axios';


export default class InfoList extends React.Component {
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
        <div>
        {
            this.state.albums
            .map(albums =>
              <tr><td key={albums.id}>{albums.id}</td>
              <td key={albums.id}>{albums.title}</td>
              <td><img key={albums.id} src={albums.thumbnailUrl} alt="test"/></td>
              <td style={{width:"100px"}}><button key={albums.id} onClick={axios.delete(`https://jsonplaceholder.typicode.com/photos/${albums.id}`)}>Delete</button></td>
              </tr>
            )
        }
        </div>





    )
  }
}