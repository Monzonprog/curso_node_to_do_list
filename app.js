require('colors')
const { showMenu, pause } = require('./helpers/mensajes')
console.clear()

const main = async () => {
    let opt = ''

    do {
        opt = await showMenu()
        console.log({ opt })
        await pause()
    } while (opt !== '0')
}

main()
