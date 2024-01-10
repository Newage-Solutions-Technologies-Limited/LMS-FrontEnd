import quiz1 from "../../../../../assets/quiz-img-2.png";
import quiz2 from "../../../../../assets/quiz-img-1.png";

export const quiz = [
  {
    id: 1,
    question:
      "A programming tool used for converting instructions written in a programming language to machine language and executing the instructions parsed in it immediately is",
    options: ["A Compiler", "A Transpiler", "An Interpreter", "An Assembler"],
    correct: 2,
    hasImage: false,
  },

  {
    id: 2,
    img: quiz1,
    question:
      "An disease that becomes unusually widespread within a local sphere is referred to as a/an",
    options: ["Outbreak", "Pandemic", "Epidemic", "Endemic"],
    correct: 0,
    hasImage: true,
  },

  {
    id: 3,
    img: quiz2,
    question: "The part marked in the diagram below is called a ",
    options: ["Trachea", "Oesophagus", "Throat", "Femur"],
    correct: 1,
    hasImage: true,
  },

  {
    id: 4,
    question: "What is the name of a person, animal place or thing called",
    options: ["Verb", "Pronoun", "Adjective", "Noun"],
    correct: 3,
    hasImage: false,
  },

  {
    id: 5,
    img: quiz1,
    question:
      "An epidemic that becomes unusually widespread and even global in its reach is referred to as a/an",
    options: ["Pandemic", "Endemic", "Outbreak", "Epidemic"],
    correct: 0,
    hasImage: true,
  },
];
