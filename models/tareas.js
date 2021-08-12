const Tarea = require('./tarea')
require('colors')
class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach((key) => {
            listado.push(this._listado[key])
        })

        return listado
    }

    constructor() {
        this._listado = {}
    }

    cargarTareasFromArr(tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto() {
        console.log()
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = completadoEn ? completadoEn.green : 'Pendiente'.red
            console.log(`${idx}. ${desc} :: ${estado}`)
        })
    }

    listarPendientesCompletadas(completadas = true) {
        console.log()

        let lista = []

        if (completadas === true) {
            lista = this.listadoArr.filter(
                (tarea) => tarea.completadoEn === null
            )
        } else {
            lista = this.listadoArr.filter(
                (tarea) => tarea.completadoEn !== null
            )
        }

        lista.forEach((tarea, i) => {
            const idx = `${i + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = completadoEn ? completadoEn.green : 'Pendiente'.red
            console.log(`${idx}. ${desc} :: ${estado}`)
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }
}

module.exports = Tareas
