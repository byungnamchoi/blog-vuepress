---
sidebar: auto
---
# LESS
## px to rem
```
// font-size: .rem(14)[] => font-size: 0.875rem
.rem(@px) {
  value: unit((@px/16), rem);
}
```
<p class="rem">px to rem</p>

## px to em
```
// font-size: .em(14, 16)[] => font-size: 0.875em
.em(@px, @parent) {
  value: unit((@px/@parent), em);
}
```
<p class="em">px to em</p>


<script>
export default {
  name: 'LESS'
}
</script>

<style lang="less">
.rem(@px) {
  value: unit((@px/16), rem);
}
.em(@px, @parent) {
  value: unit((@px/@parent), em);
}
.rem {
  font-size: .rem(14)[];
}
.em {
  font-size: .em(14, 16)[];
}
</style>