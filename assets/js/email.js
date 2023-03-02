$('#CalcGrade').click(function ()
{
   // Getting the values from the DOM (using jQuery)
   let iAssignmentsGrade = $('#AssignmentsInput').val();
   let iGroupProjectsGrade = $('#GroupProjectsInput').val();
   let iQuizzesGrade = $('#QuizzesInput').val();
   let iMidtermExamGrade = $('#MidtermExamInput').val();
   let iFinalExamGrade = $('#FinalExamInput').val();
   let iINTEXGrade = $('#INTEXInput').val();

   // Calculating the final grade

   /* Grade weights (approximate):
      Assignments 50 %
      Group Project 10 %
      Quizzes 10 %
      Midterm Exam 10 %
      Final Exam 10 %
      INTEX 10 %
   */
   let iFinalGrade = (
      // Assignments 50 %
      (iAssignmentsGrade * 0.5) +
      // Group Project 10 %
      (iGroupProjectsGrade * 0.1) +
      // Quizzes 10 %
      (iQuizzesGrade * 0.1) +
      // Midterm Exam 10 %
      (iMidtermExamGrade * 0.1) +
      // Final Exam 10 %
      (iFinalExamGrade * 0.1) +
      // INTEX 10 %
      (iINTEXGrade * 0.1)
   );

   // Showing the hidden break
   $('#HiddenBreak').html("<br><hr />");

   // Displaying the final grade (Percentage)
   $('#CalculatedGrade').text(iFinalGrade);

   // Calculating the Letter Grade
   /*
   Total >= 94% ... A
   90% <= Total < 94% ... A- 
   87% <= Total < 90% ... B+
   84% <= Total < 87% ... B
   80% <= Total < 84% ... B-
   77% <= Total < 80% ... C+
   74% <= Total < 77% ... C
   70% <= Total < 74% ... C-
   67% <= Total < 70% ... D+
   64% <= Total < 67% ... D
   60% <= Total < 64% ... D-
   Total < 60% ... E
   */

   // Determining the letter grade based on the final grade percentage
   if (iFinalGrade >= 94)
   {
      // the final letter grade is an A
      sLetterGrade = "A";
   }
   else if (iFinalGrade >= 90 && iFinalGrade < 94)
   {
      // the final letter grade is an A-
      sLetterGrade = "A-";
   }
   else if (iFinalGrade >= 87 && iFinalGrade < 90)
   {
      // the final letter grade is an A-
      sLetterGrade = "B+";
   }
   else if (iFinalGrade >= 84 && iFinalGrade < 87)
   {
      // the final letter grade is an A-
      sLetterGrade = "B";
   }
   else if (iFinalGrade >= 80 && iFinalGrade < 84)
   {
      // the final letter grade is an A-
      sLetterGrade = "B-";
   } else if (iFinalGrade >= 77 && iFinalGrade < 80)
   {
      // the final letter grade is an A-
      sLetterGrade = "C+";
   }
   else if (iFinalGrade >= 74 && iFinalGrade < 77)
   {
      // the final letter grade is an A-
      sLetterGrade = "C";
   }
   else if (iFinalGrade >= 70 && iFinalGrade < 74)
   {
      // the final letter grade is an A-
      sLetterGrade = "C-";
   }
   else if (iFinalGrade >= 67 && iFinalGrade < 70)
   {
      // the final letter grade is an A-
      sLetterGrade = "D+";
   }
   else if (iFinalGrade >= 64 && iFinalGrade < 67)
   {
      // the final letter grade is an A-
      sLetterGrade = "D";
   }
   else if (iFinalGrade >= 60 && iFinalGrade < 64)
   {
      // the final letter grade is an A-
      sLetterGrade = "D-";
   }
   else if (iFinalGrade < 60)
   {
      // the final letter grade is an A-
      sLetterGrade = "E";
   }

   // Displaying the final grade (Letter Grade)
   $('#LetterGrade').text(sLetterGrade);
});