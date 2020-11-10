const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return fullName regardless of the size of letters', () => {      
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('AMANDA DOE')).to.equal('Amanda Doe');
        expect(formatFullname('aMaNDa DoE')).to.equal('Amanda Doe');
    });

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });

    it('should return an error if "fullName" has only firstName or only lastName or when there is more than firstName and lastName', () => {
        expect(formatFullname('Amanda')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
        expect(formatFullname('Amanda Doe Doe')).to.equal('Error');
    });

});

