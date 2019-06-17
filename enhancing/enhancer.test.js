const { repair } = require('./enhancer.js')

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 80 }).durability).toBe(100)
            expect(repair({ durability: -80 }).durability).toBe(100)
            expect(repair({ durability: 0 }).durability).toBe(100)
            expect(repair({ durability: 100 }).durability).toBe(100)
        })
    })
})