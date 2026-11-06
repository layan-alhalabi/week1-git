import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../express-api/app";

describe("Courses API", () => {
  it("GET /courses returns all courses", async () => {
    const response = await request(app).get("/courses");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
  });
});

describe("Enrolments API", () => {
  it("POST /enrolments creates an enrolment", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({ studentName: "Layan", courseId: 1 });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Enrolment successful");
  });

  it("POST /enrolments rejects invalid data", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({ studentName: "", courseId: 1 });

    expect(response.status).toBe(400);
  });

  it("POST /enrolments rejects unknown course", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({ studentName: "Layan", courseId: 999 });

    expect(response.status).toBe(400);
  });
})