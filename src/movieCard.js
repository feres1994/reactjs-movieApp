import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const DisplayStars = (props) => {
  let arr = []
  for (let i = 1; i < 6; i++) {
   if(i<= props.raters){
arr.push('★')
   }
   else {
arr.push('☆')
   }
  
  }
  return arr
}
const MovieCard = (props) => {
  return (
    <div>
      <Col>
        <Card className="my-card">
          <CardBody>
            <CardTitle className="title">{props.test.title}</CardTitle>
            <CardSubtitle><DisplayStars raters={props.test.imdbRating} /></CardSubtitle>
          </CardBody>
          <img width="298px" height="300px" src={props.test.poster} alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#" className="btn btn-primary">watch Now</CardLink>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default MovieCard;