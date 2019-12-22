import React, {Component} from 'react';
import './css/App.css';
import MovieRow from './components/MovieRow.js';
import MovieErr from './components/movieErr.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{

constructor (props) {
  super(props)
  this.state={};
  
  //this.state = {rows: <p>hi</p>} //single

    // const movies =[
    //   {id:0, poster_src:"cinema.svg", title: "Avengers the Begining", overview:"Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name" },
    //   {id:1, poster_src:"cinema.svg", title: "Avengers the End Game", overview:"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, "},
    // ]

    // var movieRows = [];
    // movies.forEach((movie) =>{
    //   const movieRow = <MovieRow passmovie={movie} />
    //   movieRows.push(movieRow);
    // });

    // this.state = {movieRows: movieRows}

this.performSearch("avengers")
} 

performSearch(searchTerm){
  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=0923e7ab9e9ecdc6bfa29590587c12d7&query=" + searchTerm;
  $.ajax({
    url: urlString,  
    success: (searchResults) =>{
      //console.log("fetched data");
      const results = searchResults.results;
      var movieRows = [];
      if(searchResults.results.length<1){
        console.log("error");
        const movieErr = <MovieErr></MovieErr>
        this.setState({movieRows: movieErr})
      }
      else
      results.forEach((movie) =>{
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
      const movieRow = <MovieRow key={movie.id} movie={movie}>{<div class="Parent"></div>}</MovieRow>
        movieRows.push(movieRow);
      })
      this.setState({movieRows: movieRows})
    },
    error: (xhr,status, err) =>{
    }
  })
}

serachChangeHandler(event){
  console.log(event.target.value);
  const searchTerm = event.target.value;
  this.performSearch(searchTerm);
}

render(){
  return (  
    <div className="App bodyDiv">
    <div className="titleBar">
    <span className="app-icon">
    <img alt="app-icon" width="50" src="cinema.svg"/>
    </span>
    <span className="app-title">
    <h1>Movie-DB Search</h1>
    </span>
    </div>
    

      {/* <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app-icon" width="50" src="cinema.svg"/>
            </td>
            <td width="8"></td>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table> */}
      <div className="container">
    <input style={{
      fontSize: 20,
      fontWeight: "bold",
      display: "block",
      width:"50%",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 11,
      margin: "auto",
      marginTop:5,
      outline: 0,
    }} onChange={this.serachChangeHandler.bind(this)} placeholder="Search Your Movie"/>

    {this.state.movieRows}
    </div>
    <div class="contact">
      <div class="container">
        <div class="footer">
          <img width="100" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/79148294_2203364699763580_1501455854409351168_n.jpg?_nc_cat=105&_nc_ohc=TQl4eqTHNWUAQlcUdh8klM4LamKnnzfay8xh2VobfoB9D3a5hxmUddVTw&_nc_ht=scontent-ort2-1.xx&oh=68289771fe4bf26c391f2d4fdf97fd7f&oe=5E6E69DF" alt="Profile"/>
          <p class="credit">
            Designed and developed by Ashok
          </p>
          <p class="license">
            Hosted in Github Pages. Code is licensed under
            <b> MIT</b> and available at <a href="https://github.com/AshokWeber" target="_blank">Github</a>
          </p>
          <div class="copy">
            &copy; 2019 Ashok Gurusamy
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
}

export default App;
