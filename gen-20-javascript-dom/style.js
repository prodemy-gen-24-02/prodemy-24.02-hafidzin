function changeImage(image){
    let img = document.querySelector('#preview-image');
    img.setAttribute("src", image)
}

function counter(condition){
    let counter = document.getElementById('qty');
    console.log(counter)
    let currentValue = parseInt(counter.value);
    console.log(currentValue)
    if(condition == "plus"){
        counter.value++
    } else{
        counter.value--
    }
    // console.log(condition)
}