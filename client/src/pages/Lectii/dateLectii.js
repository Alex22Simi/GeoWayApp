export const LECTII = {
  capitole: [
    {
      id: 0,
      nume: "Capitolul 1",
      lectii: [
        {
          nume: "Lectia 1",
          continut: "Continut lectie",
          imagini: ["img1.png", "img2.png"],
        },
        { nume: "Lectia 2", continut: "", imagini: ["img1.png", "img2.png"] },
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
    {
      id: 1,
      nume: "Capitolul 2",
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
