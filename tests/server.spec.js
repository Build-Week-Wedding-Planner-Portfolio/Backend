const request = require("supertest");
const db = require("../data/dbConfig.js");
const server = require("../api/server.js");

let token;
beforeAll(async done => {
  await db("users").truncate();
  request(server)
    .post("/api/auth/register")
    .send({
      username: "user1",
      password: "pw",
      email: "123@123.com",
      location: "Miami, FL"
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
});


describe("server.js", () => {
  describe("GET /api/posts", () => {
    it('should return 200 OK', async () => {
      const response = await request(server).get('/');
      expect(response.status).toBe(200);
    });

    it("should return JSON", () => {
      return request(server)
        .get("/api/posts")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it("should return status code 401 when not authorized.", () => {
      return request(server)
        .get("/api/posts")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it.skip("should return status code 200 when authorized", () => {
      return request(server)
        .set("Authorization", `${token}`)
        .get("/api/posts")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

 describe("POST /api/posts", () => {
  let post = {
    couple_name: "wam and bam"
  };
    it("should return JSON", () => {
      return request(server)
        .post("/api/posts")
        .set("Authorization", `${token}`)
        .send(post)
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it("should return status code 401 when not authorized.", () => {
      return request(server)
        .post("/api/posts")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });


  describe("PUT /api/posts/:id", () => {
    
    it("should return JSON", () => {
      return request(server)
        .put(`/api/posts/:id`)
        .set("Authorization", `${token}`)
        
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it.skip("should return status code 200 when authorized", () => {
      return request(server)
        .set("Authorization", `${token}`)
        .put(`/api/posts/:id`)
        
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("DELETE  /api/posts/:id", () => {
   
    it("should return status code 401 when not authorized.", () => {
      return request(server)
        .delete(`/api/posts/:id`)
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it.skip("should return status code 200 when authorized", () => {
      return request(server)
        .set("Authorization", `${token}`)
        .put(`/api/posts/:id`)
        
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });
});


afterEach(async () => {
  await db("posts").truncate();
});
