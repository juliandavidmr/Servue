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
    profile: (req, res) => {
      return req;
    }
  }
});

MyVue.$serve('127.0.0.1', 9000);