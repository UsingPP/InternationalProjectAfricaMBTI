import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carouselSliderCss.css";
import { useNavigate } from "react-router-dom";
import {Card, CardMedia, CardContent, CardActions, CardHeader, Typography,Button,Grid,Box ,Stack} from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Container } from "@mui/system";
const useStyle = makeStyles({
  slider_list : {
    padding : 10
  },
})

function MultipleItems() {
  const navigate = new useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  
  const classes = useStyle()
  const list = [1,2,3,4,5]
  return (
    <Container>
      <Slider {...settings} >
      {list.map((index)=>(
        <Box sx = {{padding :3}}>
          <Card id = {index} className = {classes.slider_list}>
            <CardMedia sx = {{height : 140}}image = "https://avatars.githubusercontent.com/u/114085307?v=4"></CardMedia>
            <CardContent>
              <Typography variant = "h5">
                SURVEY{index}
              </Typography>
              <Typography fontSize={14}    color ="text.secondary" sx={{ 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, // 최대 표시할 줄 수를 지정합니다. 여기서는 4줄로 설정했습니다.
                  height: '63px', // 텍스트가 표시될 최대 높이를 지정합니다.
                }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </CardContent>
            <CardActions sx = {{display : "flex", justifyContent : "flex-end"}}  onClick = {() => {navigate('/home/survey_LeaderShip');
            }}>
                <Button variant = "outlined" color = "success">...show more</Button>
            </CardActions>
          </Card></Box>
      ))}
      </Slider></Container>
  );

}

export default MultipleItems;