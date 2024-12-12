import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
    ]
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario