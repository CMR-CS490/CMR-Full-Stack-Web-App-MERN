import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from "@mui/material";
import "./Student.css";

const Student = ({ answer, buttonName1, buttonName2, onButtonClick1, onButtonClick2}) => {
   console.log(answer);
   return (
      <Card sx={{ maxWidth: 345 }}>
         <Typography variant="h3" align="center" gutterBottom>
            {answer.username}
         </Typography>
         {/* <div>
        <CardContent>
            <Typography variant='subtitle1' gutterBottom>
                something
            </Typography>
        </CardContent>
    </div>
    <div className='test-creator'>
        <Typography variant='body2' align='right' color='textSecondary'>
            who took it
        </Typography>
    </div> */}
         <CardActions>
            <Button
               variant="contained"
               color="primary"
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
               }}
               onClick={() => {
                  onButtonClick1(answer._id);
               }}
            >
               {buttonName1}
            </Button>
            <Button
               variant="contained"
               color="secondary"
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
               }}
               onClick={() => {
                  onButtonClick2(test);
               }}
            >
               {buttonName2}
            </Button>
         </CardActions>
      </Card>
   );
};

export default Student;
