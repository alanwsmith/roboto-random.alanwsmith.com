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
    YTFI: [560, 788]
}

const update = () => {
    // els.btn.innerHTML = 'asdf'
    // els.btn.style.fontSize = '4rem'
    // els.btn.style.fontVariationSettings = { "'wght'": 700 }
    // els.btn.style.fontVariationSettings.wdth = '100px'
    // els.btn.style.fontVariationSettings.wght = '900'
    els.btn.style.fontVariationSettings = `"wght" 100, "wdth" 100`
    console.log(els.btn.style)
}

document.addEventListener('DOMContentLoaded', () => {
    els.btn = document.getElementById('alfa')
    els.btn.addEventListener('click', update)
})
