import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getTests } from '../../actions/tests'

// Components
import Tests from "../../components/Tests/Tests";
import Form from "../../components/Form/Form";

// Images
import exam from "../../images/exam.png";


const Homepage = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getTests());
   }, [dispatch]);

   return (
      <div>
         <Container>
            <AppBar  position="static" color="inherit">
               <Typography variant="h2" align="center">
                  Exams
               </Typography>
               <img  src={exam} alt="Exams" height="60" />
            </AppBar>
            <Grow in>
               <Container>
                  <Grid container jusitfy="space-between" alignItems="strech" spacing="3">
                     <Grid item xs={12} sm={7}>
                        <Tests />
                     </Grid>
                     <Grid item xs={12} sm={4}>
                        <Form />
                     </Grid>
                  </Grid>
               </Container>
            </Grow>
         </Container>
      </div>
   );
};

export default Homepage;
