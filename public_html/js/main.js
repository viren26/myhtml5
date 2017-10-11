$(document).ready(function(){
   
   var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var viren = 0;
  var f = false; 
var a = false; 
var g = false;
var s = false;
var d = false;
  var h = false;
  
var myselected = false;

 var clickevent = 0;


$("#my1").mouseover(function(){ 
   
    context.clearRect(0, 0, canvas.width, canvas.height);
 
 
   
        context.strokeStyle = "red";
      context.lineWidth = 4;   
      context.fillStyle = "red";
  
      $('context').fadeTo(100,0.5);

context.beginPath();
context.moveTo(661,204);
context.lineTo(1542,205);
context.stroke();
  
    });
     $("#my1").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });

    $("#flam").mouseover(function(){ 
    
    context.clearRect(0, 0, canvas.width, canvas.height);
 var  myall = '1077,434,1248,435,1250,264,1078,266'.split(',');

           var a = myall.length; 
        context.strokeStyle = "red";
      context.lineWidth = 4;   
      context.fillStyle = "red";
 
       
      $('context').fadeTo(100,0.5);
        context.beginPath();
  
    context.moveTo(myall[0],myall[1]);
    
    for (var i = 2; i < a; i = i +2) {
   context.lineTo(myall[i],myall[i+1]);
}
  
     context.closePath();
     context.stroke();
     context.fill();
 
    });
    $("#flam").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
  
    
 
    $("#glan").mouseover(function(){
       
      //   
     var glanmap = '254,274,234,334,351,389,376,310'.split(',');
     var b = glanmap.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
    context.fillStyle = "red";

    
        context.beginPath();
       context.moveTo(glanmap[0],glanmap[1]);
    
    for (var i = 2; i < b; i = i +2) {
      context.lineTo(glanmap[i],glanmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
   }); 
  
   $("#glan").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
   $("#map").mouseout(function(){
       // context.clearRect(0, 0, canvas.width, canvas.height);
       
    if(h){
    f= false;
             context.clearRect(0, 0, canvas.width, canvas.height);
      //  }
          //  context.clearRect(0, 0, canvas.width, canvas.height);
      var   pathh = "327,200,349,237,361,242,355,255,345,256,341,264,328,271,319,274,312,289,296,287,254,270,253,262,252,243,246,244,244,237,253,224,268,219,272,214,271,210".split(",");
          var ab = pathh.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
        context.fillStyle = "blue";
        
          context.beginPath();
       context.moveTo(pathh[0],pathh[1]);
    
    for (var i = 2; i < ab; i = i +2) {
      context.lineTo(pathh[i],pathh[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
   
    }
    if(f){
     // a = false;
             context.clearRect(0, 0, canvas.width, canvas.height);
 
         
       var  pathf = "289,165,281,179,276,179,260,194,253,204,230,220,199,238,99,266,73,177,105,169,96,127,166,111,164,99,191,73".split(",");
          var ab = pathf.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
        context.fillStyle = "blue";
        
          context.beginPath();
       context.moveTo(pathf[0],pathf[1]);
    
    for (var i = 2; i < ab; i = i +2) {
      context.lineTo(pathf[i],pathf[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
 
    }
    if(s){
       
             context.clearRect(0, 0, canvas.width, canvas.height);
  
      var  paths = "404,318,422,256,419,253,406,257,386,248,374,247,361,240,354,257,343,255,341,268,330,272,318,275,313,289".split(",");
              var bc = paths.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
        context.fillStyle = "blue";
        
          context.beginPath();
       context.moveTo(paths[0],paths[1]);
    
    for (var i = 2; i < bc; i = i +2) {
      context.lineTo(paths[i],paths[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
    }
   if(a){
    //   hh , ff, ss ,gg ,dd = true;
    //    if(hh || aa || ff || gg || dd || ss){
    g = false;
             context.clearRect(0, 0, canvas.width, canvas.height);
    //    }
      var   patha = "101,265,196,240,214,237,217,241,223,239,225,241,235,238,242,237,245,244,250,244,253,259,254,262,254,271,233,334".split(",");
             var ca = patha.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
   context.fillStyle = "blue";
   
        context.beginPath();
       context.moveTo( patha[0], patha[1]);
    
    for (var i = 2; i < ca; i = i +2) {
      context.lineTo( patha[i], patha[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
   }
    if(g){
 
             context.clearRect(0, 0, canvas.width, canvas.height);
  
     var    pathg = "254,274,234,334,351,389,376,310".split(",");
          var da =  pathg.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
        context.fillStyle = "blue";
        
          context.beginPath();
       context.moveTo( pathg[0], pathg[1]);
    
    for (var i = 2; i < da; i = i +2) {
      context.lineTo( pathg[i], pathg[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();   
   }
    if(d){
    //    hh , aa, ss ,gg ,ff = true;
     //    if(hh || aa || ff || gg || dd || ss){
             context.clearRect(0, 0, canvas.width, canvas.height);
     //   }
      var   pathd = "242,235,230,240,224,239,218,242,215,236,199,240,197,236,224,222,241,220,248,210,254,208,251,203,260,197,272,208,269,221".split(",");
            var ee = pathd.length;
     context.strokeStyle = "red";
    context.lineWidth = 4;
        context.fillStyle = "blue";
        
          context.beginPath();
       context.moveTo(pathd[0],pathd[1]);
    
    for (var i = 2; i < ee; i = i +2) {
      context.lineTo(pathd[i],pathd[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill(); 
   }

   });
  $("#stoneycreek").mouseenter(function(){
        //context.clearRect(0, 0, canvas.width, canvas.height);
      var stoneycreekmap ="404,318,422,256,419,253,406,257,386,248,374,247,361,240,354,257,343,255,341,268,330,272,318,275,313,289".split(",");
 
 
     var c = stoneycreekmap.length;
        context.strokeStyle = "red";
    context.lineWidth = 4;
       
             context.fillStyle = "red";
     
  
   context.beginPath();
       context.moveTo(stoneycreekmap[0],stoneycreekmap[1]);
    
    for (var i = 2; i < c; i = i +2) {
      context.lineTo(stoneycreekmap[i],stoneycreekmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
   });
  $("#stoneycreek").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
   $("#ancaster").mouseover(function(){
       //  context.clearRect(0, 0, canvas.width, canvas.height);
  
       f,d,g,s,a = false;
      var ancastermap ="101,265,196,240,214,237,217,241,223,239,225,241,235,238,242,237,245,244,250,244,253,259,254,262,254,271,233,334".split(",");
      
 
     var d = ancastermap.length;
        context.strokeStyle = "red";
    context.lineWidth = 4;
    context.fillStyle = "red";
     
   context.beginPath();
       context.moveTo(ancastermap[0],ancastermap[1]);
    
    for (var i = 2; i < d; i = i +2) {
      context.lineTo(ancastermap[i],ancastermap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
   });
   $("#ancaster").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
    
   $("#hamilton").mouseover(function(){
       
      // context.clearRect(0, 0, canvas.width, canvas.height);
     
      var hamiltonmap ="314,290,318,276,342,268,344,255,356,255,361,241,352,240,339,224,335,217,331,208,328,200,324,215,309,213,304,220,289,218,277,222,274,214,280,214,268,220,254,227,243,238,252,257,254,275".split(",");
 
 
     var e = hamiltonmap.length;
        context.strokeStyle = "red";
    context.lineWidth = 4;
    context.fillStyle = "red";
  
  
   context.beginPath();
       context.moveTo(hamiltonmap[0],hamiltonmap[1]);
    
    for (var i = 2; i < e; i = i +2) {
      context.lineTo(hamiltonmap[i],hamiltonmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
 
 
   });
   $("#hamilton").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
   $("#dundus").mouseover(function(){
     //    context.clearRect(0, 0, canvas.width, canvas.height);
     
      var dundusmap ="242,235,230,240,224,239,218,242,215,236,199,240,197,236,224,222,241,220,248,210,254,208,251,203,260,197,272,208,269,221".split(",");
 myselected = true;
 
     var f = dundusmap.length;
        context.strokeStyle = "red";
    context.lineWidth = 4;
     context.fillStyle = "red";
    
  
   context.beginPath();
       context.moveTo(dundusmap[0],dundusmap[1]);
    
    for (var i = 2; i < f; i = i +2) {
      context.lineTo(dundusmap[i],dundusmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
   });
   $("#dundas").mouseout(function(){
      
       context.clearRect(0, 0, canvas.width, canvas.height); 
       
   });
   
    $("#flam").click(function(){ 
   
        f = true;
      h,d,g,s,a = false;
     (document).getElementById("p1").innerHTML = "Flambourgh";
     (document).getElementById("p2").innerHTML = "population:23,00,000";
 var  fmap = '289,165,281,179,276,179,260,194,253,204,230,220,199,238,99,266,73,177,105,169,96,127,166,111,164,99,191,73'.split(',');

      var b = fmap.length;
     context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";

        context.beginPath();
       context.moveTo(fmap[0],fmap[1]);
    
    for (var i = 2; i < b; i = i +2) {
      context.lineTo(fmap[i],fmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
   
     // g.isVisible = true;
  //  drawall(myObj);
    });
$("#stoneycreek").click(function(){
       //  context.clearRect(0, 0, canvas.width, canvas.height);
       s = true;
       f,d,g,a,h = false;
           context.clearRect(0, 0, canvas.width, canvas.height);
          (document).getElementById("p1").innerHTML = "Stoney Creek";
     (document).getElementById("p2").innerHTML = "population:23,000";
      var stoneycreekmap ="404,318,422,256,419,253,406,257,386,248,374,247,361,240,354,257,343,255,341,268,330,272,318,275,313,289".split(",");
 
 
     var c = stoneycreekmap.length;
        context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";
  
   context.beginPath();
       context.moveTo(stoneycreekmap[0],stoneycreekmap[1]);
    
    for (var i = 2; i < c; i = i +2) {
      context.lineTo(stoneycreekmap[i],stoneycreekmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
  
   });

 $("#glan").click(function(){
           g = true;
     f,d,h,s,a = false;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
            (document).getElementById("p1").innerHTML = "Glanbrook";
     (document).getElementById("p2").innerHTML = "population:15,00,000";
     var glanmap = '254,274,234,334,351,389,376,310'.split(',');
     var b = glanmap.length;
  
     
      context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";
    
    


        context.beginPath();
       context.moveTo(glanmap[0],glanmap[1]);
    
    for (var i = 2; i < b; i = i +2) {
      context.lineTo(glanmap[i],glanmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
       
 
   }); 
   $("#ancaster").click(function(){
        a = true;
       f,d,g,s,h = false;
        context.clearRect(0, 0, canvas.width, canvas.height);
         
      (document).getElementById("p1").innerHTML = "Ancaster";
     (document).getElementById("p2").innerHTML = "population:21,00,000";
      var ancastermap = "101,265,196,240,214,237,217,241,223,239,225,241,235,238,242,237,245,244,250,244,253,259,254,262,254,271,233,334".split(",");
 
 
     var d = ancastermap.length;
     
  
   
          context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";
     
       
      
   context.beginPath();
       context.moveTo(ancastermap[0],ancastermap[1]);
    
    for (var i = 2; i < d; i = i +2) {
      context.lineTo(ancastermap[i],ancastermap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
  
   });
    $("#hamilton").click(function(){
          h = true; 
        f,d,g,s,a = false;
        context.clearRect(0, 0, canvas.width, canvas.height);
      
        
            (document).getElementById("p1").innerHTML = "Hamilton";
     (document).getElementById("p2").innerHTML = "population:30,00,000";
 
     
      var hamiltonmap ="327,200,349,237,361,242,355,255,345,256,341,264,328,271,319,274,312,289,296,287,254,270,253,262,252,243,246,244,244,237,253,224,268,219,272,214,271,210".split(",");
 
 
     var e = hamiltonmap.length;
        context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";
  
   context.beginPath();
       context.moveTo(hamiltonmap[0],hamiltonmap[1]);
    
    for (var i = 2; i < e; i = i +2) {
      context.lineTo(hamiltonmap[i],hamiltonmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
 
    
    });
    $("#dundus").click(function(){
         d = true;
        f,h,g,s,a = false;
        context.clearRect(0, 0, canvas.width, canvas.height);
    
         (document).getElementById("p1").innerHTML = "dundas";
     (document).getElementById("p2").innerHTML = "population:10,00,000";
      var dundusmap ="242,235,230,240,224,239,218,242,215,236,199,240,197,236,224,222,241,220,248,210,254,208,251,203,260,197,272,208,269,221".split(",");
 
 
     var f = dundusmap.length;
        context.strokeStyle = "blue";
    context.lineWidth = 4;
        context.fillStyle = "blue";
  
   context.beginPath();
       context.moveTo(dundusmap[0],dundusmap[1]);
    
    for (var i = 2; i < f; i = i +2) {
      context.lineTo(dundusmap[i],dundusmap[i+1]);
}
     context.closePath();
     context.stroke();
     context.fill();
  
   //   d.isVisible = true;
  //  drawall(myObj); 
   });
}); 
