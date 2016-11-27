var liders = [{des: true, ck: ["event-1","event-2","event-3"]},
    {des: true, ck: ["event-4","event-2","event-6"]},
    {des: false, ck: ["event-7","event-8", "event-9"]},
    {des: true, ck: ["event-12", "event-10", "event-2"]},
    {des: false, ck: ["event-15", "event-11", "event-13"]}];


/**
 * @return {number}
 */

function Phi(liderChoose) {
    var stringChoose = liderChoose;

    var countFalse = 0;
    var countTrue = 0;

    var falseTrue = 0;
    var trueFalse = 0;
    var trueTrue = 0;
    var falseFalse = 0;

    for (var i = 0; i < liders.length; i++){

        var youChoose = liders[i].ck.indexOf(stringChoose);

        if (liders[i].des == false) {
           countFalse++;
        } else {
            countTrue++;
        }

        if ((youChoose == -1) && (liders[i].des == true)) {
            falseTrue++;
        }
        if ((youChoose >= 0) && (liders[i].des == false)) {
            trueFalse++;
        }
        if ((youChoose == -1) && (liders[i].des == false)) {
            falseFalse++;
        }
        if ((youChoose >= 0) && (liders[i].des == true)) {
            trueTrue++;
        }
    }




    return (trueTrue * falseFalse - trueFalse * falseTrue) /
            Math.sqrt((trueTrue + trueFalse) *
                (falseFalse + falseTrue) *
                (trueTrue + countTrue) *
                (falseFalse + countFalse));

// console.log(countFalse);
// console.log(countTrue);
// console.log(falseTrue);
// console.log(trueFalse);
}

console.log(Phi("event-9"));
console.log(Phi("event-10"));
console.log(Phi("event-11"));
console.log(Phi("event-12"));
console.log(Phi("event-13"));
console.log(Phi("event-14"));