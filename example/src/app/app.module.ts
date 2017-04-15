import { Module } from '../../../'
import { Pet } from "../controllers/PetController";
import { User } from "../controllers/UserController";

function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}

@Module({
  controllers: [
    Pet,
    User
  ],
  use: [],
  middlewares: [
    middleware
  ]
})
export class Main { }