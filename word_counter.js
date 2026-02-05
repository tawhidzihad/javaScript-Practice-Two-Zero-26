function wordCounter(input){
    let words = input.split(' ');

    let totalWordCount = {};

    for(let word of words){

        // Removed The Case Matter.
        let cutWord = word.toLowerCase();


        // Space Removed Condition.
        if(cutWord.length > "0"){
            let cleanWord = cutWord;

            // Count Multiple Words Using (in) Ptoperty.
            // if(cleanWord in totalWordCount){
            //     totalWordCount[cleanWord]++;
            // } else{
            //     totalWordCount[cleanWord]=1;
            // }


            // Count Multiple Words Using (hasOwnProperty) Method.
            if(totalWordCount.hasOwnProperty(cleanWord)){
                totalWordCount[cleanWord] = totalWordCount[cleanWord] + 1; 
            } else{
                totalWordCount[cleanWord] = 1;
            }
        }
    }
    return totalWordCount;
}


const sentence = "I love JS and I love  js coding   and JS  is fun";
const outPut = wordCounter(sentence);
// console.log(outPut); 
// Output: { i: 2, love: 2, js: 3, and: 2, coding: 1, is: 1, fun: 1 }