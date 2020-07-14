<template>
  <div class="hello" id='pdfDom' ref="pdfDom">
    <h1>{{ $t('route.dashboard') }}</h1>
    <button @click='changeLang'>切换语言</button>
    <button @click='HtmlToPDF'>Html装换为PDF</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeLang(){
      this.$i18n.locale = this.$i18n.locale==='en'?'zh':'en'
    },
    HtmlToPDF(){
      this.getPdf(this.$refs.pdfDom)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
