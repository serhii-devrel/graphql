<template>
  <Dialog
    role="dialog"
    title="Edit book"
    aria-labelledby="Edit book"
    aria-describedby="that dialog menu helps to adjust the rate"
    :visible="visible"
    :confirm-loading="loading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <template #content>
      <InputNumber
        role="input"
        aria-roledescription="rating should be as a whole number between 0 and 10"
        v-model:value="rating"
        :min="0"
        :max="10"
      >
        <template #addonBefore>Enter a rating:</template>
      </InputNumber>
    </template>
  </Dialog>
</template>

<script>
import { ref, computed } from "vue";
import { InputNumber } from "ant-design-vue";
import Dialog from "../shared/Dialog.vue";
import useBookUpdateQuery from "../composables/useBookUpdateQuery";

export default {
  name: "EditBook",
  components: { InputNumber, Dialog },
  props: {
    bookId: { type: String, required: true },
  },

  setup(props, { emit }) {
    const rating = ref(null);
    const visible = ref(!!props.bookId);
    const { updateBook, loading, onDone } = useBookUpdateQuery(
      props.bookId,
      computed(() => rating.value)
    );

    const handleSubmit = () => {
      updateBook();
      onDone(() => {
        visible.value = false;
        emit("onEditDone", loading);
      });
    };

    const handleCancel = () => {
      visible.value = false;
      emit("onEditDone");
    };

    return {
      rating,
      visible,
      loading,
      handleSubmit,
      handleCancel,
    };
  },
};
</script>
