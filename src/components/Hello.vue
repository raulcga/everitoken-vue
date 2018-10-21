<template>
  <div class="hello" > 
    <a class="button is-primary" @click="getInfo"  >Get Info </a>
    <a class="button is-danger" @click="getBalance"  >Get Balance</a>
    <a class="button is-success" @click="getQR"  >Get QR</a>
  <p v-model="info"></p> 
  <p v-model="tokens"></p> 
  <img width="500px" id="qr" src=""> </img>

  </div>
</template>

<script>
 import EVT from 'evtjs'
 const network = {
 host:'testnet1.everitoken.io',   
 port:8888,                       
 protocol: 'http'                
 };
 const APICaller = EVT({
 endpoint: network,
 keyProvider: '5J1kCsEqijM1zwDzBXWgKG5Ths5SqKoMB8jDxpsgeczJoRXNYqz', 
 });
//console.log(APICaller.getDomainDetail('test'));
export default {
  name: 'Hello',
  data () {
    return { 
      info:{},
      tokens:[],
      qr:{}
    }
  },
  methods: {
  getInfo: async function () {    
  try {
    this.info = await APICaller.getInfo();
     console.log(this.info);
  } catch (err) {
    console.log(err); 
  }
  },

  getBalance: async function () {  
  try {
    this.tokens = await APICaller.getManagedGroups('EVT57PWW2GPBzgdKe7iZzRwJfhG7GHFNzPSEZYAUGoUjfg4goJYSG');
     console.log(this.tokens);
  } catch (err) {
    console.log(err); 
  }
  },

  getQR: async function () {
  let linkId = await EVT.EvtLink.getUniqueLinkId();
  try {
    let key = await EVT.EvtLink.getEVTLinkQrImage(
    "everiPay", 
    {
        keyProvider: ["5J1kCsEqijM1zwDzBXWgKG5Ths5SqKoMB8jDxpsgeczJoRXNYqz"],
        symbol: 1, // EVT
        maxAmount: 1000000, // Max charge (1 = 0.00001 EVT)
        linkId
    },
    { 
        autoReload: true
    },
    (err, res) => {
        if (err) {
           // console.log(err.message);
            return;
        }
        this.qr = res.dataUrl;
        //console.log(res.dataUrl);
        document.getElementById("qr").setAttribute("src", res.dataUrl);
        //console.log(res.rawText);
        EVT.EvtLink.parseEvtLink(res.rawText).then(res => {
        //console.log(JSON.stringify(res, null, 2));
        });
        }
    );
    } catch (err) {
    console.log(err);   
  }
  } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
