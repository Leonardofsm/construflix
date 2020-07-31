import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        //chave: nome, descricao, bla etc...
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento){
        const { name, value } = infosDoEvento.target;
        setValue(name, value );
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                    /> 


                <FormField 
                    label="Descrição: "
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                    /> 


                    <FormField 
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                    /> 
   
                <button>
                Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;