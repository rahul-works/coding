/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let ipv4 = '';
    let ipv6 = '';
    if (IP.indexOf('.') > -1) {
        ipv4 = IP.split('.');
    } else if (IP.indexOf(':') > -1) {
        ipv6 = IP.split(':');
    } 
    if(ipv4 !== '') {
        if(ipv4.length === 4) {
            for(const num of ipv4) {
                if (Number(num).toString() !== num){
                    return "Neither";
                }
                if (Number(num) > 255 || Number(num) < 0) {
                    return "Neither";
                }
            }
            return "IPv4";
        } else {
            return "Neither";    
        }
    } else if (ipv6 !== '') {
        if(ipv6.length === 8) {
            for(const num of ipv6) {
                if (num.length > 4){
                    return "Neither";
                }
                if(num === '') {
                    return "Neither";
                }
                const regexp = /^[0-9a-fA-F]+$/;
                if (!regexp.test(num)) {
                    return "Neither";
                }
            }
            return "IPv6";
        } else {
            return "Neither";    
        }
    } else {
        return "Neither";
    }
};

// console.log(validIPAddress("172.16.254.1"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
// console.log(validIPAddress("256.256.256.256"));
// console.log(validIPAddress("172.16.254.01"));
// console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"));
// console.log(validIPAddress("2001:0db8:85a3::8A2E:0370:7334"));
// console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"));
// console.log(validIPAddress("2001:0db8:85a3:0000:0:8A2E:0370:733a"));
// console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));
module.exports = validIPAddress;
