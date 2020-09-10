# {{ title }}

<script>
export default {
  name: 'blog',
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