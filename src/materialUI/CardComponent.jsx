import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MultiActionAreaCard = ({img, name, branch, domain, mobile, email}) => {
  return (
    <Card className="Main_card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={img}
          alt="green iguana"
          className="image"
        />
        <CardContent>
          <Typography  gutterBottom variant="h8" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {branch}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {domain} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mobile}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}  
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
};

export default MultiActionAreaCard
