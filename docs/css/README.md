---
sidebar: auto
---
# CSS
## perspective
`perspective`

보고 있는 사람의 위치를 추정하여 투영점을 명시하면 3D 환경을 만들 수 있습니다.<br>
말하자면 멀리 떨어진 사물은 작게, 가까이 있는 사물은 크게 만들어서 원근감을 주는 것 입니다.

`perspective-origin`

보는 사람이 어느 위치에서 보고 있는지를 나타내는 속성입니다.<br>
`perspective` 속성과 함께 소실점을 나타내는 데 사용합니다.<br>
디폴트는 `perspective-origin: 50% 50%;` 입니다.

<div class="section-cube">
  <div class="container">
    <div class="cube">
      <div class="cube__side cube__side--front"></div>
      <div class="cube__side cube__side--left"></div>
      <div class="cube__side cube__side--right"></div>
      <div class="cube__side cube__side--back"></div>
      <div class="cube__side cube__side--top"></div>
      <div class="cube__side cube__side--bottom"></div>
    </div>
  </div>

  <div>
    <input type="checkbox" id="usePerspective" class="hidden" @change="setActive($event);" checked>
    <input type="checkbox" id="runAnimation" class="hidden" @change="setAnimation($event);">
    <input type="checkbox" id="backface" class="hidden" @change="setBackface($event);">
  </div>

  <div class="btns">
    <label for="usePerspective" class="btn-use-perspective">{{ perspectiveText }}</label>
    <label for="runAnimation" class="btn-run-animation">{{ animationText }}</label>
  </div>

  <div class="prespective-range">
    <label for="prespective">prespective</label>
    <input type="range" id="prespective" data-var="prespective" data-unit="px" min="250" max="2500" value="1000" @input="setCssVariables($event);">
  </div>

  <div class="prespective-origin-y">
    <label for="prespectiveOriginY">prespective-origin-y</label>
    <input type="range" id="prespectiveOriginY" data-var="originY" data-unit="%" min="-100" max="200" value="0" @input="setCssVariables($event);">
  </div>

  <div class="prespective-origin-x">
    <label for="prespectiveOriginX">prespective-origin-x</label>
    <input type="range" id="prespectiveOriginX" data-var="originX" data-unit="%" min="-100" max="200" value="100" @input="setCssVariables($event);">
  </div>
</div>

**참고 자료(References)**
* <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms>
* <https://css-tricks.com/how-css-perspective-works/>
* <https://nykim.work/26>

<script>
export default {
  name: 'CSS',
  data() {
    return {
      perspectiveText: 'Unused perspective',
      animationText: 'Run animation'
    }
  },
  methods: {
    setCssVariables(obj) {
      document.documentElement.style.setProperty(`--${obj.target.dataset.var}`, obj.target.value + obj.target.dataset.unit);
    },
    setActive(obj) {
      document.querySelectorAll('input[type="range"]').forEach(e => {
        e.disabled = !obj.target.checked;
        console.log(e.disabled, obj.target.checked);
      });
      document.documentElement.style.setProperty('--prespective', obj.target.checked ? (document.querySelector('.prespective-range > input').value + 'px') : 'none');
      if (obj.target.checked) {
        this.perspectiveText = 'Unused perspective';
      } else {
        this.perspectiveText = 'Use perspective';
      }
    },
    setAnimation(obj) {
      if (obj.target.checked) {
        document.querySelector('.cube').classList.add('animated');
        this.animationText = 'Stop animation';
      } else {
        document.querySelector('.cube').classList.remove('animated');
        this.animationText = 'Run animation';
      }
    }
  }
}
</script>

<style lang="less">
:root {
  --prespective: 1000px;
  --originY: 0%;
  --originX: 100%;
}
.section-cube {
  .container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 400px;
    height: 400px;
    background-color: #eee;
    border: 2px solid #fff;
    perspective: var(--prespective);
    perspective-origin: var(--originX) var(--originY);
  }

  .cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;

    &.animated {
      animation: cubeRotate 10s linear infinite;
    }
  }

  @keyframes cubeRotate {
    from {
      transform: rotateY(0deg) rotateX(720deg) rotateZ(0deg);
    }
    to {
      transform: rotateY(360deg) rotateX(0deg) rotateZ(360deg);
    }
  }

  .cube__side {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .7;
    border: 2px solid #fff;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .cube__side--front {
    background-color: #d50000;
    transform: translateZ(100px);

    &::before {
      content: 'front';
    }
  }
  .cube__side--back {
    background-color: #aa00ff;
    transform: translateZ(-100px);

    &::before {
      content: 'back';
    }
  }
  .cube__side--left {
    background-color: #304ffe;
    transform: rotateY(90deg) translateZ(100px);

    &::before {
      content: 'left';
    }
  }
  .cube__side--right {
    background-color: #0091ea;
    transform: rotateY(-90deg) translateZ(100px);

    &::before {
      content: 'right';
    }
  }
  .cube__side--top {
    background-color: #00bfa5;
    transform: rotateX(90deg) translateZ(100px);

    &::before {
      content: 'top';
    }
  }
  .cube__side--bottom {
    background-color: #64dd17;
    transform: rotateX(-90deg) translateZ(100px);

    &::before {
      content: 'bottom';
    }
  }

  .hidden {
    position: fixed;
    top: -10000px;
    left: -10000px;
    visibility: hidden;
  }

  .btns {
    margin: 30px 0 25px;
  }

  .btn-use-perspective,
  .btn-run-animation {
    margin-top: 10px;
    padding: 5px 10px;
    border: 1px solid #777;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;

    + label {
      margin-left: 10px;
    }
  }
}
</style>

