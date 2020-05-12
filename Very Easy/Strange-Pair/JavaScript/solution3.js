function isStrangePair(str1, str2) {
    let a = str1.split('');
    let b = str2.split('');
    return (a.pop() == b.shift()) && (a.shift() == b.pop())
}