import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// Components
import { DataGrid } from "@mui/x-data-grid";
import { cyan } from "@mui/material/colors";

const QuestionsTable = ( {questions, isSelectTable, handleSelect}) => {

   const dispatch = useDispatch();
   useEffect(() => {

   }, []);
  
   //const questions = useSelector((state) => state.questions);
   

   const columns = [
		{ field: "id", headerName: "ID", width: 90, hide: true, GridColDef: false },
		{
			field: "topic",
			headerName: "Topic",
			flex: 0.2,
			editable: false,
			sortable: false,
		},
		{
			field: "questionDescription",
			headerName: "Question Description",
			flex: 1,
         wordwrap: true,
			sortable: false,
		},
		{
			field: "difficulty",
			headerName: "Difficulty",
			flex: 0.2,
			editable: false,
			sortable: false,
		}
 	];
   if(!isSelectTable) {
      columns.push({ field: "Score", headerName: "Score", type: 'number', editable: true, sortable: false})
   }
   const rows = [];
   console.log("TESTING: ", questions);
   questions.forEach((question) => {
      rows.push({
         id: question._id,
         topic: question.topic,
         questionDescription: question.question,
         difficulty: question.difficulty,
      }); 

   });


   return (
      <div className="questions-table">
         <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
               rows={rows}
               columns={columns}
               pageSize={5}
               rowsPerPageOptions={[5]}
               
               checkboxSelection
               disableSelectionOnClick
               onSelectionModelChange = {item => handleSelect(item)}
               sx={{
                  bgcolor: "white",
                  boxShadow: 2,
                  border: 1,
               }}
            />
         </div>
      </div>
   );
};

export default QuestionsTable;