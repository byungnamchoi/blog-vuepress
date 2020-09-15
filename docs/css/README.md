---
sidebar: auto
---
# CSS
## Perspective (투영점)
`perspective`

보고 있는 사람의 위치를 추정하여 투영점을 명시하면 3D 환경을 만들 수 있습니다.<br> 말하자면 멀리 떨어진 사물은 작게, 가까이 있는 사물은 크게 만들어서 원근감을 주는 것 입니다.

`perspective-origin`

보는 사람이 어느 위치에서 보고 있는지를 나타내는 속성입니다. `perspective` 속성과 함께 소실점을<br> 나타내는 데 사용합니다. 디폴트는 `perspective-origin: 50% 50%;` 입니다.

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
  </div>

  <div class="btns">
    <label for="usePerspective" class="btn-use-perspective">Use perspective</label>
    <label for="runAnimation" class="btn-run-animation">Run animation</label>
  </div>

  <div class="prespective-range">
    <label for="prespective">prespective</label>
    <input type="range" id="prespective" class="vertical" data-var="prespective" data-unit="px" min="250" max="2500" value="1000" @input="setCssVariables($event);">
  </div>

  <div class="prespective-origin-y">
    <label for="prespectiveOriginY">prespective-origin-y</label>
    <input type="range" id="prespectiveOriginY" class="vertical" data-var="originY" data-unit="%" min="-100" max="200" value="0" @input="setCssVariables($event);">
  </div>

  <div class="prespective-origin-x">
    <label for="prespectiveOriginX">prespective-origin-x</label>
    <input type="range" id="prespectiveOriginX" class="horizontal" data-var="originX" data-unit="%" min="-100" max="200" value="100" @input="setCssVariables($event);">
  </div>
</div>

**자세한 내용은 아래 링크 참고**
* <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms>
* <https://css-tricks.com/how-css-perspective-works/>
* <https://nykim.work/26>

### (추가예정)섹션1-1
(추가예정)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### (추가예정)섹션1-2
(추가예정)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## (추가예정)섹션2
(추가예정)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## (추가예정)섹션3
(추가예정)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<script>
export default {
  name: 'CSS',
  methods: {
    setCssVariables(obj) {
      document.documentElement.style.setProperty(`--${obj.target.dataset.var}`, obj.target.value + obj.target.dataset.unit);
      // console.log(obj.target.value, obj.target.dataset.unit, obj.target.dataset.var);
    },
    setActive(obj) {
      document.querySelectorAll('input[type="range"]').forEach(e => {
        e.disabled = !obj.target.checked;
        console.log(e.disabled, obj.target.checked);
      });
      document.documentElement.style.setProperty('--prespective', obj.target.checked ? (document.querySelector('.prespective-range > input').value + 'px') : 'none');
    },
    setAnimation(obj) {
      if (obj.target.checked) {
        document.querySelector('.cube').classList.add('animated');
      } else {
        document.querySelector('.cube').classList.remove('animated');
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
    perspective: 800px;
    perspective-origin: top right;
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
    opacity: .9;
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