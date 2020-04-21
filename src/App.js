import React, { Component } from 'react';
//import SongForm from './SongForm';
import SongList from './SongList';
import './App.css';
class SongOverview extends Component {
      
  constructor() {
    super()
    this.state = 
    {
      songs:[
        {id:1, title: 'hoi', artist:'bert', genre:'Pop', rating:'1'},
        {id:2,title: 'hoi', artist:'bert', genre:'Pop', rating:'1'}
        ]      
      }
      this.addSong = this.addSong.bind(this)
      
    
    
  }


  addSong(event){
    
     this.setState({
            songs: this.state.songs
          })
          this.state.songs.push(
            {
              id:Math.random(),
              title: document.getElementById('title').value,
              artist: document.getElementById('artist').value,
              genre: document.getElementById('genre').value,
              rating: document.getElementById('rating').value          
          });
    
  }

 

  

  render(){
    return (
      <div>
      <form>
        <table className='AddFormTabel'>
            <tbody>
                <tr className="song-header">  
                <th className="song-row__item">Song</th>
                <th className="song-row__item">Artist</th>
                <th className="song-row__item">Genre</th>
                <th className="song-row__item">Rating</th>
                <th></th>
                </tr>
                <tr className="song-input">  
                <th><input id='title'/></th>
                <th><input id='artist' /></th>
                    <th>
                        <select id='genre'>
                            <option>Pop</option>
                            <option>Rock</option>
                            <option>Indi</option>
                        </select>
                    </th>
                    <th>
                        <select id='rating'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </th>
                <th><input type='submit' onClick={this.addSong} value='versturen'/></th>
                </tr>
            </tbody>
        </table>
        </form>
        
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongOverview;
