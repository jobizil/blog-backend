"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app");
const { fakeUser } = require("../data/_user");

chai.should();
chai.use(chaiHttp);
