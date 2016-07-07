/**
 * Created by UCHATNU on 7/4/2016.
 */

jest.unmock("../../../src/js/sum");

describe('sum',()=>{
    it('adds 1 + 2 to equal 3',()=>{
        const sum = require("../../../src/js/sum");
        expect(sum(1, 2)).toBe(3);
    })
})
