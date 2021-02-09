# animejs + letterizejs
<a href="https://animejs.com/" target="_blank">https://animejs.com/</a>
<a href="http://letterizejs.com/" target="_blank">http://letterizejs.com/</a>


animejs + letterizejs 조합으로~<br>
랜덤으로 숫자를 뿌려주고~<br>
일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~

<div class="random">
  <div class="random__group">
    <h1 class="random__letters">
      <span
        v-for="(item, index) in randomLetters"
        :key="index"
        :class="['letters', `letters-${index + 1}`]"
      >
        {{ item.letters }}
      </span>
    </h1>
    <p
      v-for="(item, index) in randomValue"
      :key="index"
      :class="['random__item', { 'is-active': active }]"
    >
      {{ item.value }}
    </p>
  </div>
</div>

<div class="controller">
  <button type="button" class="button play">PLAY</button>
  <button type="button" class="button restart">RESTART</button>
</div>

<div :class="['g-cursor', {'g-cursor_hover': hover}, {'g-cursor_hide': hideCursor}]">
  <div :style="cursorCircle" class="g-cursor__circle"></div>
  <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
</div>

<script>
import Letterize from 'letterizejs';
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'random',
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
      autoplay: false,
      active: false,
      randomLetters: [
        {
          letters: 'Ready'
        },
        {
          letters: 'Set'
        },
        {
          letters: 'Go!'
        }
      ],
      randomValue: [
        {
          value: '01 01 01 01 01 01 01 01 01 01'
        },
        {
          value: '02 02 02 02 02 02 02 02 02 02'
        },
        {
          value: '03 03 03 03 03 03 03 03 03 03'
        },
        {
          value: '04 04 04 04 04 04 04 04 04 04'
        },
        {
          value: '05 05 05 05 05 05 05 05 05 05'
        },
        {
          value: '06 06 06 06 06 06 06 06 06 06'
        },
        {
          value: '07 07 07 07 07 07 07 07 07 07'
        },
        {
          value: '08 08 08 08 08 08 08 08 08 08'
        },
        {
          value: '09 09 09 09 09 09 09 09 09 09'
        },
        {
          value: '10 10 10 10 10 10 10 10 10 10'
        },
        {
          value: '11 11 11 11 11 11 11 11 11 11'
        },
        {
          value: '12 12 12 12 12 12 12 12 12 12'
        },
        {
          value: '13 13 13 13 13 13 13 13 13 13'
        },
        {
          value: '14 14 14 14 14 14 14 14 14 14'
        },
        {
          value: '15 15 15 15 15 15 15 15 15 15'
        }
      ]
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
    document.querySelector('.play').onclick = e => {
      this.autoplay = true;
      this.playLetters();
      console.log(this.playLetters().setLetters);
    };
    // this.randomValues();
    // const randomItemSelector = new Letterize({
    //   targets: '.random__item'
    // });
    // anime({
    //   targets: randomItemSelector,
    //   scale: [
    //     {value: .1, easing: 'easeOutSine', duration: 500},
    //     {value: 1, easing: 'easeInOutQuad', duration: 1200}
    //   ],
    //   delay: anime.stagger(100, {
    //     grid: [randomItemSelector.list[0].length, randomItemSelector.list.length],
    //     from: 'center'
    //   }),
    //   loop: true
    // });
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 18;
        this.yParent = e.clientY - 18;
      }, 100);
    },
    playLetters() {
      const setLetters = {};
      const randomItemSelector = new Letterize({
        targets: '.random__item'
      });
      setLetters.opacityIn = [0, 1];
      setLetters.scaleIn = [0.2, 1];
      setLetters.scaleOut = 3;
      setLetters.durationIn = 800;
      setLetters.durationOut = 600;
      setLetters.delay = 400;
      anime.timeline({
        loop: true,
        autoplay: this.autoplay
      })
        .add({
          targets: '.letters-1',
          opacity: setLetters.opacityIn,
          scale: setLetters.scaleIn,
          duration: setLetters.durationIn
        }).add({
          targets: '.letters-1',
          opacity: 0,
          scale: setLetters.scaleOut,
          duration: setLetters.durationOut,
          easing: 'easeInExpo',
          delay: setLetters.delay
        }).add({
          targets: '.letters-2',
          opacity: setLetters.opacityIn,
          scale: setLetters.ScaleIn,
          duration: setLetters.durationIn
        }).add({
          targets: '.letters-2',
          opacity: 0,
          scale: setLetters.scaleOut,
          duration: setLetters.durationOut,
          easing: 'easeInExpo',
          delay: setLetters.delay
        }).add({
          targets: '.letters-3',
          opacity: setLetters.opacityIn,
          scale: setLetters.ScaleIn,
          duration: setLetters.durationIn
        }).add({
          targets: '.letters-3',
          opacity: 0,
          scale: setLetters.scaleOut,
          duration: setLetters.durationOut,
          easing: 'easeInExpo',
          delay: setLetters.delay
        }).add({
          targets: '.random__letters',
          opacity: 0,
          duration: 500,
          delay: 500
        }).add({
          targets: randomItemSelector,
          scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ]
        })
      // anime({
      //   targets: randomItemSelector,
      //   scale: [
      //     {value: .1, easing: 'easeOutSine', duration: 500},
      //     {value: 1, easing: 'easeInOutQuad', duration: 1200}
      //   ],
      //   delay: anime.stagger(100, {
      //     grid: [randomItemSelector.list[0].length, randomItemSelector.list.length],
      //     from: 'center'
      //   }),
      //   loop: true
      // });
    },
    /*
      1. 랜덤 생성
      랜덤 값을 새로운 배열로 만들어주고, 새로운 배열을 뿌려준다.
    */
    randomValues() {
      const values = this.randomValue;
      values.forEach(e =>
        e.value = values[Math.floor(Math.random() * values.length)].value
      );
    }
  }
}
</script>
<style lang="less" scoped>
  html,
  body {
    cursor: none;
  }
  .g-cursor {
    opacity: 1;
    transition: opacity .6s ease;
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
  .random {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 30vh;
    padding: 2vh 0;
    background-color: #222;
    align-items: center;
    justify-content: center;
    font-family: "Khula", sans-serif;
    overflow: hidden;
    span {
      display: block;
    }
    &__group {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 45vh;
      height: 25vh;
      text-align: center;
    }
    &__letters {
      position: relative;
      width: 100%;
      margin: 0;
      color: #fff;
      font-size: 4.5em;
      font-weight: 900;
      .letters {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        opacity: 0;
        margin: auto;
      }
    }
    &__item {
      opacity: 0;
      margin: 0;
      color: #fff;
      font-size: 1vw;
      letter-spacing: 6px;
      line-height: 1.2;
      text-align: center;
      text-transform: uppercase;
      &.is-active {
        opacity: 1;
      }
    }
  }
  .controller {
    margin-top: 10px;
    text-align: center;
    .button {
      min-width: 90px;
      padding: 5px;
      background: none;
      border: 1px solid #000;
    }
  }
</style>