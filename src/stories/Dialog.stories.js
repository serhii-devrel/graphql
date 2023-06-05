import Dialog from '../shared/Dialog.vue';

export default {
  title: 'shared/Dialog',
  component: Dialog,
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'placeholder',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Dialog },
  props: Object.keys(argTypes),
  template: `
      <Dialog v-bind="$props">
          <template v-if="${'namedSlot' in args}" v-slot>${args.namedSlot}</template>
      </Dialog>
  `,
})

export const BaseDialog = Template.bind({})
BaseDialog.agrs = {
  title: 'base',
  namedSlot: '<p>base</p>',
  cancel: () => console.log('ok')
}

export const WarningDialog = Template.bind({})
WarningDialog.agrs = {
  title: 'warning',
  namedSlot: '<p>warning</p>',
  ok: () => console.log('cancel')
}