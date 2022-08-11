// import { perfixfy } from '../../utils/variate'
// import prefix from '../../mixins/prefix'
// import Icon from '../icon/icon-register.js'
export default {
  // name: perfixfy('button'),
  // mixins: [prefix],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // activatable () {
    //   return !this.disabled && !this.loading
    // },
    // attrs () {
    //   let { loading, disabled, type, ...props } = this.$props
    //   return {
    //     tabindex: this.activatable ? null : '0',
    //     // role: this.activatable ? null : 'button',
    //     ...props,
    //     // 渲染成 div 的时候，type="button" 会导致在 Safari 上样式出现问题
    //     type: this.activatable ? type : null,
    //     'aria-disabled': this.disabled ? 'true' : null,
    //     // ui: this.realUi
    //   }
    // },
    // listeners () {
    //   if (this.activatable) {
    //     return this.$listeners
    //   }
    //   let { click, ...listeners } = this.$listeners
    //   return listeners
    // }
  },
  render () {
    // let Tag = this.activatable ? 'button' : 'div'
    return (
      <div>哈哈哈哈哈</div>
    )
  }
}
