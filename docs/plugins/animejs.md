# animejs + letterizejs
<a href="https://animejs.com/" target="_blank">https://animejs.com/</a>
<a href="http://letterizejs.com/" target="_blank">http://letterizejs.com/</a>


animejs + letterizejs 조합으로~<br>
랜덤으로 숫자를 뿌려주고~<br>
일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~

<div class="random">
  <p
    v-for="(item, index) in randomValue"
    :key="index"
    class="random__item"
  >
    {{ item.value }}
  </p>
</div>

<div class="controller">
  <button type="button" class="button play">play</button>
</div>

<script src="https://cdn.jsdelivr.net/gh/WojciechWKROPCE/letterize-js/lib/letterize.min.js"></script>
<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'random',
  data() {
    return {
      randomValue: [
        {
          value: '01.01.01.01.01.01.01.01.01.01'
        },
        {
          value: '02.02.02.02.02.02.02.02.02.02'
        },
        {
          value: '03.03.03.03.03.03.03.03.03.03'
        },
        {
          value: '04.04.04.04.04.04.04.04.04.04'
        },
        {
          value: '05.05.05.05.05.05.05.05.05.05'
        },
        {
          value: '06.06.06.06.06.06.06.06.06.06'
        },
        {
          value: '07.07.07.07.07.07.07.07.07.07'
        },
        {
          value: '08.08.08.08.08.08.08.08.08.08'
        },
        {
          value: '09.09.09.09.09.09.09.09.09.09'
        },
        {
          value: '10.10.10.10.10.10.10.10.10.10'
        },
        {
          value: '11.11.11.11.11.11.11.11.11.11'
        },
        {
          value: '12.12.12.12.12.12.12.12.12.12'
        },
        {
          value: '13.13.13.13.13.13.13.13.13.13'
        },
        {
          value: '14.14.14.14.14.14.14.14.14.14'
        },
        {
          value: '15.15.15.15.15.15.15.15.15.15'
        }
      ]
    }
  },
  mounted() {
    this.randomValues();
  },
  methods: {
    /*
      1. 랜덤 생성
      랜덤 값을 새로운 배열로 만들어주고,
      새로운 배열을 뿌려준다.
    */
    randomValues() {
      const values = this.randomValue;
      // console.log(values);
    }
  }
}
</script>
<style lang="less" scoped>
  .random {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 50vh;
    height: 30vh;
    padding: 2vh 0;
    background-color: #222;
    align-items: center;
    justify-content: center;
    font-family: "Khula", sans-serif;

    span {
      display: block;
    }

    &__item {
      margin: 0;
      color: #fff;
      font-size: 1vw;
      letter-spacing: 6px;
      line-height: 1.2;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .controller {
    width: 50vh;
    margin-top: 8px;
    text-align: center;
  }
</style>