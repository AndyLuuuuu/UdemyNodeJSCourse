const request = require("supertest");
const expect = require("expect");

var app = require("./server.js").app;

// Server
    // GET /
        // some test case
    // GET /users
        // some test case

describe("Server", () => {
    describe("#GET /", () => {
        it("should return hello world response", (done) => {
            request(app)
                .get("/")
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found."
                    });
                })
                .end(done);
        })
    }),
    describe("#GET /users", () => {
        it("should have user name", (done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Andy",
                        age: 25
                    })
                })
                .end(done);
        })
    })
})
// Assert 200
// Assert that you exist in users array