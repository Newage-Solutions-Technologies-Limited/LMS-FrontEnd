import quiz1 from "../../../../../assets/quiz-img-2.png";
import quiz2 from "../../../../../assets/quiz-img-1.png";

export const quiz = [
  {
    id: 5,
    question:
      "A programming tool used for converting instructions written in a programming language to machine language and executing the instructions parsed in it immediately is",
    options: {
      a: "A Compiler",
      b: "A Transpiler",
      c: "An Interpreter",
      d: "An Assembler",
    },
    correct: "Interpreter",
  },

  {
    id: 2,
    img: quiz1,
    question:
      "An disease that becomes unusually widespread within a local sphere is referred to as a/an",
    options: { a: "Outbreak", b: "Pandemic", c: "Epidemic", d: "Endemic" },
    correct: "Outbreak",
  },

  {
    id: 3,
    img: quiz2,
    question: "The part marked in the diagram below is called a ",
    options: { a: "Trachea", b: "Oesophagus", c: "Throat", d: "Femur" },
    correct: "Oesophagus",
  },

  {
    id: 4,
    question: "What is the name of a person, animal place or thing called",
    options: { a: "Verb", b: "Pronoun", c: "Adjective", d: "Noun" },
    correct: "Noun",
  },

  {
    id: 1,
    img: quiz1,
    question:
      "An epidemic that becomes unusually widespread and even global in its reach is referred to as a/an",
    options: { a: "Pandemic", b: "Endemic", c: "Outbreak", d: "Epidemic" },
    correct: "Pandemic",
  },
];
