Vue.component("app-header", {
  props: ["name"],
  template: ` <header class="app-header">
  <a class="logo" onclick="history.back()"><img src="images/back.svg">{{name}}</a>
  <div class="action-icon">
    <ul class="fl-wrap">
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/en.svg" class="img-fluid"
        /></a>
      </li>
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/bell.svg" class="img-fluid"
        /></a>
      </li>
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/headphone.svg" class="img-fluid"
        /></a>
      </li>
    </ul>
  </div>
</header>`,
});

Vue.component("app-footer", {
  template: `
  <div class="fixed-bottom-nav">
  <ul class="fl-wrap">
    <li>
      <a href="index.html" class="active"
        ><span
          ><img
            src="./core/images/home.png"
            alt=""
            class="img-fluid" /></span
        >Home</a
      >
    </li>
    <li>
      <a href="trading.html"
        ><span
          ><img
            src="./core/images/trade.png"
            alt=""
            class="img-fluid" /></span
        >Trading</a
      >
    </li>
    <li>
      <a href="index.html"
        ><span
          ><img
            src="./core/images/mids_logo.png"
            alt=""
            class="img-fluid" /></span
      ></a>
    </li>
    <li>
      <a href="share.html"
        ><span
          ><img
            src="./core/images/share..png"
            alt=""
            class="img-fluid" /></span
        >Share</a
      >
    </li>
    <li>
      <a href="profile.html"
        ><span
          ><img
            src="./core/images/user.png"
            alt=""
            class="img-fluid" /></span
        >Me</a
      >
    </li>
  </ul>
</div>
  `,
});

new Vue({
  el: "#app",
});
