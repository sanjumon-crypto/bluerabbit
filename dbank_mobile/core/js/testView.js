
var tronlinkPop = new Vue({
  el: '#app2',
  data: {
    showpop: false,
  },
  mounted() {
  window.addEventListener('load', () => {
    this.showpop = false;
  })
  },
  methods: {
    closepop: function(){
        this.showpop = false;
    }
  }

});

