const amplify = num => [...Array(num).keys()].map(x => (x + 1) % 4 == 0 ? (x + 1) * 10 : x + 1);