import Vue from 'vue'
import Servue from './mixins/servue'

Vue.use(Servue);

var MyVue = new Vue({
  name: 'app',
  data: () => {
    return {
      cookies: {
        token: 'kkk'
      }
    }
  },
  api: {
    profile: (req, res, next) => {
      res.send("Hello, This is a profile");
    },
    'get:token': (req, res, next) => {
      res.send("Token is" + Math.random());
    }
  }
});

MyVue.serve('localhost', 3000, function () {
  console.log("Listening...")
});
