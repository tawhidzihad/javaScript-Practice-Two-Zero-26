function removeDuplicatesAnyData(inputData){

    let uniqueArray = [];

    for(let data of inputData){
        
        /*
        * .includes Give (True or Flase) Answer, যদি False === Flase হয় তাহলেই If এর মদ্ধে //ডুকবে।
        
        *আগে থকেই জদি Same value থাকে তাহলেই শুধু True দিবে আর True === False হলে ডুকবে না ।
        
        *আর যদি না থাকে তাহলে False === False হবে মানে True, তাহলে ডুকবে এবং মান যুক্ত হবে।   
        */

        if(uniqueArray.includes(data) === false){
            uniqueArray.push(data);
        }
    }
    return uniqueArray;
}



let number = ["ada", "ad", "afa","ada", 'afa'];
let outPut = removeDuplicatesAnyData(number);
console.log(outPut)