import { Router } from "express";

import category from "../controller/category.js";
import subCategory from "../controller/subCategory.js";
import filter from "../controller/filter.js";

const router = Router();
//    category filter
router.get("/category", category.Categories);
router.get("/subcategory", subCategory.subCategories);
router.get("/category/:category_name", category.selectCategory);
//   filter
router.post("/date", filter.DateFilter);
router.post("/name", filter.FullName);
router.post("/event", filter.EventType);

export default router;
