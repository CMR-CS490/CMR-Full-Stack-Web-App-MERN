import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// Components
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
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
			flex: 0.20,
			editable: false,
			sortable: false,
		},
		{
			field: "questionDescription",
			headerName: "Question Description",
			flex: 0.88,
			sortable: false,
      renderCell: (params) => (
        <div>
          <Typography>{params.value.part1}</Typography>
          <Typography>{params.value.part2}</Typography>
          <Typography >{params.value.part3}</Typography>
        </div>
       )
         
		},
      {
			field: "constraint",
			headerName: "Constraint",
			flex: 0.2,
			editable: false,
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
      columns.push({ field: "score", headerName: "Score", type: 'number', editable: true, sortable: false, flex: 0.15})
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
      
      let part1Split = ( question.question.indexOf(' ', 58) == -1) ? 58 : question.question.indexOf(' ', 58);

      let part2Split = (question.question.indexOf(' ', part1Split+58 == -1)? part1Split+58 : question.question.indexOf(' ', part1Split + 58) );
      let part3Split = (question.question.indexOf(' ', part2Split+58 == -1)? part2Split+58 : question.question.indexOf(' ', part2Split + 58) );

      rows.push({
         id: question._id,
         topic: question.topic,
         questionDescription: {part1: question.question.substring(0, part1Split), part2: question.question.substring(part1Split, part2Split), part3: question.question.substring(part2Split, part3Split)},
         difficulty: question.difficulty,
         constraint: question.constraintName,
         score: score,
      }); 

   });




   return (
         <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            disableColumnFilter = {!isSelectTable}
            checkboxSelection = {isSelectTable}
            disableSelectionOnClick
            disableColumnSelector
            onSelectionModelChange = {handleSelect}
            onCellEditCommit = {handleTestScoreInput}
            rowHeight={100}
            
            sx={{
               boxShadow: 2,
               border: 1,
               height: "600px", 
               width: "50%",
               margin: "10px",
               className: "question-table",
            }}

         />
  
   );
};

export default QuestionsTable;