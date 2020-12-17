import express from "express";
import PostController from "./controllers/PostController";
import PageController from "./controllers/PageController";

const routes = express.Router();

const postController = new PostController();
const pageController = new PageController();

routes.get("/posts", postController.index);
routes.get("/pages", pageController.index);

export default routes;