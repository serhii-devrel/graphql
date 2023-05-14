<template>
  <div class="search">
    <TypographyTitle :level="2">Search: </TypographyTitle>
    <Input @input="updateValue($event.target.value)" />
    <TypographyText type="secondary"
      >start typing to see results...</TypographyText
    >
  </div>
</template>

<script>
import { Input, TypographyTitle, TypographyText } from "ant-design-vue";

export default {
  name: "search",
  components: { Input, TypographyTitle, TypographyText },

  setup(props, { emit }) {
    const updateValue = (value) => {
      emit("update:modelValue", value);
    };

    return { updateValue };
  },
};
</script>
