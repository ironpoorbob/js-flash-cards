export interface TestDataInterface 
  {
    category: string;
    question: string;
    answer: string | [
      {
        a: string
      }
    ];
    subnotes: string;
  }


