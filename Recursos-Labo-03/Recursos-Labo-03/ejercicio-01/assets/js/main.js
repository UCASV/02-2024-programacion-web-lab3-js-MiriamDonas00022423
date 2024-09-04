const countVotes = (votes, index) => {
    let count = votes.filter((obj) => obj.candidate === votes.candidate).length;
    return count;
    //return votes.filter((x) => x == index).length;
}

const showResults = (/*recibe*/) => {
    //Code
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    //let result = countVotes(votes);


    const result = countVotes(votes);

    console.log(countVotes(votes,'Alice'));

}

main();




