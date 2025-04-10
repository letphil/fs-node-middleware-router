import BaseController from "./base.controller.js";
import User from "../models/user.model.js";

class UsersController extends BaseController {
  constructor() {
    super(User, "./data/users");
  }

  create(name, age, timestamp) {
    const id = this.nextId();
    const user = new this.model(id, name, age, timestamp, timestamp);
    this.fs.writeFileSync(`${this.filepath}/${id}.json`, JSON.stringify(user));
    return user;
  }

  get(id) {
    const user = this.fs.readFileSync(`${this.filepath}/${id}.json`, "utf8");
    return JSON.parse(user);
  }

  list() {
    const files = this.fs.readdirSync(this.filepath);
    console.log("files =", files);
    const users = files.map((file) => {
      return JSON.parse(
        this.fs.readFileSync(`${this.filepath}/${file}`, "utf8")
      );
    });
    return users;
  }
}

export default new UsersController();
