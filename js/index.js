/* Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado. */

let estudiante = [
    { nombre: "Luis", semestre: 5, nota: 14 },
    { nombre: "Ana", semestre: 2, nota: 16 },
    { nombre: "Leo", semestre: 1, nota: 12 },
    { nombre: "Maria", semestre: 4, nota: 17 },
    { nombre: "Jose", semestre: 3, nota: 11 },
    { nombre: "Liz", semestre: 5, nota: 19 },
];

let estudiantesSemestre = (estudiante, semestre) => {
    let estudiantesSemestre = [];
    estudiante.forEach((estudiante) => {
        if (estudiante.semestre == semestre) estudiantesSemestre.push(estudiante);
    });
    return estudiantesSemestre;
}

let salida = document.getElementById("salida");
let estudiantesSemestre5 = estudiantesSemestre(estudiante, 5);
salida.innerHTML = `Estudantes que pertenecen al semestre 5:<br>`;
estudiantesSemestre5.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - Nota: ${estudiante.nota}<br>`;
})