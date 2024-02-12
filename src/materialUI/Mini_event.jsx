import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Mini_Event = ({desc, e_desc}) => {
  return (
    <Card className="Mainevent_card">
      <CardActionArea>
        <CardContent>
          <Typography  gutterBottom variant="h6" component="div">
            {e_desc}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {desc}  
          </Typography>
        
        
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
};

export default Mini_Event
