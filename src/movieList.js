import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MovieCard from './movieCard'
import ModalMovie from './addMovie'

import './stylemovie.css'
import spinerHoc from './spinerHoc';
const  movie =[
    {
      "title": "dead pool",
      "poster":"http://www.mattv.ca/wp-content/uploads/2017/03/deadpool-2-featured-image.jpg",
      "plot": "Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.",
      "imdbRating": "1"
    },
    {
      "title": "suicide squad",
      "plot": "Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.",
      "poster": "https://i1.wp.com/smallthings.fr/wp-content/uploads/2016/08/suicide-squad-poster-big.jpg?resize=612%2C380&ssl=1",
      "imdbRating": "5"
    },
    {
      "title": "avengers",
      "plot": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      "poster": "http://fr.web.img3.acsta.net/medias/nmedia/18/85/31/58/20042068.jpg",
      "imdbRating": "3"
    },
    {
      "title": "spy",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/91LGIQmcNkL._RI_SX200_.jpg",
      "plot": "Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.",
      "imdbRating": "3"
    },
    {
      "title": "brothers grimpsy",
      "plot": "Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.",
      "poster": "https://cdn.traileraddict.com/content/columbia-pictures/grimsby-poster-7.jpg",
      "imdbRating": "5"
    },
    {
      "title": "phantom thread",
      "plot": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      "poster": "http://fr.web.img3.acsta.net/c_215_290/pictures/17/12/21/15/02/3149649.jpg",
      "imdbRating": "1"
    },
    {
      "title": "Friends",
      "poster": "https://www.movieposter.com/posters/archive/main/52/MPW-26106",
      "plot": "Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.",
      "imdbRating": "4"
    },
    {
      "title": "the nun",
      "plot": "Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCBM-xF4fhB-QMahDeWvgFL5YpSh9EqMEE2G3r5Cr_QNKMKQd",
      "imdbRating": "3"
    }
    
  ];
  function searchFor(searchValue){
      return function(x){

  return  x.title.toLowerCase().includes(searchValue.toLowerCase()) ;
  
  
      } /*includes to see if it include what we search*/
  }
 class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchValue : "",
            movie : movie ,
            searchrate:1
        }
       
    }
  serachHandler =(event) =>{
      this.setState({searchValue: event.target.value })
     
  }
  newmovie = value => {
    this.setState({
      movie: this.state.movie.concat({ ...value })
    });
  };

  rateChange = event =>{
    if(event.target.value !="choose rate..")

    this.setState({searchrate: event.target.value})
  }
    render() {
 
        return (
            <Container>
                <input type="text" className="form-control"
                 onChange={this.serachHandler}
                 value={this.state.searchValue}  placeholder="Search Movies"/>
                 
                 <select className="custom-select ml-50" 
                 onChange={this.rateChange}>
                 <option className="selected">choose rate..</option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>

                 </select>
                <Row className="my-row">
                   
{         this.state.movie.filter(searchFor(this.state.searchValue)  ).map(el =>el.imdbRating>=this.state.searchrate? <MovieCard test={el} />:true) }        
  
                       
                        
               <ModalMovie  movie ={this.newmovie}/>     
                </Row>
  
            </Container>
        );
    }
}
export default spinerHoc(MovieList)