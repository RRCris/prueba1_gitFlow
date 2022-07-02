const { server, app } = require("../index");
const supertest = require("supertest");

const api = supertest(app);
describe("server", () => {
  it("get", async () => {
    const res = await api.get("/health");
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("Ok");
  });

  it("post", async () => {
    const res = await api.post("/").query({ msg: "OK" });
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("Ok");
  });
});

afterAll(() => {
  server.close();
});
