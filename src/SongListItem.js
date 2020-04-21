import React, { Component } from 'react';

class SongListItem extends Component {
    constructor() {
        super()
      
    }


  

    render() {
      return (
                <tr className="song-header"  id={this.props.data.id}>  
                    <td>{this.props.data.title}</td>
                    <td>{this.props.data.artist}</td>
                    <td>{this.props.data.genre}</td>
                    <td>{this.props.data.rating}</td>
      {/*  <td><button onClick={style={{display: this.state.showStore ? 'block' : 'none' }}}>Delete</button></td>*/}
                </tr>

        
      );
    }
}
  
  
  export default SongListItem;