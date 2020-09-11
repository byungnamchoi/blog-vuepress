# Animejs
<a href="https://animejs.com/" target="_blank">https://animejs.com/</a>

<div class="mobile-mockup__container">
  <span class="eye-tracker"></span>
  <span class="eye-tracker"></span>
  <span class="eye-tracker"></span>
</div>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'animejs',
  mounted() {
    anime({
      targets: '.eye-tracker',
      translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        console.log(el, i, l);
        return (l - i) + .25;
      },
      
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