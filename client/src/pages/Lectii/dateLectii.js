export const LECTII = {
  capitole: [
    {
      id: 0,
      nume: "România",
      unitate: 'romania',
      lectii: [
        {
          nume: "Lectia 1",
          continut: "Continut lectie",
          imagini: ["img1.png", "img2.png"],
          tip: 'lectie'
        },
        {
          tip: 'quizz', intrebari: [
            {
              continut: "Romania este in Europa..",
              optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
              raspuns: 0,
            },
            {
              continut: "Romania este in Europa..",
              optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
              raspuns: 1,
            },
            {
              continut: "Romania este in Europa..",
              optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
              raspuns: 2,
            },
          ]
        },
        { nume: "Lectia 2", continut: "", imagini: ["img1.png", "img2.png"], tip: 'lectie' },
        {
          tip: 'quizz', intrebari: [
            {
              continut: "Romania este in Europa..",
              optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
              raspuns: "B. de Est",
            },
          ]
        },
        { nume: "Lectia 3", continut: "", imagini: ["img1.png", "img2.png"], tip: 'lectie' },
        {
          tip: 'quizz', intrebari: [
            {
              continut: "Romania este in Europa..",
              optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
              raspuns: "B. de Est",
            },
          ]
        },
      ],
    },
    {
      id: 1,
      nume: "Europa",
      unitate: 'europa',
      lectii: [
        { nume: "Lectia 1", continut: "", imagini: ["img1.png", "img2.png"] },
      ],
      quizz: {
        intrebari: [
          {
            continut: "Romania este in Europa..",
            optiuni: ["A.Centrala", "B. de Est", "C. de Vest"],
            raspuns: "B. de Est",
          },
        ],
      },
    },
  ],
};
