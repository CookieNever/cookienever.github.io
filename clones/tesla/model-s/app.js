const activeModelCard = document.querySelector(".activeModelCard")
const nonactiveModelCard = document.querySelector(".nonactiveModelCard")

const modelS = document.querySelector(".sixModelS")
const modelSPlaid = document.querySelector(".sixModelSPlaid")

const modelImg = document.querySelector(".modelImg")

modelS.addEventListener("click", function () {
    modelS.classList.add("activeModelCard")
    modelS.classList.remove("nonactiveModelCard")

    modelSPlaid.classList.remove("activeModelCard")
    modelSPlaid.classList.add("nonactiveModelCard")

    modelImg.src = "assets/Model-S-Dual-Motor-Powertrain-Carousel-Desktop.avif"
})

modelSPlaid.addEventListener("click", function () {
    modelSPlaid.classList.add("activeModelCard")
    modelSPlaid.classList.remove("nonactiveModelCard")

    modelS.classList.remove("activeModelCard")
    modelS.classList.add("nonactiveModelCard")

    modelImg.src = "assets/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop.avif"
})






const tenActiveModelCard = document.querySelector(".tenactiveModelCard")
const tenNonactiveModelCard = document.querySelector(".tennonactiveModelCard")

const firstBlock = document.querySelector(".firstBlock")
const secondBlock = document.querySelector(".secondBlock")
const thirdBlock = document.querySelector(".thirdBlock")
const fourthBlock = document.querySelector(".fourthBlock")

const destinationImg = document.querySelector(".destinationImg")

firstBlock.addEventListener("click", function () {
    firstBlock.classList.add("tenactiveModelCard")
    firstBlock.classList.remove("tennonactiveModelCard")

    secondBlock.classList.remove("tenactiveModelCard")
    secondBlock.classList.add("tennonactiveModelCard")

    thirdBlock.classList.remove("tenactiveModelCard")
    thirdBlock.classList.add("tennonactiveModelCard")

    fourthBlock.classList.remove("tenactiveModelCard")
    fourthBlock.classList.add("tennonactiveModelCard")

    destinationImg.src = "assets/firstDestinationVid.mp4"
})

secondBlock.addEventListener("click", function () {
    secondBlock.classList.add("tenactiveModelCard")
    secondBlock.classList.remove("tennonactiveModelCard")

    firstBlock.classList.remove("tenactiveModelCard")
    firstBlock.classList.add("tennonactiveModelCard")

    thirdBlock.classList.remove("tenactiveModelCard")
    thirdBlock.classList.add("tennonactiveModelCard")

    fourthBlock.classList.remove("tenactiveModelCard")
    fourthBlock.classList.add("tennonactiveModelCard")

    destinationImg.src = "assets/secondDestinationVid.mp4"
})

thirdBlock.addEventListener("click", function () {
    thirdBlock.classList.add("tenactiveModelCard")
    thirdBlock.classList.remove("tennonactiveModelCard")

    secondBlock.classList.remove("tenactiveModelCard")
    secondBlock.classList.add("tennonactiveModelCard")

    firstBlock.classList.remove("tenactiveModelCard")
    firstBlock.classList.add("tennonactiveModelCard")

    fourthBlock.classList.remove("tenactiveModelCard")
    fourthBlock.classList.add("tennonactiveModelCard")

    destinationImg.src = "assets/thirdDestinationVid.mp4"
})

fourthBlock.addEventListener("click", function () {
    fourthBlock.classList.add("tenactiveModelCard")
    fourthBlock.classList.remove("tennonactiveModelCard")

    secondBlock.classList.remove("tenactiveModelCard")
    secondBlock.classList.add("tennonactiveModelCard")

    thirdBlock.classList.remove("tenactiveModelCard")
    thirdBlock.classList.add("tennonactiveModelCard")

    firstBlock.classList.remove("tenactiveModelCard")
    firstBlock.classList.add("tennonactiveModelCard")

    destinationImg.src = "assets/fourthDestinationVid.mp4"
})