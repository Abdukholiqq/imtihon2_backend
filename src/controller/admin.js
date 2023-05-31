import { BadRequrestError, InternalServerError } from "../utils/errers.js";
import { read, write } from "../utils/model.js";
import post from "./post.js";

const PutPost = (req, res, next) => {
  try {
    const { post_id } = req.params;
    const Posts = read("posts");
    const Chacked = read("chacked");

    let newPost = Posts.find((post) => post.post_id == post_id);

    newPost.isActive = true;

    let oldPost = Posts.filter((post) => post.post_id != post_id);
    if (!oldPost) BadRequrestError(400, "post not found");

    write("posts", oldPost);

    delete newPost.post_id,
      (newPost.post_id = Chacked.at(-1)?.post_id + 1 || 1);

    Chacked.push(newPost);
    write("chacked", Chacked);
    //  --------------------
    res.status(200).json({
      status: 200,
      message: "success",
      data: newPost,
    });
  } catch (error) {
    return next(new InternalServerError(500, "Internal Server Error"));
  }
};

export default { PutPost };
