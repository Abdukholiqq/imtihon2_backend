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
router.get("/posts/date/:date", filter.DateFilter);
router.get("/posts/name/:full_name", filter.FullName);
router.get("/posts/event/:event", filter.EventType);

export default router;
