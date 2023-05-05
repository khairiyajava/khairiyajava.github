document.querySelector("#image").addEventListener("mouseover",function(){
   this.style.width="200px";
   this.style.height="200px";
});
document.querySelector("#image").addEventListener("mouseout",function(){
    this.style.width="150px";
    this.style.height="150px";
 });

 document.addEventListener('DOMContentLoaded', function(){
   document.querySelector('button').onclick= function(){
      let image=document.querySelector('#image');
      if(image.style.left=== '0px') {
         image.style.left='calc(100% - 150px)';

      }else{
         image.style.left= '0px';
      }

   }



 });