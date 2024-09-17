//Función para contar votos
const countVotes = (votes) => {
    let result = {};
    votes.forEach(vote => {
        result[vote.candidate] = (result[vote.candidate] || 0) + 1;
    });
    return result;
};
//Función para mostrar resultados
const showResults = (result) => {
    if (Object.keys(result).length === 0) {
        alert("No hay votos para mostrar.");
        return;
    }

    let resultString = "Resultados de la votación ->";
    for (let candidate in result) {
        resultString += `${candidate}: ${result[candidate]} votos `;
    }
    alert(resultString);
};

const main = () => {
    //Arreglot
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    //Guarda el retorno de la funcion en una variable
    let result = countVotes(votes);
    //Mostrar resultados
    showResults(result);
};

main();
