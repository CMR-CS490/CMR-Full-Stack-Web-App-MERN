import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// Components
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { cyan } from "@mui/material/colors";

const QuestionsTable = ( { filterData, questions, isSelectTable, isScoreTable,  handleSelect, questionData, setQuestionData}) => {

   const dispatch = useDispatch();
   useEffect(() => {

   }, [filterData]);
  
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
   if (!(questions.length === 0)) {
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
      // console.log({filterData})

      // Push the row into the MUI DataGrid.
      rows.push({
         id: question._id,
         topic: question.topic,
         //questionDescription: { part1: question.question.substring(0, part1Split), part2: question.question.substring(part1Split, part2Split), part3: question.question.substring(part2Split)},
         questionDescription: question.question,
         difficulty: question.difficulty,
         constraint: question.constraintName,
         score: score,
      });


      // Check it see if filterData is empty.

      if (filterData !== undefined) {
         // Check if question._id is not null. (Needed for initial render of the component when questions are not fetched by Redux State.)
         if(question._id !== null) {
   
            // Get questionID element in MUI DATAGRID. MUI Datagrid add's an attribute called data-id="question._id" to each row. 
            // console.log(`[data-id="${question._id}"]`)
            // console.log(" new ... ")
            let filterElement = document.querySelector(`[data-id="${question._id}"]`);
            // console.log("element to filter: ", filterElement);
            
            if (filterElement !== null) { // Check if element exists. (Prevents APP from crashing.)
               filterElement.classList.remove("hidden"); //Reset the class to show the question.
            }
   
            // If the filter is empty, show all questions. (.length === 0) Otherwise, check each filter field to see if it passes the filter. (.includes)
            // console.log({...filterData}); // {keyword: "", topic: "", difficulty: "", constraint: ""}
            if( (filterData.topic.length === 0 || filterData.topic.includes(question.topic)) && (filterData.difficulty.length === 0 || filterData.difficulty.includes(question.difficulty)) && (filterData.keyword.length === 0 || question.question.toLowerCase().includes(filterData.keyword.toLowerCase())  ) ) {
               // console.log("removing a filter to question: " + question.question)
               // Show the question.
               if (filterElement !== null) {
                  filterElement.classList.remove("hidden");
               }
            } else {
               // console.log("adding a filter to question: " + question.question)
               // Do not show the question.
               if (filterElement !== null) {
                  filterElement.classList.add("hidden");
               }
            }
   
         }


         // console.log(" new ... ")

      }

         



   });
}




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
            rowHeight={70}
            
            sx={{
               boxShadow: 2,
               border: 1,
               borderRadius: 2,
               height: "650px", 
               width: "50%",
               margin: "10px",
               className: "question-table",
               backgroundColor: "white"
            }}

         />
  
   );
};

export default QuestionsTable;