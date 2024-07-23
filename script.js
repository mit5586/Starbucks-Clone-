let sliders = document.getElementsByClassName('slider')
sliders = Array.from(sliders)


const opentab = (evt, stars)=>{
    sliders.forEach(element => {
        element.className = element.className.replace(" clicked", "")
    });
    evt.currentTarget.className += " clicked";
    // console.log(stars)
}
