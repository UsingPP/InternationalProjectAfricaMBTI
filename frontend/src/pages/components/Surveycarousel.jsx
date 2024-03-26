import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/carouselSliderCss.css";
import { useNavigate } from "react-router-dom";
import {Card, CardMedia, CardContent, CardActions, CardHeader, Typography,Button,Grid,Box ,Stack} from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Container } from "@mui/system";
const useStyle = makeStyles({
  slider_list : {
    padding : 10
  },
})

function Surveycarousel(props) {
  console.log(props)
  const navigate = new useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
  };
  
  const classes = useStyle()

  return (
    <Container>
      <Slider {...settings} >
      {props.surveys.map((survey)=>(
        <Box sx = {{padding :3}}>
          <Card className = {classes.slider_list}>
            <CardMedia sx = {{height : 140}}image = {survey.image}></CardMedia>
            <CardContent>
              <Typography variant = "h5">
                {survey.title}
              </Typography>
              <Typography fontSize={14}    color ="text.secondary" sx={{ 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, // 최대 표시할 줄 수를 지정합니다. 여기서는 4줄로 설정했습니다.
                  height: '63px', // 텍스트가 표시될 최대 높이를 지정합니다.
                }}>
                  {survey.describe}
              </Typography>
            </CardContent>
            <CardActions sx = {{display : "flex", justifyContent : "flex-end"}}  onClick = {() => {navigate(survey.link);
            }}>
                <Button variant = "outlined" color = "success">{props.btntxt}</Button>
            </CardActions>
          </Card></Box>
      ))}
      </Slider></Container>
  );

}

export default Surveycarousel;