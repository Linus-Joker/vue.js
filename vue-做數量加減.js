HTML 部分

<body>
  <div id="app">{{message}}
   
    <input type="datalist" v-model="number">
    <input type="button" value="+" v-on:click="add()">
    <input type="button" value="-" v-on:click="sub()"><br>
    {{number}}
    
  </div>

  
  <script src="https://unpkg.com/vue@2.4.4/dist/vue.js"></script>
</body>


JS部分

var app = new Vue({
  el:'#app',
  data:{
    
    message:'數量:',
    number:1
  },
  methods:{
    add:function(){
     this.number = this.number + 1;
      console.log(this.number);     
    },
    sub:function(){
      this.number = this.number -1;
    }
      
  }
    
})
