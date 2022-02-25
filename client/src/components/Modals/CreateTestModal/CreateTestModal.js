import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Components
import Questions from "../../Questions/Questions";

// CSS
import "./CreateTestModal.css";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "80%",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const CreateTestModal = () => {
   // console.log("CheckboxDisplay: ", checkboxDisplay)

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <div>
         <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            sx={{
               marginBottom: "10px",
            }}
            onClick={handleOpen}
         >
            Create a Test
         </Button>
         <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
               </Typography>
               <div className="test-modal-questions-container">
                  <Questions />
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default CreateTestModal;
