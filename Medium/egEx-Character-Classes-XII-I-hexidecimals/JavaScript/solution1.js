const toHex = e => '\\x' + e.charCodeAt().toString(16);
const REGEXP = new RegExp([...'edabit'].map(toHex).join(''));