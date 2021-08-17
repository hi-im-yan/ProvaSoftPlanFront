import axios from 'axios'

export default class PessoaScript {

    formatDate(date){
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
    }

    registrarPessoa(pessoa){
        console.log(pessoa)
        axios.post('/pessoa/cadastrar', pessoa)
    }
}
