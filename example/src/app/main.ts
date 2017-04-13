import { Server } from "../../../"
import { Main } from "./app.module"

Server(Main).serve('localhost', 3000, () => {
  console.log("Run server port %i", 3000);  
});