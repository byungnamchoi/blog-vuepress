# (현재 진행중)
VuePress + Github Action

<div :class="['g-cursor', {'g-cursor_hover': hover}, {'g-cursor_hide': hideCursor}]">
  <div :style="cursorCircle" class="g-cursor__circle"></div>
  <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
</div>

<script>
export default {
  name: 'home'
}
</script>