const request = require("supertest")
const app = require("../app")
const db = require("../db/connection")
const seed = require("../db/seeds/seed")
const data = require("../db/data/test-data")

beforeEach(() => { 
    return seed(data)
})

afterAll(() => { 
    db.end()
})

describe("GET: /api/topics", () => {
    test("responds with an array of topics", () => {
        return request(app)
            .get("/api/topics")
            .expect(200)
            .then(({ body: { topics } }) => {
                expect(topics.length).not.toBe(0);
                topics.forEach((topic) => {
                    expect(typeof topic.slug).toBe("string");
                    expect(typeof topic.description).toBe("string");
                });
            });
    });
    test("hello new test", () => { 
        expect(2+2).toBe(3)
    })
})