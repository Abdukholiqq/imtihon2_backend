// import { InternalServerError } from "../utils/errers.js";
// import { read, write } from "../utils/model.js";

// const Categories = (req, res) => {
//   try {
//     const Category = read("category");
//     const subCategory = read("subCategory");

//     const result = Category.map((item) => {
//       return {
//         ...item,
//         subCategories: subCategory.filter(
//           (Id) => Id.category_id == item.category_id
//         ),
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

// const selectCategory = (req, res, next) => {
//   try {
//     const Category = read("category");
//     const Chacked = read("chacked");
//     const { category_name } = req.params;
//     const result = Category.map((item) => {
//       if (item.category_name == category_name) {
//         return {
//           ...item,
//           Posts: Chacked.filter((Id) => Id.category_name == item.category_name),
//         };
//       }
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

// export default { Categories, selectCategory };
