var productImg = document.getElementById('productImg')

var previewImg = document.getElementsByClassName('simg')

previewImg[0].onclick = function(){
    productImg.src = previewImg[0].src;
}
previewImg[1].onclick = function(){
    productImg.src = previewImg[1].src;
}
previewImg[2].onclick = function(){
    productImg.src = previewImg[2].src;
}
previewImg[3].onclick = function(){
    productImg.src = previewImg[3].src;
}
previewImg[4].onclick = function(){
    productImg.src = previewImg[4].src;
}

