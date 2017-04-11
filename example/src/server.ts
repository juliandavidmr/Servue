import * as Vue from 'vue'
import { VueController, Watch } from '../../'

/**
 * Server
 */
@VueController({
  prefix: 'user'
})
class User {

  info: string = "Julian";

  @Watch("info")
  vigilante() {
    console.log("Hello");
  }
}

// VueController.server();

/*
@VueComponent
class Server {
    @Prop someProp:string;

    @Prop({
        type: String
    })
    someDefaultProp:string = 'some default value'; 

    @Prop someObjProp:{some_default:string} = {some_default: 'value'}; //vue-typescript makes sure to deep clone default values for array and object types

    @Prop someFuncProp(){ //defined functions decorated with prop are treated as the default value
        console.log('logged from default function!');
    }

    someVar:string = 'Hello!';
    
    doStuff() {
        console.log('I did stuff');
    }
}
*/