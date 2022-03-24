import { getCountry } from './barcode-country';

import * as mocha from 'mocha';
import * as chai from 'chai';
import { getFormat } from 'gtin';

const expect = chai.expect;
describe('Barcode country tests', () => {
    it('should throw on empty string', () => {
        expect(() => getCountry('')).to.throw();
    });

    it('should throw on falsey string', () => {
        expect(() => getCountry(' ')).to.throw(`Passed value ' ' is not a valid barcode`);
    });

    it('should throw on invalid EANs', () => {
        const invalidEan = '5235325'
        expect(() => getCountry(invalidEan)).to.throw(`Passed value '${invalidEan}' is not a valid barcode`);
    });

    it('should throw on EAN-8 ', () => {
        const ean8 = '12345678'
        expect(() => getCountry(ean8)).to.throw(`Only EAN-13 Barcodes can recognized. ${ean8} has invalid format: ${getFormat(ean8)}`);
    });

    it('should throw on EAN-14 ', () => {
        const americanEAN14 = '00721059697507'
        expect(() => getCountry(americanEAN14)).to.throw(`Only EAN-13 Barcodes can recognized. ${americanEAN14} has invalid format: ${getFormat(americanEAN14)}`);
    });

    it('should pass on valid EAN-13 ', () => {
        const americanEAN = '0008346045716'
        expect(getCountry(americanEAN)).to.equal('United States of America');
    });

});
