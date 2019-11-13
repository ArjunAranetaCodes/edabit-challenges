function commonLastVowel(str){
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelsCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
		
    var arr = str.toLowerCase().split(" ");

    for(let word of arr){
        var rev = word.split("").reverse();
        for(let char of rev){
            if(vowels.includes(char)){
                vowelsCount[char] = vowelsCount[char] + 1;
                break;
            }
        }
    }

    var highest = 0;
    var charHighest = "";

    for(let char in vowelsCount){
        if(vowelsCount[char] > highest){
            charHighest = char;
        }
    }

    return charHighest;
}