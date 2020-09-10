# {{ title }}
<a href="https://animejs.com/" target="_blank">https://animejs.com/</a>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'ztext',
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.title = this.$page.title;
  }
}
</script>
<style lang="less" scoped>
</style>