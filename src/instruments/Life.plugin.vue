<script>
export default {
  // plugin setup
  install: (app, options) => {
    console.log(app, options);

    // add directive
    app.directive("test-directive", {
      mounted(el, binding, vnode, oldVnode) {
        console.log("logic", el, binding, vnode, oldVnode);
      },
    });
  },
};
</script>
