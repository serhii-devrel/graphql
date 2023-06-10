import { shallowMount } from "@vue/test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import Dialog from "../Dialog.vue";

// extended with accesible matcher
expect.extend(toHaveNoViolations);

describe("Dialog", () => {
  let vm;

  beforeEach(() => {
    const wrapper = shallowMount(Dialog);
    vm = wrapper.vm;
  });

  it("should render without errors", () => {
    expect(vm).toBeTruthy();
  });

  it("should render with accesible matcher", async () => {
    const wrapper = shallowMount(Dialog);

    const html = await axe(wrapper.element);

    expect(html).toHaveNoViolations();
  });
});
