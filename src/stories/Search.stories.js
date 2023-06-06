import Search from "../shared/Search.vue";

export default {
  title: "shared/Search",
  component: Search,
  argTypes: {
    updateValue: {
      type: {
        name: "function",
      },
    },
  },
};

export { Search };
