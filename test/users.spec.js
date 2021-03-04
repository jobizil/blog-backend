"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");
process.env.NODE_ENV = "test";

const { fakeUser } = require("../data/_user");

const server = require("../app");
const User = require("../models/users.model");

chai.should();
chai.use(chaiHttp);

describe("Users", () => {
	describe("POST User login", () => {
		it("Should not login with empty filed", async () => {
			const res = await chai.request(server).post("/api/v1/auth/users").send();
			it("Should fail to log user", () => {
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.text.should.contain("Invalid Credentials");
			});
		});
		it("Login User with valid data", async () => {
			const loginUser = fakeUser.loginUser;
			const res = await chai
				.request(server)
				.post("/api/v1/auth/users")
				.send(loginUser);
			it("Should successfuly log user in", () => {
				res.should.have.status(200);
				res.body.should.be.a("object");
			});
		});
	});
	describe("POST - Register user route", async () => {
		it("Should return error if request body is empty", () => {
			chai
				.request(server)
				.post("/api/v1/users")
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.a("object");
					res.text.should.contain("Invalid Request");
				});
		});

		it("Should Register new user with valid data", () => {
			const createUser = fakeUser.registerUser;
			chai
				.request(server)
				.post("/api/v1/users")
				.send(createUser)
				.end((err, res) => {
					res.should.have.status(201);
					res.should.have.a("object");
				});
		});
	});
});
