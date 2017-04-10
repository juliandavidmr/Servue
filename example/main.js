import Vue from 'vue'
import Servue from '../'

Vue.use(Servue);

var MyVue = new Vue({
  name: 'app',
  data: () => {
    return {
      secondname: 'David'
    }
  },
  watch: {
    secondname: function (val) {
      this.socket.emit('tag', this.val)
      console.log("Object secondname has changed", this.socket, this.$options.socket)
    }
  },
  methods: {
    profile: (req, res, next) => {
      res.send("Hello, This is a profile");
    },
    'get:token': (req, res, next) => {
      res.send("Token is" + Math.random());
    }
  }
});

const port = 3000;

MyVue.serve('localhost', port, function () {
  console.log(`Listening ${port}...`)
});

setInterval(() => {
  MyVue.secondname = 'Julian';
}, 1000);
