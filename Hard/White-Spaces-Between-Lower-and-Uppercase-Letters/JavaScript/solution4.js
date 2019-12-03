let insertWhitespace = function (str) {
    return str.split(/(?=[A-Z])/).join(" ");
}