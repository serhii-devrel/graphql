<template>
  <Modal v-bind="$attrs" :visible="true">
    <div class="dialog">
      <slot name="content"></slot>
    </div>
  </Modal>
</template>

<script>
import { Modal } from "ant-design-vue";

export default {
  name: "Dialog",
  components: { Modal },
};
</script>

<style scoped>
.dialog {
  padding: 50px;
}
</style>
