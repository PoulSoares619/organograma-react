import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'


const Formulario = () => {

    const times = [
        'Programção',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Nois que manda no form')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true}  label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" item={times} />
                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>

    )
}

export default Formulario