<template>
  <div :class="['g-cursor', {'g-cursor_hover': hover}, {'g-cursor_hide': hideCursor}]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
  export default {
    name: 'cursor',
    data() {
      return {
        xChild: 0,
        yChild: 0,
        xParent: 0,
        yParent: 0,
        hover: false,
        hideCursor: true
      }
    },
    computed: {
      cursorCircle() {
        return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
      },
      cursorPoint() {
        return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
      }
    },
    mounted() {
      this.hideCursor = false;
      document.addEventListener('mousemove', this.moveCursor);
      document.addEventListener('mouseleave', e => {
        this.hideCursor = true;
      });
      document.addEventListener('mouseenter', e => {
        this.hideCursor = false;
      });
    },
    methods: {
      moveCursor(e) {
        this.xChild = e.clientX;
        this.yChild = e.clientY;
        setTimeout(() => {
          this.xParent = e.clientX - 18;
          this.yParent = e.clientY - 18;
        }, 100);
      }
    },
  }
</script>

<style lang="less">
  html,
  body {
    cursor: none !important;

    a,
    button {
      cursor: none !important;
    }
  }
  .g-cursor {
    opacity: 1;
    transition: opacity .6s ease;
    position: absolute;
    &_hide {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width .6s ease, height .6s ease;
    }
    &__circle {
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      position: fixed;
      width: 30px;
      height: 30px;
      border: 1px solid #000;
      border-radius: 100%;
      z-index: 30;
      backface-visibility: hidden;
      transition: opacity .6s ease;
    }
    &__point {
      top: 0;
      left: 0;
      position: fixed;
      width: 3px;
      height: 3px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: #000;
      z-index: 40;
      backface-visibility: hidden;
      will-change: transform;
    }
    &_hover {
      .g-cursor__circle {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
          height .6s ease,
          opacity .6s ease;
      }
    }
  }
</style>