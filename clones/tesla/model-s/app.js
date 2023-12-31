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



































const fourteenActiveModelCard = document.querySelector(".tenactiveModelCard")
const fourteenNonactiveModelCard = document.querySelector(".fourteennonactiveModelCard")

const ffirstBlock = document.querySelector(".ffirstBlock")
const fsecondBlock = document.querySelector(".fsecondBlock")
const fthirdBlock = document.querySelector(".fthirdBlock")
const ffourthBlock = document.querySelector(".ffourthBlock")

const autoImg = document.querySelector(".autoImg")

ffirstBlock.addEventListener("click", function () {
    ffirstBlock.classList.add("fourteenactiveModelCard")
    ffirstBlock.classList.remove("fourteennonactiveModelCard")

    fsecondBlock.classList.remove("fourteenactiveModelCard")
    fsecondBlock.classList.add("fourteennonactiveModelCard")

    fthirdBlock.classList.remove("fourteenactiveModelCard")
    fthirdBlock.classList.add("fourteennonactiveModelCard")

    ffourthBlock.classList.remove("fourteenactiveModelCard")
    ffourthBlock.classList.add("fourteennonactiveModelCard")

    autoImg.src = "assets/Model_S_Navigate_0-mp4.webm"
})

fsecondBlock.addEventListener("click", function () {
    fsecondBlock.classList.add("fourteenactiveModelCard")
    fsecondBlock.classList.remove("fourteennonactiveModelCard")

    ffirstBlock.classList.remove("fourteenactiveModelCard")
    ffirstBlock.classList.add("fourteennonactiveModelCard")

    fthirdBlock.classList.remove("fourteenactiveModelCard")
    fthirdBlock.classList.add("fourteennonactiveModelCard")

    ffourthBlock.classList.remove("fourteenactiveModelCard")
    ffourthBlock.classList.add("fourteennonactiveModelCard")

    autoImg.src = "assets/lane_change_0-mp4.webm"
})

fthirdBlock.addEventListener("click", function () {
    fthirdBlock.classList.add("fourteenactiveModelCard")
    fthirdBlock.classList.remove("fourteennonactiveModelCard")

    fsecondBlock.classList.remove("fourteenactiveModelCard")
    fsecondBlock.classList.add("fourteennonactiveModelCard")

    ffirstBlock.classList.remove("fourteenactiveModelCard")
    ffirstBlock.classList.add("fourteennonactiveModelCard")

    ffourthBlock.classList.remove("fourteenactiveModelCard")
    ffourthBlock.classList.add("fourteennonactiveModelCard")

    autoImg.src = "assets/summon_1-mp4.webm"
})

ffourthBlock.addEventListener("click", function () {
    ffourthBlock.classList.add("fourteenactiveModelCard")
    ffourthBlock.classList.remove("fourteennonactiveModelCard")

    fsecondBlock.classList.remove("fourteenactiveModelCard")
    fsecondBlock.classList.add("fourteennonactiveModelCard")

    fthirdBlock.classList.remove("fourteenactiveModelCard")
    fthirdBlock.classList.add("fourteennonactiveModelCard")

    ffirstBlock.classList.remove("fourteenactiveModelCard")
    ffirstBlock.classList.add("fourteennonactiveModelCard")

    autoImg.src = "assets/parking-mp4.webm"
})










































const modelSPlaidComp = document.querySelector(".modelsplaidBtn")
const modelSComp = document.querySelector(".modelsBtn")

