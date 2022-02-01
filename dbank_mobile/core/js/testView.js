
var tronlinkPop = new Vue({
  el: '#app2',
  data: {
    showpop: false,
  },
  mounted() {
  window.addEventListener('load', () => {
    this.showpop = true;
  })
  },
  methods: {
    closepop: function(){
        this.showpop = false;
    }
  }

});

