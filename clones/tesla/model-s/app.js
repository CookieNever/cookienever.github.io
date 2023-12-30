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