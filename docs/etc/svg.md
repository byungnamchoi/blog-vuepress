# svg

<div class="signup"></div>
<div class="signup-complete"></div>
<div class="shoppingbag"></div>
<div class="order-complete"></div>
<div class="search">
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
    <g fill="none" fill-rule="evenodd">
      <g class="tear">
        <path stroke="#000" stroke-width="2" d="M50.05 46.508c0 3.977-2.68 7.201-5.985 7.201-3.306 0-5.985-3.224-5.985-7.202 0-5.538 5.985-11.335 5.985-11.335s5.986 5.797 5.986 11.336z" transform="translate(-140 -170) translate(10 170) translate(130) translate(12 12)"/>
      </g>
      <path stroke="#000" stroke-width="2" d="M34.646 54.153c-2.267.604-4.649.926-7.106.926C12.33 55.079 0 42.749 0 27.539 0 12.329 12.33 0 27.54 0c15.209 0 27.539 12.329 27.539 27.539 0 3.684-.724 7.2-2.037 10.413" transform="translate(-140 -170) translate(10 170) translate(130) translate(12 12)"/>
      <path fill="#000" d="M21.574 18.373c0 1.583-1.283 2.865-2.866 2.865-1.582 0-2.865-1.282-2.865-2.865 0-1.582 1.283-2.865 2.865-2.865 1.583 0 2.866 1.283 2.866 2.865M39.236 18.373c0 1.583-1.283 2.865-2.865 2.865-1.583 0-2.866-1.282-2.866-2.865 0-1.582 1.283-2.865 2.866-2.865 1.582 0 2.865 1.283 2.865 2.865" transform="translate(-140 -170) translate(10 170) translate(130) translate(12 12)"/>
      <path stroke="#000" stroke-width="2" d="M36.371 32.993s-3.029-4.428-8.826-4.428c-5.797 0-8.826 4.428-8.826 4.428M19.002 10.073s-2.549 3.104-6.318 3.436M36.077 10.073s2.55 3.104 6.318 3.436" transform="translate(-140 -170) translate(10 170) translate(130) translate(12 12)"/>
    </g>
  </svg>
</div>

**참고 자료(References)**
* <https://animejs.com/>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'svg'
}
</script>
<style lang="less">
  .search {
    .tear {
      animation: anime-tear .7s ease-in infinite;
    }
  }

  @keyframes anime-tear {
    from {
      transform: scale(.8) translateX(13px);
    }
    to {
      transform: scale(1) translateX(0);
    }
  }

  /* @keyframes pop {
    0% {
      transform: rotate(0deg) translateX(0px) rotate(0deg) scale(1);
      transform-origin: 50% 50%;
    }
    15% {
      transform: rotate(0deg) translateX(50px) rotate(0deg) scale(1);
      transform-origin: 50% 50%;
    }
    70% {
      transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(1);
      transform-origin: 50% 50%;
    }
    77% {
      transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(0.9);
      transform-origin: 50% 50%;
    }
    80% {
      transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(1);
      transform-origin: 50% 50%;
    }
    100% {
      transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(1);
      transform-origin: 50% 50%;
    }
  } */
</style>