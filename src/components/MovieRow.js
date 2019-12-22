import React from 'react';

class MovieRow extends React.Component{

    viewMovie(){
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id;

        window.location.href=url;
    }

render(){
    
    return <div className="movieRows" key={this.props.movie.id}>
    <div className="app-img">
    <img alt="movie-poster" width="120" src={this.props.movie.poster_src}/>
    </div>
    <div className="movie-description">
    <div className="movie-title">
    <h3>{this.props.movie.title}</h3>
    </div> 
    <div className="movie-overview">
    <p>{this.props.movie.overview}</p>
    </div> 
    <div className="movie-view">
    <input type="button" className="viewbtn" onClick={this.viewMovie.bind(this)} value="view" />
    </div> 
    </div>
    </div>
    
//     <table key={this.props.movie.id}>
//     <tbody>
//       <tr>
//         <td>
//           <img alt="movie-poster" width="120" src={this.props.movie.poster_src}/>
//         </td>
//         <td>
//           <h3>{this.props.movie.title}</h3>
//           <p>{this.props.movie.overview}</p>
//           <input type="button" className="viewbtn" onClick={this.viewMovie.bind(this)} value="view" />
//         </td>
//         </tr>
//     </tbody>

//   </table>
}
}

export default MovieRow;