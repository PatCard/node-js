// json-demo
/*const curso = require('./curso.json');

console.log(curso.temas);*/

// Objeto -> Cadena de caracteres
// Cadena de caracteres en formato JSON
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
  }

  console.log(infoCurso);

  let infoCursoJSON = JSON.stringify(infoCurso);
  console.log(infoCursoJSON);
  console.log(typeof infoCursoJSON);
  
  // Cadena  de caracteres -> Objeto
  let infoCursoObjeto = JSON.parse(infoCursoJSON);
  console.log(infoCursoObjeto);
  console.log(typeof infoCursoObjeto);

  console.log(infoCursoObjeto.titulo);
  