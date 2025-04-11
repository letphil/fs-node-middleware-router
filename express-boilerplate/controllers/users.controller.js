import BaseController from "./base.controller.js";
import User from "../models/user.model.js";

class UsersController extends BaseController {
  constructor() {
    super(User, "./data/users");
  }

  /**
   *
   * @param {String} name
   * @param {Number} age
   * @param {String} timestamp
   * @returns {
   *  msg: number,
   *  data: User
   *
   * }
   */
  create(name, age, timestamp) {
    const id = this.nextId();
    const user = new this.model(id, name, age, timestamp, timestamp);
    this.fs.writeFileSync(`${this.filepath}/${id}.json`, JSON.stringify(user));
    return user;
  }

  /**
   *
   * @param {String} id - id of user to get
   * @returns {
   *  ...User
   * }
   */
  get(id) {
    const user = this.fs.readFileSync(`${this.filepath}/${id}.json`, "utf8");
    return JSON.parse(user);
  }

  /**
   *
   * @returns {
   *  data: User[]
   *  count: number
   * }
   */
  list() {
    const files = this.fs.readdirSync(this.filepath);
    const users = files.map((file) => {
      return JSON.parse(
        this.fs.readFileSync(`${this.filepath}/${file}`, "utf8")
      );
    });
    return users;
  }

  update(id, payload) {
    // 1. get the file
    const file = JSON.parse(
      this.fs.readFileSync(`${this.filepath}/${id}.json`, "utf8")
    );
    // 2. update the object from file
    // Object.entries(payload).forEach(([key, val]) => {
    //   file[key] = val
    // })

    const updated = {
      // ...file,
      ...payload,
      // updatedAt: new Date().toISOString(),
    };

    this.fs.writeFileSync(
      `${this.filepath}/${id}.json`,
      JSON.stringify(updated)
    );
    return updated;
  }
}

export default new UsersController();

// "id": 1,
// "name": "Phil",
// "age": 99,
// "createdAt": "2025-04-10T03:23:34.862Z",
// "updatedAt": "2025-04-11T00:58:33.365Z",
// "deletedAt": null
