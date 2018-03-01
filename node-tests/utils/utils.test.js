const expect = require("expect");
const utils = require("./utils");

describe('Utils', () => {
    
    describe("#add", () => {
        it("should add two numbers", () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA("number");
            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}.`);
            // }
        });
    });
   

    it("should async add two numbers", (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA("number");
            done();
        });
    });

    it("should square a number", () => {
        var result = utils.square(5);

        expect(result).toBe(25).toBeA("number");
    });

    it("should async square two numbers", (done) => {
        utils.asyncSquare(10, (product) => {
            expect(product).toBe(100).toBeA("number");
            done();
        })
    });
});


// Should verify first and last names are set
// assert it includes firstName and lastName with proper values
it("should have a firstName and lastName", () => {
    var userObj = utils.setName({}, "Andy Lu");
    expect(userObj).toInclude({
        firstName: "Andy",
        lastName: "Lu"
    });
});

// it("should expect some values", () => {
//     // expect(12).toNotBe(11);
//     // expect({name: "andy"}).toNotEqual({name: "Andy"});
//     // expect([2,3,4]).toExclude(1);
//     expect ({
//         name: "Andy",
//         age: 25,
//         location: "Vancouver"
//     }).toExclude({
//         age: 21
//     })
// });