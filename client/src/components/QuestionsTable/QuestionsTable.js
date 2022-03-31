import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// Components
import { DataGrid } from "@mui/x-data-grid";
import { cyan } from "@mui/material/colors";

const QuestionsTable = ( {questions, isSelectTable, handleSelect, questionData, setQuestionData}) => {

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
      columns.push({ field: "score", headerName: "Score", type: 'number', editable: true, sortable: false})
   }
   const handleTestScoreInput = (e) => {
      //console.log(e);
      const temp = []
      questionData.forEach((data) => {
         if(data.question_id !== e.id) { 
            temp.push(data)
         }
      })

      temp.push({question_id: e.id, question_score: e.value})
      setQuestionData(temp); 
    
   }

   const rows = [];
   questions.forEach((question) => {
      let score = 0
      if(!isSelectTable && questionData)
         questionData.forEach((data) => {
            if(data.question_id === question._id) {
               score = data.question_score;
            }
         })

      rows.push({
         id: question._id,
         topic: question.topic,
         questionDescription: question.question,
         difficulty: question.difficulty,
         score: score,
      }); 

   });




   return (
         <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter = {!isSelectTable}
            checkboxSelection = {isSelectTable}
            disableSelectionOnClick
            disableColumnSelector
            onSelectionModelChange = {handleSelect}
            onCellEditCommit = {handleTestScoreInput}
            sx={{
               boxShadow: 2,
               border: 1,
               height: "600px", 
               width: "50%",
               margin: "10px",
               className: "question-table"
            }}

         />
  
   );
};

export default QuestionsTable;