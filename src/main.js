// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
/*import EVT from 'evtjs'

const network = {
host:'testnet1.everitoken.io',   
port:8888,                       
protocol: 'http'                
};
 
const APICaller = EVT({
 
endpoint: network,
keyProvider: '5J1kCsEqijM1zwDzBXWgKG5Ths5SqKoMB8jDxpsgeczJoRXNYqz', 
});

Vue.use(APICaller)
console.log(APICaller.getInfo());
*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
