import React, { Component } from 'react';
import SongListItem from './SongListItem';


class SongList extends Component {
  
    render() {
      return (
        <div>
            <table className='ListTabel'>
              <tbody>
                <tr className="song-header">  
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                    <th></th>
                </tr>


                {
                    this.props.songs.map((song) => {
                    return (<SongListItem key={song.id} data={song} />)
                    })
                }

         


             </tbody>  
            </table>
        </div>
      );
    }
}
  
  
  export default SongList;