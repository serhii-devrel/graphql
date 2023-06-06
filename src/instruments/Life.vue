<script>
export default {
  name: "LifeMixin",

  onBeforeMount() {
    console.log("before mount");
  },

  onMounted() {
    console.log("mounted");
  },

  onUpdated() {
    console.log("updated");
  },

  onUnmounted() {
    console.log("unmounted");
  },
};
</script>
