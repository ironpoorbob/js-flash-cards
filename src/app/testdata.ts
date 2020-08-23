
export const testdata = [
  {
    category: "flash",
    question: "Why did the chicken cross the road?",
    answer: "To get from the left to the right, sir",
    subNotes: ""
  },
  {
    category: 'flash',
    question: 'What are template literals?',
    answer: 'Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.',
    subNotes: `example: \n <code>\`string text\` \n \`string text \${expression}\ string text\`</code>`
  },
  {
    category: "flash",
    question: "What is JavaScript?",
    answer: "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language",
    subNotes: ""
  },
  {
    category: "choice",
    choice: "3",
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
    { a: '<code>&lt;javascript&gt;</code>' },
    { a: '<code>&lt;js&gt;</code>' },
    { a: '<code>&lt;scripting&gt;</code>' },
    { a: '<code>&lt;script&gt;</code>' },
  ],
    subNotes: ""
  },
  {
    category: "choice",
    choice: "1",
    question: "What are JavaScript Data Types?",
    answer: [
      { a: "String, Boolean, Object, null, var" },
      { a: "Number, String, Boolean, Object, Undefined" },
      { a: "Number, String, Boolean, NaN, null" },
      { a: "String, Boolean, Object, document, void", }
    ],
    subNotes: ""
  },
  {
    category: "flash",
    question: "What is the use of isNaN function?",
    answer: "isNan function returns true if the argument is not a number otherwise it is false.",
    subNotes: ""
  },
  {
    category: "flash",
    question: "What are undeclared and undefined variables?",
    answer: "Undeclared variables are those that do not exist in a program and are not declared. Undefined variables are those that are declared in the program but have not been given any value.",
    subNotes: "If the program tries to read the value of an undeclared variable, then a runtime error is encountered. If the program tries to read the value of an undefined variable, an undefined value is returned."
  },
  {
    category: "flash",
    question: "What is === operator?",
    answer: "=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.",
    subNotes: ""
  },
  {
    category: 'choice',
    choice: '1',
    question: 'Which of the following is correct about features of JavaScript?',
    answer: [
      { a: 'It can not Handling dates and time.' },
      { a: 'JavaScript is a object-based scripting language.' },
      { a: 'JavaScript is not interpreter based scripting language.' },
      { a: 'All of the above' }
    ],
    subNotes: `Explanation: Some features of javascripts are as follow: \n
    1. JavaScript is a object-based scripting language. \n
    2. Giving the user more control over the browser. \n
    3. It Handling dates and time. \n
    4. It Detecting the user's browser and OS, \n
    5. It is light weighted. \n
    6. JavaScript is a scripting language and it is not java. \n
    7. JavaScript is interpreter based scripting language. \n
    8. JavaScript is case sensitive.`
  },
  {
    category: 'flash',
    question: 'How can the style/class of an element be changed?',
    answer: "It can be done in the following way:<br> <code class='foo'>document.getElementById('myText').style.fontSize = '20';</code><br> or<br> <code>document.getElementById('myText').className = 'anyclass';</code>",
    subNotes: ''
  },
  {
    category: 'choice',
    choice: "1",
    question: 'Choose the correct JavaScript syntax to change the content of the following HTML code.',
    answer: [
      { a: "<code>document.getElement ('letsfindcourse').innerHTML = 'I am a letsfindcourse';</code>" },
      { a: "<code>document.getElementById ('letsfindcourse').innerHTML = 'I am a letsfindcourse';</code>" },
      { a: "<code>document.getId ('letsfindcourse') = 'I am a letsfindcourse';</code>" },
      { a: "<code>document.getElementById ('letsfindcourse').innerHTML = I am a letsfindcourse;</code>" }
    ],
    subNotes: 'Explanation:The correct syntax to access the element is document.getElementById(“letsfindcourse”). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes.'
  },
  {
    category: 'flash',
    question: 'What are all the looping structures in JavaScript?',
    answer: 'Following are looping structures in Javascript: For, While and do-while loops',
    subNotes: ''
  },
  {
    category: 'choice',
    choice: "1",
    question: 'What are all the looping structures in JavaScript?',
    answer: [
      { a: '<code>for, do, while</code>' },
      { a: '<code>for, while, do-while</code>' },
      { a: '<code>do-while, while, do</code>' },
      { a: '<code>while, do, do-while</code>' },
    ],
    subNotes: ''
  },
  {
    category: 'flash',
    question: 'What does the the string object\'s charAt() method do?',
    answer: 'The charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.',
    subNotes: 'It returns a character at the index of a string (ie: <code>mystring.charAt(index)</code>)'
  },
  
]

