import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// Components
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { cyan } from "@mui/material/colors";

const QuestionsTable = ( {filterData, questions, isSelectTable, isScoreTable,  handleSelect, questionData, setQuestionData}) => {

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
         
         //Splitting the question description
        <div>
          <p>{params.value.substring(0, (params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58)) }</p>
          <p>{params.value.substring( (params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58) ,   (params.value.indexOf(' ', ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58))+58) == -1? ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58))+58 : params.value.indexOf(' ', ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58)) + 58) ) )}</p>
          <p>{params.value.substring( ((params.value.indexOf(' ', ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58))+58) == -1? ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58))+58 : params.value.indexOf(' ', ((params.value.indexOf(' ', 58) == -1) ? 58 : params.value.indexOf(' ', 58)) + 58) )) )}</p>
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
   if(!isSelectTable && isScoreTable) {
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
      
      //Had to comment this split in order for the sort to work
      // let part1Split = (question.question.indexOf(' ', 58) == -1) ? 58 : question.question.indexOf(' ', 58);
      // let part2Split = (question.question.indexOf(' ', part1Split+58) == -1? part1Split+58 : question.question.indexOf(' ', part1Split + 58) );

      // console.log(filterData.keyword);
      // console.log(question.question);
      // console.log(question.question.toLowerCase().includes(filterData.keyword.toLowerCase()));
      // Before we push the question to a row, we want to make sure that the question passes the question filterData.
      if( (filterData.topic.length === 0 || filterData.topic.includes(question.topic)) && (filterData.difficulty.length === 0 || filterData.difficulty.includes(question.difficulty)) && (filterData.keyword.length === 0 || question.question.toLowerCase().includes(filterData.keyword.toLowerCase())  ) ) {      
         rows.push({
            id: question._id,
            topic: question.topic,
            //questionDescription: { part1: question.question.substring(0, part1Split), part2: question.question.substring(part1Split, part2Split), part3: question.question.substring(part2Split)},
            questionDescription: question.question,
            difficulty: question.difficulty,
            constraint: question.constraintName,
            score: score,
         }); 
      }



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
               borderRadius: 2,
               height: "600px", 
               width: "50%",
               margin: "10px",
               className: "question-table",
               backgroundColor: "white"
            }}

         />
  
   );
};

export default QuestionsTable;