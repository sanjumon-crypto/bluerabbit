
var tronlinkPop = new Vue({
  el: '#app2',
  data: {
    showpop: false,
    sunswapop: false,
  },
  mounted() {
  window.addEventListener('load', () => {
    this.showpop = true;
  })
  },
  methods: {
    closepop: function(){
        this.showpop = false;
    },
    sunswapclosepop: function(){
      this.sunswapop = false;
    },
    showsunswapop: function(){
      this.sunswapop = true;
    }
  }

});

