import { shallowMount } from "@vue/test-utils";
import Dialog from "../Dialog.vue";

describe("Dialog", () => {
  let vm;

  beforeEach(() => {
    const wrapper = shallowMount(Dialog);
    vm = wrapper.vm;
  });

  it("should render without errors", () => {
    expect(vm).toBeTruthy();
  });
});
