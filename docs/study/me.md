# {{ title }}

<script>
export default {
  name: 'me',
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