// import { InternalServerError } from "../utils/errers.js";
// import { read, write } from "../utils/model.js";

// const subCategories = (req, res) => {
//   try {
//     const Category = read("category");
//     const Chacked = read("chacked");

//     const result = Category.map((item) => {
//       return {
//         ...item,
//         Posts: Chacked.filter((Id) => Id.category_name == item.category_name),
//       };
//     });
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: result,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// export default { subCategories };
