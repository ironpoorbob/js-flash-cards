export interface TestDataInterface 
  {
    category: string;
    question: string;
    answer: string | 
      {
        a: string;
      }[]
    ;
    subNotes: string;
    choice?: undefined;
  }




// // export interface TestDataInterface 
// //   {
// //     category: string;
// //     question: string;
// //     answer: string | [
// //       {
// //         a: string
// //       }
// //     ];
// //     subnotes: string;
// //   }


// export interface TestDataInterface: ({
//     category: string;
//     question: string;
//     answer: string;
//     subNotes: string;
//     choice?: undefined;
// } | {
//     category: string;
//     choice: string;
//     question: string;
//     answer: {
//         a: string;
//     }[];
//     subNotes: string;
// })[]
// // import testdata

