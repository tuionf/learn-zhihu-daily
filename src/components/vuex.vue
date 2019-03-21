<template>
  <div id="app">
      ===============
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
export default {
  computed: {
    count () {
        return store.state.count
    }
  },
  methods:{
    increment () {
        store.commit('increment')
    },
    decrement () {
        store.commit('decrement')
    }
  }
}
</script>

<style lang="less">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

.header {
		width: 100%;
		height: 1.5rem;
		z-index: 9;
		padding-left: 5%;
		position: fixed;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.51) 95%);
		.iconfont {
			color: #fff;
			font-size: 0.8rem;
			top: 20%;
			position: relative;
		}
	}
</style>
