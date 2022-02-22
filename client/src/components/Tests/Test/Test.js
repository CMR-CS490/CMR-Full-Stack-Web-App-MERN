import React from "react";
import moment from "moment";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Test = ({ test, setCurrentId }) => {
   return (
      <Card>
         {/* <CardMedia image={test.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={test.title} /> */}
         <CardMedia component="img" src={test.selectedFile} />
         <div>
            <Typography variant="h6">{moment(test.createdAt).fromNow()}</Typography>
         </div>
         <div>
            <Button style={{ color: "black" }} size="small" onClick={() => setCurrentId(test._id)}>
               <MoreHorizIcon foneSize="default"/>
            </Button>
         </div>
         <div>
            <Typography variant="body2" color="textSecondary">
               {test.creator}
            </Typography>
         </div>
         <Typography variant="h5" gutterBottom>{test.title}</Typography>
         <CardContent>
            <Typography variant="h5" gutterBottom>
               {test.description}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small" color="primary" onClick={() => {}}>
               <DeleteIcon fontsize="small" />
               Delete
            </Button>
         </CardActions>
      </Card>
   );
};

export default Test;
