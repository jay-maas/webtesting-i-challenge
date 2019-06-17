const { repair, succeed } = require('./enhancer.js')

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 80 }).durability).toBe(100)
            expect(repair({ durability: -80 }).durability).toBe(100)
            expect(repair({ durability: 0 }).durability).toBe(100)
            expect(repair({ durability: 100 }).durability).toBe(100)
            expect(repair({ durability: "100" }).durability).toBe(100)
        })
    })

    describe('succeed()', () => {
        it('increases an items enhancement by 1', () => {
            expect(succeed({ enhancement: 10 }).enhancement).toBe(11)
        })
    })
})