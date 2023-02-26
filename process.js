function NightShift(){
  let nightShift = document.getElementsByTagName("html")[0];
  if(nightShift.style.backgroundColor == 'black'){
    nightShift.style.backgroundColor = 'white';
    document.getElementById("section_subcribe").style.backgroundColor = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = 'white';
    //infor product hide/show
    for(let i=0;i<8;i++){
         document.getElementsByClassName("infor_product")[i].style.backgroundColor = "white";
    }
     //nav night shift
     document.getElementsByTagName('nav')[0].style.backgroundColor ='white';
    //list li hide/show
    let i=0;
    while(document.getElementsByTagName("li")[i]){
      document.getElementsByTagName("li")[i].style.color = 'black';
      i++;
    }
    
  }
  else{
    nightShift.style.backgroundColor = 'black';
    document.getElementById("section_subcribe").style.backgroundColor = "#222222";
    document.getElementsByTagName("header")[0].style.backgroundColor = '#999999';
    //infor product hide/show
    for(let i=0;i<8;i++){
         document.getElementsByClassName("infor_product")[i].style.backgroundColor = "#999999";   
    }
    //nav night shift
    document.getElementsByTagName('nav')[0].style.backgroundColor ="#222222";
    //list li hide/show
    let i=0;
    while(document.getElementsByTagName("li")[i]){
      document.getElementsByTagName("li")[i].style.color = 'white';
      i++;
    }
  }
}

function messengerError(){
  alert('this Method is not realdy ! \n try again after 10 year');
  alert('the Night Shift method is realdy working \n you can try it')
}

let nav = document.getElementsByTagName('nav')[0];
let layerOpacity = document.getElementById('layerOpacity');
console.log(nav)

function hideShowNav(){
  if(nav.style.display == 'none'){
    nav.style.display = 'block';
    nav.style.transform = 'translateX(0px)';
    layerOpacity.style.display = 'block';
  }
  else{
    nav.style.transform = 'translateX(-154px)';
    nav.style.display = 'none';
    layerOpacity.style.display = 'none';
  }
}