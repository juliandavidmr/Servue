import { Module } from '../../../'
import { Pet } from "../controllers/PetController";
import { User } from "../controllers/UserController";

@Module({
  controllers: [
    Pet,
    User
  ]
})
export class Main {}