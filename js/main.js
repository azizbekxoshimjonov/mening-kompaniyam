var elCarusel = document.querySelector('.carusel__list')
var elCaruselItems = document.querySelectorAll('.carusel__item')
var elWrapper = document.querySelector('.wrapper')
var sz = elCarusel.parentNode.offsetWidth
var sz = elWrapper.offsetWidth
var len = elCaruselItems.length;
var count = 0
elCarusel.style.width = `${100*len}%`
elCarusel.style.height = `100%`
for(var i = 0; i< elCaruselItems.length; i++){
  elCaruselItems[i].style.width = `${100 / len}%`
  elCaruselItems[i].style.height = `100%`
}
function fnPrevus(){
  count -= 1
  if(count >= 1){
  elCarusel.style.transform = `translateX(-${sz * count}px)`
}else{
  elCarusel.style.transform = `translateX(-${0}px)`
}

}

function fnNext(){
  count += 1
  if(count < len){
  elCarusel.style.transform = `translateX(-${sz * count}px)`
  }else{
    count = len - 1
  }

}
var elList = document.querySelector('.list')
var count = 0

function ong(){
    count = count - 1
    elList.style.transform = `translateX(-${800 * count}px)`
}

function chap(){
    count = count + 1
    if(count < 5){
        elList.style.transform = `translateX(-${800 * count}px)`
    }else{
        count = 4   
    }
}




