import { ButtonLogin, ContainerLogin, InputLogin, LoginBox, ButtonCadastrar, TituloLogin, ImagemLogin, ParagraphLogin} from "./style.jsx"
import Logo from "../../Assets/grandblue.svg"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"
import { Link } from "react-router-dom"
import Axios from 'axios'
import { useState } from "react";



export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
        Axios.post("http://localhost:3001/usuario/login", {
                email: values.email,
                senha: values.senha
            }).then((response) =>{
                console.log(response)
                if (values.email == response.data[0].email && values.senha ==  response.data[0].senha){
                //  navigate('/generos', {replace: true})
                console.log('deu certo')
                }
            })
    }

    return(
        <ContainerLogin>
        <LoginBox>

        <Link to="/">
        <ImagemLogin src={Logo}> 
        </ImagemLogin>
        </Link>

        <TituloLogin>Bem Vindo</TituloLogin>  

        <InputLogin>
            <Input onChange={HandleChangeValues} Id="email" Name="email" type="text" placeholder="Email"/>
            <Input onChange={HandleChangeValues} Id="senha" Name="senha" type="password" placeholder="Senha"/>
        </InputLogin>

        <ButtonLogin>
        <Button onClick={()=>HandleClickButton()} conteudo="Entrar" type="button"/>
        <ParagraphLogin>Que Tal Criar Sua Conta?</ParagraphLogin>
        </ButtonLogin>
        <Link to="/cadastro" style={{ textDecoration: 'none', display: 'flex',width: '60%', justifyContent: 'center' }} >
        <ButtonCadastrar>
        <Button onClick={()=>HandleClickButton()}conteudo="Cadastre-se" estilo="1" type="button"/>
        </ButtonCadastrar>
        </Link>
      

        </LoginBox>
        </ContainerLogin>
    )
}