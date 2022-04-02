import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from "@mui/material";
import "./Student.css";

const Student = ({ answer, buttonName1, buttonName2, onButtonClick1, onButtonClick2}) => {
   // console.log(answer);
   return (
      <Card sx={{ maxWidth: 345 }}>
         <Typography variant="h3" align="center" gutterBottom>
            {answer.username}
         </Typography>
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
                  onButtonClick1(answer._id, answer.test_id, answer.username);
               }}
            >
               {buttonName1}
            </Button>
         </CardActions>
      </Card>
   );
};

export default Student;
