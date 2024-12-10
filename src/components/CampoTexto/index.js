import './campoTexto.css'

const CampoTexto = (props)=> {

    const aoDigitar = (evento) =>{
        props.aoAlterar(evento.target.valeu)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input valeu={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto