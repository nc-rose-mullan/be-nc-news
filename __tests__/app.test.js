const db = require("../db/connection")
const app = require("../app.js")
const seed = require("../db/seeds/seed.js")
const data = require("../db/data/test-data")
const request = require("supertest")

beforeEach(() => { 
    return seed(data)
})

afterAll(() => { 
    db.end()
})

describe("/api/topics", () => { 
    test("responds with an array of topics", () => { 
        return request(app)
            .get('/api/topics')
            .expect(200)
            .then(({ body: { topics } }) => { 
                expect(topics.length).not.toBe(0)
                topics.forEach((topic) => { 
                    expect(typeof topic.slug).toBe("string")
                    expect(typeof topic.description).toBe("string")
                })
            })
    })
})