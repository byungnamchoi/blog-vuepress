# {{ title }}

<script>
export default {
  name: 'home',
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