<template>
    <div>
        
        <mt-button type="primary" @click="apitest">get请求</mt-button>
        
    </div>
</template>
<script>
import axios from 'axios'
import api from '../api/index.js'
export default {
    created: function () {
       axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (
          console.log('===' + JSON.stringify(response))
        ))
        .catch (function(err){
            console.log('==err=='+err);
        })
    },
    methods: {
      handleClick () {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (
            console.log('===' + JSON.stringify(response))
        ))
        .catch (function(err){
            console.log('==err=='+err);
        })
      },
      post () {
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      apitest () {
          console.log('==================+++++++++++++++++')
          api.getNews().then(function(data){
              console.log('===' + JSON.stringify(data))
            }
          ).catch(function (error) {
            console.log(error);
        });
      }  
    }
}
</script>
<style scoped>

</style>


