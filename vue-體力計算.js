HTML 部分

  <div id="app">{{message}}
    
    
    <input type="text" v-model="number">
    <input type="button" value="計算" @click="src()">
  
  
  
  
  </div>
  
  
  JS部分
  
  new Vue({
  
  el:"#app",
  data:{
    
    message:'請輸入數字:',
    number:1
    
  },
  methods:{
    
    src:function(){
      
      var hour = Math.floor(this.number /60);
      var min = this.number % 60;
      
      var total = hour + " hour " + min + " min "
           
      console.log(total);
      
    }
    
  }
  
})
