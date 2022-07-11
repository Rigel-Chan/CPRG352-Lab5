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

  deleteRow(id, e){
    axios.delete('https://jsonplaceholder.typicode.com/photos/${id}')
    .then(res => {
      const albums =  this.state.albums.filter(item => item.id !== id);;
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
              <td style={{width:"100px"}}><button key={albums.id} onClick={(e)=>this.deleteRow(albums.id,e)}>Delete</button></td>
              </tr>
            )
        }
        </div>





    )
  }
}