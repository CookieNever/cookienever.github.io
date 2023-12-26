fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {

            const box = document.createElement("div")
            const infos = document.createElement("div")

            const imageElement = document.createElement("img")
            imageElement.src = country.flags.svg
            const nameElement = document.createElement("h2")
            nameElement.innerText = country.name
            const populationElement = document.createElement("p")
            const regionElement = document.createElement("p")
            const capitalElement = document.createElement("p")

            const populationStrong = document.createElement("strong")
            populationStrong.innerText = "Population: "
            const populationSpan = document.createElement("span")
            populationSpan.innerText = country.population

            const regionStrong = document.createElement("strong")
            regionStrong.innerText = "Region: "
            const regionSpan = document.createElement("span")
            regionSpan.innerText = country.region

            const capitalStrong = document.createElement("strong")
            capitalStrong.innerText = "Capital: "
            const capitalSpan = document.createElement("span")
            capitalSpan.innerText = country.capital

            box.classList.add("box")
            infos.classList.add("infos")
            imageElement.classList.add("flag")
            populationElement.classList.add("first-info")
            regionElement.classList.add("middle-info")
            capitalElement.classList.add("last-info")

            const countryCard = document.querySelector(".country-card")

            countryCard.appendChild(box)
            box.appendChild(imageElement)
            box.appendChild(infos)
            infos.appendChild(nameElement)
            infos.appendChild(populationElement)
            populationElement.appendChild(populationStrong)
            populationElement.appendChild(populationSpan)
            regionElement.appendChild(regionStrong)
            regionElement.appendChild(regionSpan)
            capitalElement.appendChild(capitalStrong)
            capitalElement.appendChild(capitalSpan)
            infos.appendChild(regionElement)
            infos.appendChild(capitalElement)


            box.addEventListener("click", () => {

                const inputs = document.querySelector(".main-tools")
                inputs.classList.add("hide")

                const moreFlag = document.createElement("img")
                moreFlag.src = country.flags.svg

                const moreName = document.createElement("h2")
                moreName.innerText = country.name

                const mNativeName = document.createElement("p")
                const mPopulation = document.createElement("p")
                const mRegion = document.createElement("p")
                const mSubRegion = document.createElement("p")
                const mCapital = document.createElement("p")
                const mTopLevelDomain = document.createElement("p")
                const mCurrency = document.createElement("p")
                const mLanguage = document.createElement("p")
                const mBorderCountries = document.createElement("p")

                const mNativeNameStrong = document.createElement("strong")
                mNativeNameStrong.innerText = "Native Name: "
                const mNativeNameSpan = document.createElement("span")
                mNativeNameSpan.innerText = country.nativeName

                const mPopulationStrong = document.createElement("strong")
                mPopulationStrong.innerText = "Population: "
                const mPopulationSpan = document.createElement("span")
                mPopulationSpan.innerText = country.population

                const mRegionStrong = document.createElement("strong")
                mRegionStrong.innerText = "Region: "
                const mRegionSpan = document.createElement("span")
                mRegionSpan.innerText = country.region

                const mSubRegionStrong = document.createElement("strong")
                mSubRegionStrong.innerText = "Sub Region: "
                const mPSubRegionSpan = document.createElement("span")
                mPSubRegionSpan.innerText = country.subregion

                const mCapitalStrong = document.createElement("strong")
                mCapitalStrong.innerText = "Capital: "
                const mCapitalSpan = document.createElement("span")
                mCapitalSpan.innerText = country.capital

                const mTopLevelDomainStrong = document.createElement("strong")
                mTopLevelDomainStrong.innerText = "Top Level Domain: "
                const mTopLevelDomainSpan = document.createElement("span")
                mTopLevelDomainSpan.innerText = country.topLevelDomain

                const mCurrencyStrong = document.createElement("strong")
                mCurrencyStrong.innerText = "Currencies: "
                const mCurrencySpan = document.createElement("span")
                mCurrencySpan.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ')

                const mLanguageStrong = document.createElement("strong")
                mLanguageStrong.innerText = "Languages: "
                const mLanguageSpan = document.createElement("span")
                mLanguageSpan.innerText = Object.values(country.languages).map((language) => language.name).join(', ')

                const mBorderCountriesStrong = document.createElement("strong")
                mBorderCountriesStrong.innerText = "Border Countries: "
                const mBorderCountriesSpan = document.createElement("span")

                if (country.borders) {
                    country.borders.forEach((border) => {
                        fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()).then(([borderCountry]) => {
                            const borderCountryTag = document.createElement('span')
                            borderCountryTag.innerText = borderCountry.name.common
                            borderCountryTag.classList.add("borderSpan")
                            mBorderCountries.append(borderCountryTag)
                        })
                    })
                } else {
                    const borderCountryTag = document.createElement('span')
                    borderCountryTag.innerText = "None"
                    borderCountryTag.classList.add("test")
                    mBorderCountries.append(borderCountryTag)
                }

                moreFlag.classList.add("more-flag")
                moreName.classList.add("moreCountryName")
                mNativeName.classList.add("nativeName")
                mPopulation.classList.add("populationM")
                mRegion.classList.add("regionM")
                mSubRegion.classList.add("subRegion")
                mCapital.classList.add("capitalM")
                mTopLevelDomain.classList.add("topLevelDomain")
                mCurrency.classList.add("currency")
                mLanguage.classList.add("language")
                mBorderCountries.classList.add("borderCountries")
                mBorderCountriesSpan.classList.add("borderSpan")
                mBorderCountriesStrong.classList.add("borderStrong")


                const moreInfosCard = document.querySelector(".more-infos")
                const navbar = document.querySelector(".navbar")
                moreInfosCard.classList.remove("hide")
                countryCard.classList.add("hide")
                navbar.classList.add("hide")


                moreInfosCard.appendChild(moreFlag)
                moreInfosCard.appendChild(moreName)
                moreInfosCard.appendChild(mNativeName)
                moreInfosCard.appendChild(mPopulation)
                moreInfosCard.appendChild(mRegion)
                moreInfosCard.appendChild(mSubRegion)
                moreInfosCard.appendChild(mCapital)
                moreInfosCard.appendChild(mTopLevelDomain)
                moreInfosCard.appendChild(mCurrency)
                moreInfosCard.appendChild(mLanguage)
                moreInfosCard.appendChild(mBorderCountries)


                mBorderCountries.appendChild(mBorderCountriesStrong)
                mBorderCountries.appendChild(mBorderCountriesSpan)

                mNativeName.appendChild(mNativeNameStrong)
                mNativeName.appendChild(mNativeNameSpan)

                mPopulation.appendChild(mPopulationStrong)
                mPopulation.appendChild(mPopulationSpan)

                mRegion.appendChild(mRegionStrong)
                mRegion.appendChild(mRegionSpan)

                mSubRegion.appendChild(mSubRegionStrong)
                mSubRegion.appendChild(mPSubRegionSpan)

                mCapital.appendChild(mCapitalStrong)
                mCapital.appendChild(mCapitalSpan)

                mTopLevelDomain.appendChild(mTopLevelDomainStrong)
                mTopLevelDomain.appendChild(mTopLevelDomainSpan)

                mCurrency.appendChild(mCurrencyStrong)
                mCurrency.appendChild(mCurrencySpan)

                mLanguage.appendChild(mLanguageStrong)
                mLanguage.appendChild(mLanguageSpan)
            })


            const africaBtn = document.querySelector(".africa")
            africaBtn.addEventListener("click", () => {
                if (regionSpan.innerText === 'Africa') {
                    box.classList.remove("hide")
                } else {
                    box.classList.add("hide")
                }
            })

            const americaBtn = document.querySelector(".america")
            americaBtn.addEventListener("click", () => {
                if (regionSpan.innerText === 'Americas') {
                    box.classList.remove("hide")
                } else {
                    box.classList.add("hide")
                }
            })

            const asiaBtn = document.querySelector(".asia")
            asiaBtn.addEventListener("click", () => {
                if (regionSpan.innerText === 'Asia') {
                    box.classList.remove("hide")
                } else {
                    box.classList.add("hide")
                }
            })

            const europeBtn = document.querySelector(".europe")
            europeBtn.addEventListener("click", () => {
                if (regionSpan.innerText === 'Europe') {
                    box.classList.remove("hide")
                } else {
                    box.classList.add("hide")
                }
            })

            const oceaniaBtn = document.querySelector(".oceania")
            oceaniaBtn.addEventListener("click", () => {
                if (regionSpan.innerText === 'Oceania') {
                    box.classList.remove("hide")
                } else {
                    box.classList.add("hide")
                }
            })

            const allBtn = document.querySelector(".all")
            allBtn.addEventListener("click", () => {
                box.classList.remove("hide")
            })



            const searchInput = document.getElementById("searchInput");
            searchInput.addEventListener("input", performSearch);

            function performSearch() {
                const searchInput = document.getElementById("searchInput").value.toLowerCase();
                const countryBoxes = document.querySelectorAll(".box");

                countryBoxes.forEach(box => {
                    const countryName = box.querySelector("h2").innerText.toLowerCase();
                    if (countryName.includes(searchInput)) {
                        box.style.display = "block";
                    } else {
                        box.style.display = "none";
                    }
                });
            }
        })
    })

const optionsFilter = document.querySelector(".filterOptions")
const filterBtn = document.querySelector(".filterbar")
const filterArrow = document.querySelector(".select-icon")

filterBtn.addEventListener("click", () => {
    if (optionsFilter.classList.contains("hide")) {
        optionsFilter.classList.remove("hide")
    } else {
        optionsFilter.classList.add("hide")
    }
})

filterArrow.addEventListener("click", () => {
    if (optionsFilter.classList.contains("hide")) {
        optionsFilter.classList.remove("hide")
    } else {
        optionsFilter.classList.add("hide")
    }
})


