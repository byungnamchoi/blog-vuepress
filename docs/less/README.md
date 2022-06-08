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

## less 플러그인 기능 사용 가능
```
.button {
  padding: unit((4/20), em) unit((10/20), em);
  font-size: unit((20/16), rem);
}

.button {
  padding: .em(4, 20)[] .em(10, 20)[];
  font-size: .rem(20)[];
}

.button {
  padding: em(4, 20) em(10, 20);
  font-size: rem(20);
}
```

### less 플러그인은 JS 함수 추가 필요
```
const gulp = require("gulp");
const less = require("gulp-less");

function css() {
  return gulp
    .src("src/**/*.less")
    .pipe(
      less({
        plugins: [
          {
            install(less, pluginManager, functions) {
              /**
               * 목표 px 값을 rem 값으로 변환하여 출력
               * font-size: rem(20) => font-size: 1.25rem
               */
              functions.add("rem", ({ value }) => value / 16 + "rem");
              /**
               * 부모 px 값에 대해 목표 px 값이 되는 em 값을 반환
               * font-size: em(20, 16) => font-size: 1.25em
               */
              functions.add(
                "em",
                (target, parent) => target.value / parent.value + "em"
              );
              /**
               * 특정 뷰포트 너비일때의 px 값에 해당하는 vw 값을 반환
               * width: vw(36, 360) => width: 10vw
               */
              functions.add(
                "vw",
                (targetPx, viewportWidth) =>
                  (targetPx.value / viewportWidth.value) * 100 + "vw"
              );
              /**
               * 특정 뷰포트 높이일때의 px 값에 해당하는 vh 값을 반환
               * height: vh(36, 360) => height: 10vh
               */
              functions.add(
                "vh",
                (targetPx, viewportHeight) =>
                  (targetPx.value / viewportHeight.value) * 100 + "vh"
              );
            },
          },
        ],
      })
    )
    .pipe(gulp.dest("dist/"));
}
```

```
/**
 * 지정한 경로, 파일명, 파일형식에 해당하는 웹 폰트 참조문 반환
 * src: local("Poppins"), fonts("../assets/fonts/", "Poppins", "woff2,woff")
 * =>
 * src: local("Poppins"),
 *      url("../assets/fonts/Poppins.woff2") format("woff2"),
 *      url("../assets/fonts/Poppins.woff") format("woff");
 */
functions.add("fonts", (path, fileName, formats) => {
  const pathPrefix = path.value || "";
  const fileFormats = formats.value.split(",").map((format) => format.trim());
  const fileRefs = fileFormats.map(
    (format) =>
      `url("${pathPrefix}${fileName.value}.${format}") format("${format}")`
  );
  return fileRefs.join(",");
});
```

## 뷰포트 최소/최대 너비에 대한 clamp() 값 생성기
* <a href="https://min-max-calculator.9elements.com" target="_blank">https://min-max-calculator.9elements.com</a>
* <a href="https://codepen.io/dowonkang/pen/QWQOyjx?editors=0011" target="_blank">https://codepen.io/dowonkang/pen/QWQOyjx?editors=0011</a>
```
// see https://min-max-calculator.9elements.com/
// extracted from https://github.com/9elements/min-max-calculator/blob/main/src/components/Calculator/Calculator.svelte

const pxToRem = (value) => (value / 16).toFixed(3);

function calc({ minValue, maxValue, minViewport, maxViewport }) {
  const variablePart = (maxValue - minValue) / (maxViewport - minViewport);
  const constant = parseFloat((maxValue - maxViewport * variablePart) / 16).toFixed(3);
  const minRem = `${pxToRem(minValue)}rem`;
  const maxRem = `${pxToRem(maxValue)}rem`;
  const value = `${constant}rem + ${parseFloat((100 * variablePart).toFixed(2))}vw`;
  return `clamp(${minRem},${value},${maxRem})`;
}

console.log(calc({
  minValue: 16,
  maxValue: 24,
  minViewport: 320,
  maxViewport: 1200
}));
```

## aspect-ratios
* <a href="https://codepen.io/enbee81/pen/OJzoQZa" target="_blank">https://codepen.io/enbee81/pen/OJzoQZa</a>

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