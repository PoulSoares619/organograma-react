import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'


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

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
                <ListaSuspensa label="Time" item={times} />
            </form>
        </section>

    )
}

export default Formulario