# 테스트

<div class="people">
  <div class="people__group">
    <span
      v-for="(item, index) in peopleList"
      :key="index"
      class="input"
    >
      <input
        :id="item.id"
        v-model="item.number"
        type="number"
        class="input__field"
        maxlength="3"
        onKeyPress="if (this.value.length == 3) return false;"
      >
      <label
        :for="item.id"
        class="input__label"
      >
        <span class="input__label-content">{{ item.team }}</span>
      </label>
    </span>
  </div>

  <p class="people__total">
    total <span>{{ sum }}</span>
  </p>
</div>

<div class="">
  ㄱㄱ
</div>

<script>
// import Vue from 'vue';
// import VueTabulator from 'vue-tabulator';

// Vue.use(VueTabulator);

export default {
  name: 'equipment',
  data() {
    return {
      peopleList: [
        {
          id: 'ebayMaintenance',
          number: '57',
          team: 'ebay maintenance'
        },
        {
          id: 'ebay UI',
          number: '14',
          team: 'ebay UI'
        },
        {
          id: 'ebaySalesManager',
          number: '3',
          team: 'ebay 통합판매툴'
        },
        {
          id: 'digitalMarketing',
          number: '7',
          team: 'digital marketing'
        }
      ]
    }
  },
  computed: {
    sum: function() {
      const numberArray = this.peopleList;
      const result = numberArray.map(item => Number(item.number));
      return result.reduce((accumulator, currentValue) => Number(accumulator + currentValue));
    },
  },
  mounted() {
    this.inputField();
  },
  methods: {
    inputField() {
      const inputFieldElement = document.querySelectorAll('.input__field');
      const filledClass = 'input--filled';
      inputFieldElement.forEach(e => {
        if (e.value.trim() !== '') {
          e.parentNode.classList.add(filledClass);
        }

        e.addEventListener('blur', (e) => {
          const element = e.target;
          element.value.trim() === '' ? element.parentNode.classList.remove(filledClass) : element.parentNode.classList.add(filledClass);
        });
      });
    }
  }
}
</script>

<style lang="less">
  .input {
    z-index: 1;
    display: inline-block;
    position: relative;
    max-width: 350px;
    width: calc(100% - 2em);
    margin: 3em 1em 1em;
    font-size: 150%;
    vertical-align: top;

    &__field {
      float: right;
      display: block;
      box-sizing: border-box;
      border-radius: 0;
      position: relative;
      width: 100%;
      padding: 0.4em 0.25em;
      color: #000;
      background: transparent;
      border: none;
      font-size: 1.55em;
      font-weight: bold;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-align: center;
      -webkit-appearance: none; /* for box shadows to show on iOS */

      &:focus {
        outline: none;
      }
    }

    &__label {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      padding: 0 1em;
      color: #000;
      font-size: 70.25%;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-touch-callout: none;
      user-select: none;
      pointer-events: none;

      &::before,
      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        background: #000;
        transition: transform 0.3s;
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }
    }

    &__label-content {
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 1.6em 0;
      transition: transform 0.3s;
    }
  }

  .input__field:focus + .input__label .input__label-content,
  .input--filled .input__label-content {
    transform: translate3d(0, -90%, 0);
  }

  .input__field:focus + .input__label::before,
  .input--filled .input__label::before {
    transform: translate3d(0, -0.5em, 0);
  }

  .input__field:focus + .input__label::after,
  .input--filled .input__label::after {
    transform: translate3d(0, 0.5em, 0);
  }

  .people {
    display: grid;
    padding: 1em;
    color: #000;

    &__group {
      display: grid;
      /* grid-template-columns: repeat(2, 1fr); */
      grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
      grid-gap: 1em;
    }

    &__total {
      display: grid;
      font-size: 180%;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
    }
  }
</style>