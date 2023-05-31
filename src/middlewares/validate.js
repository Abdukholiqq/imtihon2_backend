import { LoginSchema, PostSchema } from "../utils/validation.js";

export default (req, res, next) => {
  try {
    if (req.url == "/login" && req.method == "POST") {
      const { error } = LoginSchema.validate(req.body);
      if (error) throw Error(error);
    }

    if (req.url == "/posts" && req.method == "POST") {
      const {
        date,
        time,
        direction,
        int_direction,
        event,
        link,
        full_name,
        profession,
        phone_number,
        additional_number,
        post_title,
        post_desc,
        category_name,
        sub_category,
      } = req.body;
      const { img } = req.files;

      const filePath = Date.now() + img.name.replace(/\s/g, "");
      const { error } = PostSchema.validate({
        post_id: Posts.at(-1)?.post_id + 1 || 1,
        img: filePath,
        full_name,
        profession,
        direction,
        int_direction,
        event,
        link,
        phone_number,
        additional_number,
        post_title,
        post_desc,
        date,
        time,
        category_name,
        sub_category,
      });
      if (error) throw Error(error);
    }
    next();
  } catch (error) {
    return next(error);
  }
};
