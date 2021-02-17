# animejs + letterizejs

animejs + letterizejs 조합으로~<br>
랜덤으로 숫자를 뿌려주고~<br>
일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~

<div class="random">
  <h1 class="random__letters">
    <span
      v-for="(item, index) in randomLetters"
      :key="index"
      :class="['letters', `letters-${index + 1}`]"
    >
      {{ item.letters }}
    </span>
  </h1>
  <div class="random__group">
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

**참고 자료(References)**
* <https://animejs.com/>
* <http://letterizejs.com/>
* <https://tobiasahlin.com/moving-letters/>

<script>
import Letterize from 'letterizejs';
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'random',
  data() {
    return {
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
  mounted() {
    document.querySelector('.play').onclick = e => {
      this.autoplay = true;
      this.playLetters();
    };
  },
  methods: {
    playLetters() {
      const setLetters = {};
      setLetters.opacityIn = [0, 1];
      setLetters.scaleIn = [0.2, 1];
      setLetters.scaleOut = 3;
      setLetters.durationIn = 800;
      setLetters.durationOut = 600;
      setLetters.delay = 400;
      anime.timeline({
        loop: 1,
        autoplay: this.autoplay,
        // update: function(anim) {
        //   console.log('update');
        // },
        // changeBegin: function(anim) {
        //   console.log('changeBegin');
        // },
        // changeComplete: function(anim) {
        //   console.log('changeComplete', this.active, anim);
        // }
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
        }).finished.then(this.logFinished)
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
    logFinished(anime) {
      this.active = true;
      console.log('finished', this.active, anime);
      this.test();
   },
   test() {
    const randomItemSelector = new Letterize({
      targets: '.random__item'
    });
    anime({
      targets: randomItemSelector,
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      loop: true
    });
   },
    randomValues() {
      const values = this.randomValue;
      values.forEach(e =>
        e.value = values[Math.floor(Math.random() * values.length)].value
      );
    }
  }
}
</script>
<style lang="less">
  .random {
    box-sizing: border-box;
    position: relative;
    padding: 5vh 0;
    background-color: #222;
    font-family: "Khula", sans-serif;
    overflow: hidden;
    span {
      display: block;
    }
    &__letters {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      margin: 0;
      color: #fff;
      font-size: 4.5em;
      text-align: center;
      font-weight: 900;
      transform: translate(-50%, -50%);
      .letters {
        position: absolute;
        top: -60px;
        left: -60px;
        right: -60px;
        opacity: 0;
        margin: auto;
      }
    }
    &__group {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 45vh;
      margin: 0 auto;
      text-align: center;
    }
    &__item {
      opacity: 0;
      display: inline-flex;
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
      cursor: none;
    }
  }
</style>