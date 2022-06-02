<canvas id="lightpass" width="1158" height="770"></canvas>

<style>
html {
  height: 100vh;
}

body {
  background: #000;
  height: 500vh;
}

canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  max-height: 100vh;
  max-width: 100vw;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: 'requestAnimationFrame',
  mounted() {
    this.init();

  },
  methods: {
    init() {
      const canvas = document.getElementById('lightpass');
      const ctx = canvas.getContext('2d');
      console.log(ctx);
    }
  }
}
</script>