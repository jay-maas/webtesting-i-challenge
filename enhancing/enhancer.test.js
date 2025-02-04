const { repair, succeed, fail, get } = require('./enhancer.js')

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
            expect(succeed({ enhancement: 0 }).enhancement).toBe(1)
            expect(succeed({ enhancement: 20 }).enhancement).toBe(20)
            expect(succeed({ enhancement: -10 }).enhancement).toBe(1)
            expect(succeed({ enhancement: "-10" }).enhancement).toBe(1)
        })
    })

    describe('fail()', () => {
        it('handles an items enhancement failure', () => {
            expect(fail({ enhancement: 10, durability: 100 }).durability).toBe(95)
            expect(fail({ enhancement: 15, durability: 100 }).durability).toBe(90)
            expect(fail({ enhancement: 17, durability: 100 })).toEqual({ durability: 90, enhancement: 16 })
            expect(fail({ enhancement: "17", durability: "100" })).toEqual({ durability: 90, enhancement: 16 })
            expect(fail({ enhancement: 0, durability: 0 })).toEqual({ durability: -5, enhancement: 0 })
            expect(fail({ enhancement: 20, durability: 100 })).toEqual({ durability: 90, enhancement: 19 })
        })
    })

    describe('get()', () => {
        it('changes item name to reflect enhancement level', () => {
            expect(get({ name: "Mighty Sword", enhancement: 5 }).name).toBe("[+5] Mighty Sword")
            expect(get({ name: "Weak Staff", enhancement: 0 }).name).toBe("Weak Staff")
            expect(get({ name: "Ultimate Hammer", enhancement: 20 }).name).toBe("[+20] Ultimate Hammer")
        })
    })
})