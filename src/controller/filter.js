// import { InternalServerError } from "../utils/errers.js";
// import { read } from "../utils/model.js";

// const DateFilter = (req, res, next) => {
//   try {
//     const Chacked = read("chacked");
//     let { date } = req.body;

//     let rest = Chacked.filter((time) => time.date == date);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: rest,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// const FullName = (req, res, next) => {
//   try {
//     const Chacked = read("chacked");
//     let { full_name } = req.body;

//     let rest = Chacked.filter((name) => name.full_name == full_name);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: rest,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// const EventType = (req, res, next) => {
//   try {
//     const Chacked = read("chacked");
//     let { event } = req.body;

//     let rest = Chacked.filter((event) => event.event == event);
//     res.status(200).json({
//       status: 200,
//       message: "success",
//       data: rest,
//     });
//   } catch (error) {
//     return next(new InternalServerError(500, "Internal Server Error"));
//   }
// };

// export default { DateFilter, FullName, EventType };