## object-fit

`contain`

대체 콘텐츠의 가로세로비를 유지하면서, 요소의 콘텐츠 박스 내부에 들어가도록 크기를 맞춤 조절합니다. 콘텐츠가 콘텐츠 박스 크기에 맞도록 하면서도 가로세로비를 유지하게 되므로, 서로의 가로세로비가 일치하지 않으면 객체가 "레터박스"처럼 됩니다.

`cover`

대체 콘텐츠의 가로세로비를 유지하면서, 요소 콘텐츠 박스를 가득 채웁니다. 서로의 가로세로비가 일치하지 않으면 객체 일부가 잘려나갑니다.<br>
(`video`에 사용 가능)

`fill`

요소 콘텐츠 박스 크기에 맞춰 대체 콘텐츠의 크기를 조절합니다. 콘텐츠가 콘텐츠 박스를 가득 채웁니다. 서로의 가로세로비가 일치하지 않으면 콘텐츠가 늘어납니다.

`none`

대체 콘텐츠의 크기를 조절하지 않습니다.

`scale-down`

`none`과 `contain` 중 대체 콘텐츠의 크기가 더 작아지는 값을 선택합니다.

**참고 자료(References)**
* <https://developer.mozilla.org/ko/docs/Web/CSS/object-fit>

## svg

SVG는 확장 가능한 벡터 그래픽(Scalable Vector Graphics)을 말합니다.<br>
2차원 그래픽을 표현하기 위해 만들어진 XML파일 형식의 마크업 언어인데요.<br>
텍스트 편집기에서 CSS나 JS로 수정이 가능하다는 점이 가장 큰 장점이라 할 수 있습니다.

또한 확장이 가능하다는 점에서 확대해도 품질이 떨어지지 않습니다.<br>
레티나나 모바일에 대응하기 위한 추가 작업도 필요 없고,<br>
시각 장애가 있는 사용자들이 웹을 확대하더라도 품질 저하의 문제가 없습니다.

**[HTML 마크업 예시]**

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="31" height="34">
  <rect x="0" y="7" width="14" height="20" fill="rgba(174, 178, 184, 0.999)" />
  <polygon points="14, 34 30, 17 30, 17 14, 0" fill="rgba(174, 178, 184, 0.999)" />
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="31" height="34">
  <rect x="0" y="7" width="14" height="20" fill="rgba(174, 178, 184, 0.999)" />
  <polygon points="14, 34 30, 17 30, 17 14, 0" fill="rgba(174, 178, 184, 0.999)" />
