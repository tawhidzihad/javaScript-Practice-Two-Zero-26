function markAnalyzer(totalSubjet){

    // Total Mark.
    let total = 0;

    // Highest & Lowest Marks.
    let highestMark = -Infinity;    // -infinity set the lowest value for temporary time  
    let lowestMark = Infinity;      // infinity set the highest value for temporary time 

    // Highest & Lowest Subject 
    let highestSubject;
    let lowestSubject;

    // subject give the Key name.
    for(let subject in totalSubjet){

        // Key now under Object , then they give the value.
        let mark = totalSubjet[subject];

        // total = total + mark;
        total += mark;

        // Hight Mark Counter.
        if(mark > highestMark){
            highestMark = mark;
            highestSubject = subject;
        }

        if(mark < lowestMark){
            lowestMark = mark;
            lowestSubject = subject;
        }
    }

    // Get The Mark Avarage Number
    let avarage = total / Object.keys(totalSubjet).length;


    return {
        total,
        avarage,
        highestMark,
        lowestMark,
        highestSubject,
        lowestSubject
    };
}

let studentMark = { math: 78, english: 65, physics: 88, bangla: 55 };
let outPut = markAnalyzer(studentMark);
console.log(outPut);