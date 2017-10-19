HTML 部分

  <div id="app">{{message}}
    
    
  <input type="text" v-model="number">
  <input type="button" value="計算" @click="src()">
  
  <p>{{nowTime}} <input type="button" 
       value="時間計算" @click="src2() "></p> 
  
  <p>{{message2}}</p>
  <p>{{message3}}</p>
  <p>{{total}}</p>
  
  
  
  
  </div>
  
  
  JS部分
  
new Vue({
  
  el:"#app",
  data:{
    
    message:'請輸入數字:',
    message2:'',
    nowTime:'', 
    number:1,
    number2:this.message2
     
  },
  methods:{
    
    src:function(){
      
      var hour = Math.floor(this.number /60);
      var min = this.number % 60;
      
      var total = hour + " 小時 " + min + " 分鐘 "
            
      this.message2 = '需要:' + total;  
            
    },
    
    src2:function(){
      
      var d = new Date();
      var time = d.toLocaleTimeString();
      this.nowTime = '現在時間: ' + time
     
      
      
    }
    
  },
  
  
  computed:{
    
    total:function(){
      
      var a = this.number; 
      
      return a;
      
    }
    
  }
      
})
