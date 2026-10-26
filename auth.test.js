const request = require("supertest");
const app = require("../server");

test("Signup test", async () => {
    const res = await request(app)
        .post("/signup")
        .send({
            name: "Sneha",
            email: "sneha@gmail.com",
            password: "123456"
        });

    expect(res.statusCode).toBe(200);
});

test("Invalid email test", async () => {
    const res = await request(app)
        .post("/signup")
        .send({
            name: "Sneha",
            email: "wrong",
            password: "123456"
        });

    expect(res.statusCode).toBe(400);
});

test("Login test", async () => {
    const res = await request(app)
        .post("/login")
        .send({
            email: "sneha@gmail.com",
            password: "123456"
        });

    expect(res.statusCode).toBe(200);
});

test("Wrong password test", async () => {
    const res = await request(app)
        .post("/login")
        .send({
            email: "sneha@gmail.com",
            password: "wrong"
        });

    expect(res.statusCode).toBe(401);
});