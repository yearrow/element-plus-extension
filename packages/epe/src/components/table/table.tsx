const { defineComponent } = Vue
export default defineComponent({
  name: 'YlTable',
  props: {
    tableloading: {
      type: Boolean,
      default: false,
      required: false,
      validator: (val) => {}
    },
  },
  computed: {},
  setup() {
  },
  methods: {},
  render() {
    return <div>hello  world111</div>
  }
})
