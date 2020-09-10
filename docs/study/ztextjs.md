# Ztextjs
<a href="https://bennettfeely.com/ztext/" target="_blank">https://bennettfeely.com/ztext/</a>

<h1 data-z data-z-layers="3" data-z-depth="0.5em">A</h1>

<script>
import Ztext from '../.vuepress/plugins/ztext.min.js';
export default {
  name: 'ztext'
}
</script>
<style lang="less" scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font: 10vw sans-serif;
}

/* ztext styles */
[data-z] {
  color: #ffc107;
}

.z-text {
  animation: wobble 12s ease-in-out infinite;
  transform: rotateX(30deg) rotateY(-30deg);
}

.z-layer:nth-child(1) {
  color: #ffc107;
}

.z-layer:nth-child(2) {
  color: #4caf50;
}

.z-layer:nth-child(3) {
  color: #3f51b5;
}

@keyframes wobble {
  0%,
  100% {
    transform: rotate3d(-1, 1, 0, 30deg);
  }
  25% {
    transform: rotate3d(1, 1, 0, 30deg);
  }
  50% {
    transform: rotate3d(1, -1, 0, 30deg);
  }
  75% {
    transform: rotate3d(-1, -1, 0, 30deg);
  }
}
</style>