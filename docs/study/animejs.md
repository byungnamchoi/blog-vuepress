# Animejs
<a href="https://animejs.com/" target="_blank">https://animejs.com/</a>

<div class="mobile-mockup__container">
  <span class="eye-tracker"></span>
</div>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'animejs',
  mounted() {
    console.log(this);
    anime({
      targets: '.eye-tracker',
      translateX: '250px',
      duration: 8000,
      borderRadius: ['0%', '50%']
    });
  }
}
</script>
<style lang="less" scoped>
  .eye-tracker {
    display: block;
    width: 20px;
    height: 20px;
    background-color: green;
  }
</style>