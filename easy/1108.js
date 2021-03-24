// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function (address) {
    let defanged = '';

    for (let idx = 0; idx < address.length; idx++) {
        if (address[idx] === '.') {
            defanged += '[.]';
        } else {
            defanged += address[idx];
        }
    }
    return defanged;
};