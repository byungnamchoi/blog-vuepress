# animejs + letterizejs

animejs + letterizejs 조합으로~<br>
랜덤으로 숫자를 뿌려주고~<br>
일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~

<div class="random">
  <h1 class="random__letters">
    <span
      v-for="(item, index) in letters"
      :key="index"
      :class="['letters', `letters-${index + 1}`]"
    >
      {{ item.letters }}
    </span>
  </h1>
  <div class="random__group">
    <p
      v-for="(item, index) in randomNumber"
      :key="index"
      class="random__item"
    >
      <!-- :class="['random__item', { 'is-active': active }]" -->
      {{ item.value }}
    </p>
  </div>
</div>

<div class="controller">
  <button type="button" class="button play">PLAY</button>
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
      letters: [
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
      randomNumber: [
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
    this.randomInit();
  },
  methods: {
    randomInit() {
      const values = this.randomNumber;
      const valuesArray = [];
      for (let i = 0; i < values.length; i++) {
        let randomValues = Math.floor(Math.random() * values.length + 1)
        if (valuesArray.indexOf(randomValues) === -1) {
          valuesArray.push(randomValues)
        } else {
          i--
        }
        values[i].value = values[valuesArray[i]-1].value
      }
      this.randomAnime();
      return false;
    },
    randomAnime() {
      const setLetters = {};
      setLetters.opacityIn = [0, 1];
      setLetters.scaleIn = [0.2, 1];
      setLetters.scaleOut = 3;
      setLetters.durationIn = 800;
      setLetters.durationOut = 600;
      setLetters.delay = 400;
      let timeLine;
      timeLine = anime.timeline({
        loop: 1,
        autoplay: false,
        update: function() {
          document.querySelector('.play').style.opacity = 0;
          document.querySelector('.play').style.transform = 'translateY(-40px)';
        },
        loopComplete: function(anim) {
          const letterize = new Letterize({
            targets: '.random__item'
          });
          timeLine = anime.timeline({
            targets: letterize.listAll,
            delay: anime.stagger(100, {
              grid: [letterize.list[0].length, letterize.list.length],
              from: 'center'
            }),
            loop: 1,
            complete: function(anim) {
              document.querySelector('.play').style.opacity = 1;
              document.querySelector('.play').style.transform = 'translateY(0)';
              console.log('complete', '특정 값 노출');
            }
          }).add({
            targets: '.random__item',
            opacity: 1,
            delay: anime.stagger(100, {
              grid: [letterize.list[0].length, letterize.list.length],
              from: 'center'
            }),
          })
          .add({
            scale: 0.8
          })
          .add({
            letterSpacing: '9px'
          })
          .add({
            scale: 1
          })
          .add({
            letterSpacing: '6px'
          })
          .add({
            targets: '.random__item',
            opacity: 0,
            delay: anime.stagger(100, {
              grid: [letterize.list.length, letterize.list[0].length]
            }),
          });
        }
      });

      timeLine
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
      });

      document.querySelector('.play').onclick = timeLine.play;
    }
  }
}
</script>
<style lang="less">
  .random {
    z-index: 1;
    box-sizing: border-box;
    position: relative;
    padding: 10vh 0;
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
        top: -50px;
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
      margin: 0 auto;
      text-align: center;
    }
    &__item {
      opacity: 0;
      transition: opacity .6s ease-in;
      display: inline-flex;
      margin: 0;
      color: #fff;
      font-size: 14px;
      letter-spacing: 6px;
      line-height: 1.2;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .controller {
    margin-top: 10px;
    height: 27px;
    text-align: center;
    .button {
      transition: opacity .4s ease, transform .4s ease;
      width: 90px;
      padding: 5px 0;
      background: none;
      border: 1px solid #000;
      cursor: none;
    }
  }
</style>