</svg>
```

SVG를 백그라운드로 사용할 경우 IE, Edge 브라우저에서는 배경이미지가 보이지 않습니다.<br>
Base64로 인코딩하여 사용하면 문제가 해결됩니다.<br>
또한 hex 코드를 사용하면 IE, Edge 브라우저에서 색상이 검정색으로 보입니다.<br>
rgba의 알파값에 `0.999`를 사용하면 해결됩니다.


```
background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMxIiBoZWlnaHQ9IjM0Ij48cmVjdCB4PSIwIiB5PSI3IiB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoMTc0LCAxNzgsIDE4NCwgMC45OTkpIiAvPjxwb2x5Z29uIHBvaW50cz0iMTQsIDM0IDMxLCAxNyAxNCwgMCIgZmlsbD0icmdiYSgxNzQsIDE3OCwgMTg0LCAwLjk5OSkiIC8+PC9zdmc+') no-repeat 0 0;
```

**참고 자료(References)**
* <https://developer.mozilla.org/ko/docs/Web/SVG>
* <https://medium.com/coinone/svg%EB%A5%BC-%EB%B0%B0%EA%B2%BD%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%82%AC%EC%9A%A9%EA%B8%B0-d46e681b492f>
* <https://ngee.tistory.com/1407>
* <https://www.base64encode.org/>

## animation + gradient
`-webkit-text-fill-color` 속성은 텍스트에 지정색을 채워줍니다.<br> 이 속성이 설정되지 않은 경우 속성 값 `color` 사용됩니다.

`background-clip` 속성은 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할지 지정합니다.

<div class="linear-animation">
  <p class="linear-animation__text">Animation + Gradient</p>
</div>

<style lang="less">
  .linear-animation {
    padding: 50px;
    background-color: #333;

    &__text {
      margin: 0;
      color: #000;
      background: linear-gradient(to right, #d2cefd 20%, #8087fd 40%, #2700ff 60%, #d2cefd 80%);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 110px;
      font-weight: 900;
      line-height: 120px;
      animation: shine 3s linear infinite;
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
    }
  }
</style>

## shapes
### border 속성으로 화살표
<div class="triangle-border"></div>
<div class="triangle-border triangle-border--top"></div>
<div class="triangle-border triangle-border--right"></div>
<div class="triangle-border triangle-border--bottom"></div>
<div class="triangle-border triangle-border--left"></div>

### linear-gradient 속성으로 화살표
<div class="triangle-linerar"></div>

### clip-path 속성으로 화살표
속성은 요소의 클리핑 범위를 지정합니다. 클리핑 범위 안의 부분은 보여지고, 바깥은 숨겨집니다.
`circle(), ellipse(), polygon()`

<div class="triangle-clip"></div>

**참고 자료(References)**
* <https://moderncss.dev/pure-css-shapes-3-ways/>

<style lang="less">
  .triangle-border {
    display: inline-block;
    margin: 10px 10px 0 0;
    border: 10px solid blue;
    border-right-color: red;
    border-bottom-color: black;
    border-left-color: green;

    &--top {
      border-color: transparent;
      border-bottom-color: green;
    }
    &--right {
      border-color: transparent;
      border-width: 17px 0 17px 20px;
      border-left-color: blue;
    }
    &--bottom {
      border-color: transparent;
      border-top-color: black;
    }
    &--left {
      border-color: transparent;
      border-right-color: red;
    }
  }

  .triangle-linerar {
    width: 8em;
    height: 10em;
    margin-top: 10px;
    background-image: linear-gradient(32deg, blue 50%, rgba(255, 255, 255, 0) 50%), linear-gradient(148deg, blue 50%, rgba(255, 255, 255, 0) 50%);
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: top left, bottom left;
    outline: 1px solid red;
  }

  .triangle-clip {
    width: 16px;
    height: 20px;
    margin-top: 10px;
    background-color: blue;
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
  }
</style>

## grid
그리드는 수평선과 수직선이 교차해서 이루어진 집합체입니다.<br>
하나의 집합체는 세로 열을 그리고 다른 하나는 가로 행을 정의합니다.<br>
각 요소는 이러한 열과 행으로 된 라인을 따라 생성된 그리드에 배치할 수 있습니다.

### grid-template-columns, grid-template-rows
열(column)의 배치, 행(row)의 배치

`auto-fill` `auto-fit` 지정한 행과 열에 맞추면서도 플랙스박스와 유사한 효과를 내도록 콘텐츠를 정렬

### grid-auto-columns, grid-auto-rows
`grid-template-columns`, `grid-template-rows`의 통제를 벗어난 위치에 있는 트랙의 크기를 지정

### grid-column-start, grid-column-end, grid-column, grid-row-start, grid-row-end, grid-row
각 셀의 영역을 지정

### grid-column-gap, grid-row-gap
셀 사이의 경계 여백 혹은 간격

<div class="grid">
  <div class="grid__cell">
    <div class="nested header">header</div>
    <div class="nested main">main</div>
    <div class="nested aside">aside</div>
    <div class="nested footer">footer</div>
  </div>
  <div class="grid__cell">Two</div>
  <div class="grid__cell">Three</div>
  <div class="grid__cell">Four</div>
  <div class="grid__cell">Five</div>
</div>

**참고 자료(References)**
* <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_concepts_of_grid_layout>
* <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_grid_layout>
* <https://css-tricks.com/snippets/css/complete-guide-grid/>
* <https://studiomeal.com/archives/533>
* <https://heropy.blog/2019/08/17/css-grid/>

<style lang="less">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1em 1em;
    padding: 1em;
    border: 1px solid #ddd;

    &__cell {
      border: 1px solid #e0e0e0;

      &:nth-child(1) {
        display: grid;
        color: #fff;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-template-rows: repeat(3, 50);
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
          'header header header'
          'main . .'
          'main . aside'
          'footer footer footer'
      }

      &:nth-child(2) {
        color: #fff;
        background-color: #9c9c9c;
        grid-column-start: 1;
        grid-row-start: 3;
        grid-row-end: 5;
      }
    }

    .nested {
      background-color: #ccc;
      border: 1px solid #aaa;

      &.header {
        grid-area: header;
      }

      &.main {
        grid-area: main;
      }

      &.aside {
        grid-area: aside;
      }

      &.footer {
        grid-area: footer;
      }
    }
  }
</style>