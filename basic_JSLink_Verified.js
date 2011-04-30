var print = function () {
    var i = 0,
        len = arguments.length,
        output = "",
        paragraph_node = document.createElement("p"),
        text_node,
        output_area = document.getElementById("output_area");

    for (; i < len - 1; i = i + 1) {
        output += arguments[i] + " ";
    }
    output += arguments[i];

    text_node = document.createTextNode(output);
    paragraph_node.appendChild(text_node);
    output_area.appendChild(paragraph_node);
};

var input = function () {
    var value;
    do {
        value = prompt("WHAT'S YOUR GUESS?", "0");
    } while (value === null || value === "");
    return value;
};


var main = function () {
    var mw = 2, m = 0, n = 0, t = 1, i= 0, j=0;
    var p = [];
    
    for (i=0; i<5; i++){
         p[i] = [3];
    }
  
    //Create New Mugwumps
    for (j=1; j<3; j++){
      for (i=1; i<5; i++){ 
         p[i][j]= Math.floor(Math.random()*11);
       }
     }   
   print("<<GAME STARTED>>");
   
 do{
    alert("ARE YOU READY TURN NO: " + t + " ?");      
    
    var d = [];   
        
    m = input();
    n = input();

    for (i=1; i<5; i++){
           if((p[i][1] === m) && (p[i][2] === n)){
               p[i][1]= -1;
               alert("YOU FOUND MUGWUMP: " + i);
               mw= mw - 1;
               
             if(mw === 0){
               alert("YOU GOT THEM ALL IN " + t + " TURNS!");
               break;
              } 
           }
           else{
                d[i]= Math.sqrt((p[i][1]-m)*(p[i][1]-m) + (p[i][2]-n)*(p[i][2]-n));
            }
    }
      alert("YOU ARE " + parseInt(d[1],10) + " UNITS FROM MUGWUMP " + "1" + "\n" 
           + "YOU ARE " + parseInt(d[2],10) + " UNITS FROM MUGWUMP " + "2" + "\n"
           + "YOU ARE " + parseInt(d[3],10) + " UNITS FROM MUGWUMP " + "3" + "\n"
           + "YOU ARE " + parseInt(d[4],10) + " UNITS FROM MUGWUMP " + "4");
           
           t += 1;
           
  }while(t<11);
     
    if(mw > 0){ 
      alert("SORRY, THAT'S 10 TRIES. HERE IS WHERE THEY'RE HIDING");
      
      for (i=1; i<5; i++){
          if(p[i][1]!==-1){
            print("MUGWUMP ",i,"IS AT (", p[i][1],",",p[i][2],")"); 
          }         
       } 
      }
       print("THAT WAS FUN! LET'S PLAY AGAIN.......");
       print("FOUR MORE MUGWUMPS ARE NOW IN HIDING.");
};