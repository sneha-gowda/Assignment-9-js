function RunCallback(a, b, cb) {
    a=parseInt(a);
    b=parseInt(b);
    return cb(a+b);
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;
