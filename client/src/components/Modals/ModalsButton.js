import React from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";


// Get the current ID

const ModalsButton = ({text, action, color}) => {

	return(
		<Button
               variant="contained"
               color= {color}
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
				  marginTop: "10px"
               }}
               onClick={action}
            >
               {text}
    </Button>);
	
};

export default ModalsButton;
