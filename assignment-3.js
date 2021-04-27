
// https://github.com/jaber996/assignment-3

// (1) kilometerToMeter
function kilometerToMeter(inputMeter){
    var result =  inputMeter * 1000;
    return result;
}



// // (2) budgetCalculator
function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){
    var Quantity1 = watchQuantity * 50;
    var Quantity2 = phoneQuantity * 100;
    var Quantity3 = laptopQuantity * 500;
    var allQuantity = Quantity1 + Quantity2 + Quantity3;
    return allQuantity;
}



// // (3) hotelCost
function hotelCost(allDay){
var perDay = 0;
if(allDay <= 10){
    perDay = allDay * 100;
}
else if(allDay <= 20){
    var oneToTenDay = 10 * 100;
    var runningDay = allDay - 10;
    var elevenToTwentyDay = runningDay * 80;
    perDay  = oneToTenDay + elevenToTwentyDay;
}
else{
    var oneToTenDay = 10 * 100;
    var elevenToTwentyDay = 10 * 80;
    var runningDay = allDay - 20;
    var twentyOneToNextDay = runningDay * 50;
    perDay  = oneToTenDay + elevenToTwentyDay + twentyOneToNextDay;
    }
    return perDay;
}



// (4) megaFriend
var friends  = ['Jeff Bezos','Elon Musk', 'Bernard Arnault','Bill Gates','Mr Mark Zuckerberg'];
function megaFriend(arr){
        var length = 0;
        var longestWord ;
        for (let i = 0; i < arr.length; i++){
            if(arr[i].length > length){
                length = arr[i].length;
                longestWord = arr[i];
            }
            
        }
    return longestWord;
}