modelSPlaidComp.addEventListener("click", function () {

    const range1 = document.getElementById("range1")
    const range2 = document.getElementById("range2")

    range1.innerText = "Range (EPA est.)"
    range2.innerText = "396 mi"


    const mile1 = document.getElementById("mile1")
    const mile2 = document.getElementById("mile2")

    mile1.innerText = "1/4 Mile"
    mile2.innerText = "9.23@155 mph trap speed"


    const peak1 = document.getElementById("peak1")
    const peak2 = document.getElementById("peak2")

    peak1.innerText = "Peak Power"
    peak2.innerText = "1,020 hp"


    const acc1 = document.getElementById("acc1")
    const acc2 = document.getElementById("acc2")
    const acc3 = document.getElementById("acc3")

    acc1.innerText = "*Acceleration"
    acc2.innerText = "1.99 s 0-60 mph"
    acc3.innerText = "with rollout subtracted"

    acc3.classList.add("italic")


    const wheel1 = document.getElementById("wheel1")
    const wheel2 = document.getElementById("wheel2")

    wheel1.innerText = "Wheels"
    wheel2.innerText = '19" or 21"'


    const cargo1 = document.getElementById("cargo1")
    const cargo2 = document.getElementById("cargo2")

    cargo1.innerText = "Cargo"
    cargo2.innerText = "28 cu ft"


    const weight1 = document.getElementById("weight1")
    const weight2 = document.getElementById("weight2")

    weight1.innerText = "Weight"
    weight2.innerText = "4,776 lbs"


    const speed1 = document.getElementById("speed1")
    const speed2 = document.getElementById("speed2")
    const speed3 = document.getElementById("speed3")

    speed1.innerText = "†Top Speed"
    speed2.innerText = "200 mph"
    speed3.innerText = "when equipped with paid hardware upgrades"

    speed3.classList.add("italic")


    const drag1 = document.getElementById("drag1")
    const drag2 = document.getElementById("drag2")

    drag1.innerText = "Drag Coefficient"
    drag2.innerText = "0.208 Cd"


    const power1 = document.getElementById("power1")
    const power2 = document.getElementById("power2")

    power1.innerText = "Powertrain"
    power2.innerText = "Tri Motor"


    const super1 = document.getElementById("super1")
    const super2 = document.getElementById("super2")

    super1.innerText = "Supercharging Max"
    super2.innerText = "250 kW"


    const warr1 = document.getElementById("warr1")
    const warr2 = document.getElementById("warr2")
    const warr3 = document.getElementById("warr3")

    warr1.innerText = "Warranty"
    warr2.innerText = "Basic Vehicle - 4 years or 50,000 miles, whichever comes first Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first"
    warr3.innerText = "See Details"

    const lastHR = document.getElementById("lastHR")
    lastHR.classList.remove("hide")

    modelSPlaidComp.style.border = "3px solid #FFF"

    modelSComp.style.border = "3px solid #222"

})



modelSComp.addEventListener("click", function () {

    const range1 = document.getElementById("range1")
    const range2 = document.getElementById("range2")

    range1.innerText = "Range (EPA est.)"
    range2.innerText = "405 mi"


    const mile1 = document.getElementById("mile1")
    const mile2 = document.getElementById("mile2")

    mile1.innerText = "Peak Power"
    mile2.innerText = "670 hp"


    const peak1 = document.getElementById("peak1")
    const peak2 = document.getElementById("peak2")

    peak1.innerText = "Acceleration"
    peak2.innerText = "3.1 s 0-60 mph"


    const acc1 = document.getElementById("acc1")
    const acc2 = document.getElementById("acc2")
    const acc3 = document.getElementById("acc3")

    acc1.innerText = "Wheels"
    acc2.innerText = '19" or 21"'
    acc3.innerText = ""


    const wheel1 = document.getElementById("wheel1")
    const wheel2 = document.getElementById("wheel2")

    wheel1.innerText = "Cargo"
    wheel2.innerText = '28 cu ft'


    const cargo1 = document.getElementById("cargo1")
    const cargo2 = document.getElementById("cargo2")

    cargo1.innerText = "Weight"
    cargo2.innerText = "4,560 lbs"


    const weight1 = document.getElementById("weight1")
    const weight2 = document.getElementById("weight2")

    weight1.innerText = ""
    weight2.innerText = ""



    const speed1 = document.getElementById("speed1")
    const speed2 = document.getElementById("speed2")
    const speed3 = document.getElementById("speed3")

    speed1.innerText = "Top Speed"
    speed2.innerText = "149 mph"
    speed3.innerText = ""


    const drag1 = document.getElementById("drag1")
    const drag2 = document.getElementById("drag2")

    drag1.innerText = "Drag Coefficient"
    drag2.innerText = "0.208 Cd"


    const power1 = document.getElementById("power1")
    const power2 = document.getElementById("power2")

    power1.innerText = "Powertrain"
    power2.innerText = "Dual Motor"


    const super1 = document.getElementById("super1")
    const super2 = document.getElementById("super2")

    super1.innerText = "Supercharging Max"
    super2.innerText = "250 kW"


    const warr1 = document.getElementById("warr1")
    const warr2 = document.getElementById("warr2")
    const warr3 = document.getElementById("warr3")

    warr1.innerText = "Warranty"
    warr2.innerText = "Basic Vehicle - 4 years or 50,000 miles, whichever comes first Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first"
    warr3.innerText = "See Details"

    const lastHR = document.getElementById("lastHR")
    lastHR.classList.add("hide")

    modelSComp.style.border = "3px solid #FFF"

    modelSPlaidComp.style.border = "3px solid #222"

})