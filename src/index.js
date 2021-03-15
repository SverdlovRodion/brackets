module.exports = function check(str, bracketsConfig) {
    let res = [];
    let exist = {};
    for(let j in bracketsConfig) {
        exist[bracketsConfig[j][0]] = bracketsConfig[j][1];
    }

    res.push(str.charAt(0));

    for(let i = 1; i < str.length; i += 1) {
        if(str.charAt(i) === exist[res[res.length - 1]]) {
            res.pop();
        }
        else
        {
            res.push(str.charAt(i));
        }
    }
    if (res.length > 0) return false;
    else return true;
}
