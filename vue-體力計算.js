HTML 部分

  <div id="app">
    
    {{message}} <input type="text" v-model="number1"><br>
    
    {{message1}}
                  
                  
    <input type="text" v-model="number2">
    <input type="button" value="計算" @click="src()">
    
    <p>{{nowTime}} <input type="button" 
         value="現在時間" @click="src2() "></p> 
    
    <p>{{message2}}</p>
    
    <p>{{total}}</p>
                
                
  </div>



    <script src="https://unpkg.com/vue@2.5.2/dist/vue.js">
    </script>
  
  
  JS部分
  
new Vue({
  
  el:"#app",
  data:{
    
    message:'請輸入現在體力:',
    message1:'請輸入目標體力:',
    message2:'',
    nowTime:'', 
   
    number1:1,
    number2:1,
    hours:1,
    min:1
   
    
     
  },
  methods:{
    
    src:function(){
      
      var number = (this.number2 - this.number1) *8;
      var hour = Math.floor(number /60);
      var min = number % 60;      
      var total = hour + " 小時 " + min + " 分鐘 "
            
      this.hours = hour;
      this.min = min;
      
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
                 
      var d = new Date();
      
      var h = this.hours + d.getHours();
      var m = this.min + d.getMinutes();
      
      if (h >= 24){
        
        var h1 = h-24;
        
        return '完成時間:明天 ' + h1 + '點' + m + '分';
        
        
      }else{
        
        return '完成時間: ' + h + '點' + m + '分';
        
      }
       
            
    }
    
  }
      
})
