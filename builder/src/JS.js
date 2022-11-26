const els = {}

const limits = {
    wght: [100, 1000],
    wdth: [25, 151],
    opsz: [8, 144],
    GRAD: [-200, 150],
    slnt: [-10, 0],
    XTRA: [323, 603],
    XOPQ: [27, 175],
    YOPQ: [25, 135],
    YTLC: [416, 570],
    YTUC: [528, 760],
    YTAS: [649, 854],
    YTDE: [-305, -98],
    YTFI: [560, 788],
}

const home = {
    wght: 400,
    wdth: 110,
    opsz: 20,
    GRAD: 20,
    slnt: 0,
    XTRA: 480,
    XOPQ: 100,
    YOPQ: 80,
    YTLC: 490,
    YTUC: 600,
    YTAS: 700,
    YTDE: -140,
    YTFI: 620,
}

const current = {
    wght: 400,
    wdth: 110,
    opsz: 20,
    GRAD: 20,
    slnt: 0,
    XTRA: 480,
    XOPQ: 100,
    YOPQ: 80,
    YTLC: 490,
    YTUC: 600,
    YTAS: 700,
    YTDE: -140,
    YTFI: 620,
}

const getRandomObjectKey = (inputObj) => {
    const keys = Object.keys(inputObj)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return randomKey
}

let variations = 0

const getString = () => {
    const assembler = []
    const alterKey = getRandomObjectKey(current)
    console.log(alterKey)

    for (const k in current) {
        if (k === alterKey) {
            const min = limits[k][0]
            const max = limits[k][1]
            const newValue = Math.floor(Math.random() * (max - min + 1) + min)
            current[k] = newValue
        }
        assembler.push(`"${k}" ${current[k]}`)
    }

    return assembler.join(',')
}

const update = () => {
    // console.log(getString())
    // els.btn.innerHTML = 'asdf'
    // els.btn.style.fontSize = '4rem'
    // els.btn.style.fontVariationSettings = { "'wght'": 700 }
    // els.btn.style.fontVariationSettings.wdth = '100px'
    // els.btn.style.fontVariationSettings.wght = '900'
    // els.btn.style.fontVariationSettings = `"wght" 100, "wdth" 100`
    els.btn.style.fontVariationSettings = getString()
    // console.log(els.btn.style)
}

document.addEventListener('DOMContentLoaded', () => {
    els.btn = document.getElementById('alfa')
    els.btn.addEventListener('click', update)
})
