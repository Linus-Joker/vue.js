HTML 部分

  <div id="app">{{message}}
    
    
    <input type="text" v-model="number">
    <input type="button" value="計算" @click="src()">
    <p>{{message2}}</p> 
    <p>{{message3}}</p>
    <p>{{message4}}</p>
  
  
  
  
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

      this.message3 = '需要:' + total; 
      
      
    }
    
  }
  
})
