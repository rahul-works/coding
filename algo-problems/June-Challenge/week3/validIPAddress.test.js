let assert = require('assert');
let validIPAddress = require('./validIPAddress');
describe('validIPAddress', function() {
    it('check ipv4', function() {
        assert.equal(validIPAddress("172.16.254.1"), "IPv4");
    });
    it('check ipv6', function() {
        assert.equal(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"), "IPv6");
        assert.equal(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"), "IPv6");
        assert.equal(validIPAddress("2001:0db8:85a3:0000:0:8A2E:0370:733a"), "IPv6");

    });
    it('check neither', function() {
        assert.equal(validIPAddress("172.16.254.01"), "Neither");
        assert.equal(validIPAddress("256.256.256.256"), "Neither");
        assert.equal(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"), "Neither");
        assert.equal(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"), "Neither");
    });
});
