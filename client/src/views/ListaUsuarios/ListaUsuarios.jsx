import {useEffect, useState} from 'react'

function Lista() {
  //Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    document.title = "Lista de usuários"

    //Função carregar usuaários
    async function carregarUsuarios(){
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/cadastroU')

        if(!resposta.ok){
          //Exibindo erro API
          console.debug("HTTP erro: "+resposta.status)
        }else{
          //Exibindo sucesso API
          let dados = await resposta.json()
          setUsuarios(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar usuários"+error)
      }
    }

    //Chamando função carregar usuários
    carregarUsuarios()

  },[])
  return (
    <div className='container'>
      <h1>Todos os usuários</h1>
      <table>
        <tr>
          <th>id usuário</th>
          <th>nome</th>
          <th>usuario</th>
        </tr>
        <tbody>
        {usuarios.map(usuario=>(
          <tr key={usuario.id_usuario}>
            <td>{usuario.id_usuario}</td>
            <td>{usuario.nome_usuario}</td>
            <td>{usuario.nome_user_usuario}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Lista