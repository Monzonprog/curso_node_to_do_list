require('colors')
const { showMenu, pause } = require('./helpers/mensajes')
console.clear()

const main = async () => {
    let opt = ''

    do {
        opt = await showMenu()
        if (opt !== '0') await pause()
    } while (opt !== '0')
}

main()
