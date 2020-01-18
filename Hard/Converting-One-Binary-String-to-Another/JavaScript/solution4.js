function uncensor(str, vowels) {
    let vowel_i = 0;
    let new_str = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "*") {
            new_str = new_str + vowels[vowel_i]
            vowel_i += 1;
        }
        else {
            new_str = new_str + str[i]
        }
    }
    return new_str
}