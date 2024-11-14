class Jogador {
    constructor(desenvolvedor, nome, impostor) {
        this.id = this.generateId()
        this.desenvolvedor = desenvolvedor
        this.nome = nome
        this.impostor = impostor
    }
    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}
export default Jogador