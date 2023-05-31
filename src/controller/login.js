import jwt from "../utils/jwt.js";
import { read } from "../utils/model.js";
import { BadRequrestError, InternalServerError } from "../utils/errers.js";

const Login = (req, res, next) => {
  try {
    const admins = read("admin");
    const { username, password } = req.body;
    const admin = admins.find(
      (admin) => admin.username == username && admin.password == password
    );

    if (!admin) {
      return next(new BadRequrestError(400, "wrong username or password"));
    }
    delete admin.password;
    res.status(200).json({
      status: 200,
      message: "success",
      access_token: jwt.sign({ admin_id: admin.admin_id }),
      data: admin,
    });
  } catch (error) {
    return next(new InternalServerError(500, "Internal Server Error"));
  }
};
export default { Login };
