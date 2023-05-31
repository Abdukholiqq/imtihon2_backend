// import { InternalServerError } from "../utils/errers.js";
// import { read, write } from "../utils/model.js";
// import { resolve } from "path";

// //   create new post
// const POST = (req, res) => {
//   try {
//     const Posts = read("posts");
//     const {
//       date,
//       time,
//       direction,
//       int_direction,
//       event,
//       link,
//       full_name,
//       profession,
//       phone_number,
//       additional_number,
//       post_title,
//       post_desc,
//       category_name,
//       sub_category,
//     } = req.body;
//     const { img } = req.files;
//     // ----------------
//     const filePath = Date.now() + img.name.replace(/\s/g, "");
//     // ----------------
//     const newPost = {
//       post_id: Posts.at(-1)?.post_id + 1 || 1,
//       img: filePath,
//       full_name,
//       profession,
//       direction,
//       int_direction,
//       event,
//       link,
//       phone_number,
//       additional_number,
//       post_title,
//       post_desc,
//       date,
//       time,
//       category_name,
//       sub_category,
//       saw: 0,
//       isActive: false,
//     };
//     // -------------

//     img.mv(resolve("uploads", filePath));
//     // -------------
//     Posts.push(newPost);
//     write("posts", Posts);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: newPost,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// const GetPost = (req, res, next) => {
//   try {
//     let { page } = req.query;
//     page = page || process.DEFAULT.pagination.page;
//     let limit = process.DEFAULT.pagination.limit;
//     let Chacked = read("chacked")
//       .reverse()
//       .slice((page - 1) * limit, page * limit);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: Chacked,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// const Single = (req, res, next) => {
//   try {
//     const Chacked = read("chacked");
//     let { post_id } = req.params;

//     const userAgent = req.headers["user-agent"];
//     const singlePost = Chacked.find((item) => item.post_id == post_id);
//     singlePost.saw = singlePost.saw + 1;

//     write("chacked", Chacked);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: singlePost,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };
// export default { POST, GetPost, Single };
