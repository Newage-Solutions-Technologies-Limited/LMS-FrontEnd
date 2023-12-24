import img1 from "../../assets/course-1.png";
import img2 from "../../assets/course-2.png";
import img3 from "../../assets/course-3.png";
import img4 from "../../assets/course-4.png";
import img5 from "../../assets/course-3.png";
import img6 from "../../assets/course-1.png";
import img7 from "../../assets/course-2.png";
import img8 from "../../assets/course-4.png";

export const courses = [
  {
    id: 1,
    img: img1,
    progress: 100,
    title: "EDX 504: Principles of Epidemiology and Public Health",
    ratings: 4.5,
    lecturers: ["Prof. Adedotun Fasiku", "lorem", "ipsum"],
    units: 3,
    resources: 23,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
        isAvailable: true,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
        isAvailable: true,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
        isAvailable: false,
      },
    ],
  },

  {
    id: 2,
    img: img2,
    progress: 20,
    title: "EDX 506 : Tenets of Obstetrics and Gynaecology",
    ratings: 4.5,
    lecturers: ["Dr. Lanre Onasanya", "lorem"],
    units: 2,
    resources: 23,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Obstetrics and Gynaecology",
        isAvailable: true,
      },

      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
        isAvailable: false,
      },
    ],
  },

  {
    id: 3,
    img: img3,
    progress: 75,
    title: "EDX 502: Methods for Sustainability within the Workforce",
    ratings: 4.5,
    lecturers: [
      "Dr. Rhoda",
      "lorem",
      "ipsum",
      "lorem",
      "ipsum",
      "lorem",
      "ipsum",
    ],
    units: 4,
    resources: 20,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Sustainability within the Workforce",
        isAvailable: true,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Methods for Sustainability within the Workforce",
        isAvailable: true,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Processes for Sustainability within the Workforce",
        isAvailable: false,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Rudiments for Sustainability within the Workforce",
        isAvailable: false,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Methods for Sustainability within the Workforce",
        isAvailable: false,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Methods for Sustainability within the Workforce",
        isAvailable: false,
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
        isAvailable: false,
      },
    ],
  },

  {
    id: 4,
    img: img4,
    progress: 60,
    title: "EDX 510: Research Methods, Methodology & Analysis",
    ratings: 4.5,
    lecturers: ["Dr. Feranmi Ajayi", "lorem", "ipsum", "lorem", "ipsum"],
    units: 1,
    resources: 17,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 5,
    img: img5,
    progress: 85,
    title: "EDX 520: Nuggets for Work Flow within the Work System",
    ratings: 4.5,
    lecturers: ["Prof. Kayode Olaniyan", "lorem", "ipsum"],
    units: 5,
    resources: 10,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,

        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 6,
    img: img6,
    progress: 90,
    title: "EDX 515: The Biological State of A Lukewarm Anecdote",
    ratings: 4.5,
    lecturers: ["Dr. Caroline Aruleoba", "lorem", "ipsum", "lorem", "ipsum"],
    units: 4,
    resources: 6,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 7,
    img: img7,
    progress: 10,
    title: "EDX 519: Writing Methods, Methodology & Analysis",
    ratings: 4.5,
    lecturers: ["Dr. Adedoyin Adebayo", "lorem"],
    units: 2,
    resources: 15,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 8,
    img: img8,
    progress: 100,
    title: "EDX 501 : Medical Practices & Insurance Schemes - A Case Study",
    ratings: 4.5,
    lecturers: ["Dr. Jane Foster", "lorem", "ipsum", "lorem"],
    units: 7,
    resources: 20,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 9,
    img: img1,
    progress: 100,
    title: "EDX 512: Social Ettiquete & Human Interaction",
    ratings: 4.5,
    lecturers: ["Dr. Emmanuel Adeoye", "lorem", "ipsum", "lorem"],
    units: 7,
    resources: 13,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 10,
    img: img6,
    progress: 48,
    title: "EDX 500: Principles of Human Resources Within The Workforce",
    ratings: 4.5,
    lecturers: [
      "Dr. Bimpe Adedoyin",
      "lorem",
      "ipsum",
      "lorem",
      "ipsum",
      "lorem",
    ],
    units: 2,
    resources: 16,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 11,
    img: img7,
    progress: 98,
    title: "EDX 506: Cultural Analysis & The Poignancy of Social Culturalism",
    ratings: 4.5,
    lecturers: [
      "Dr. Michael Adeshina",
      "lorem",
      "lorem",
      "lorem",
      "lorem",
      "lorem",
      "lorem",
      "lorem",
    ],
    units: 12,
    resources: 150,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 12,
    img: img7,
    progress: 0,
    title: "EDX 514: Research Evaluation & Analysis",
    ratings: 4.5,
    lecturers: ["Mr. Ben Affleck", "lorem"],
    units: 2,
    resources: 15,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 13,
    img: img4,
    progress: 16,
    title: "EDX 509: International Organizations & Modus Operandi",
    ratings: 4.5,
    lecturers: ["Dr. Rita", "lorem"],
    units: 12,
    resources: 15,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 14,
    img: img1,
    progress: 56,
    title: "EDX 511: Globalization & Captilaistic Markets",
    ratings: 4.5,
    lecturers: ["Dr. Judith", "lorem"],
    units: 7,
    resources: 15,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 15,
    img: img3,
    progress: 100,
    title: "EDX 507: Governance, Government & The Governed",
    ratings: 4.5,
    lecturers: ["Dr. Omobowale", "lorem", "lorem"],
    units: 5,
    resources: 25,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 16,
    img: img5,
    progress: 25,
    title: "EDX 517: Marginalization & FDI Of Economies",
    ratings: 4.5,
    lecturers: ["Dr Seun", "lorem", "lorem", "lorem", "lorem"],
    units: 4,
    resources: 15,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },

  {
    id: 17,
    img: img2,
    progress: 100,
    title: "EDX 521: Cost Benefits & Evaluation",
    ratings: 4.5,
    lecturers: ["Dr Stella", "lorem", "lorem", "lorem", "lorem"],
    units: 1,
    resources: 7,
    modules: [
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Introduction to Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Tenets of Epidemiology and Public Health",
      },
      {
        id:
          new Date().getTime().toString().slice(8) +
          Math.trunc(Math.random() * 100) +
          1,
        title: "Use cases & Practicability",
      },
    ],
  },
];
