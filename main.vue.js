Vue.component("app-header", {
  props: ["name"],
  template: ` <header class="app-header">
  <div class="logo">{{name}}</div>
  <div class="action-icon">
    <ul class="fl-wrap">
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/en.png" class="img-fluid"
        /></a>
      </li>
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/bell.png" class="img-fluid"
        /></a>
      </li>
      <li>
        <a href="javascript:void(0)"
          ><img src="./core/images/headphone.png" class="img-fluid"
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
