// Exemplo
**Funcionalidade:** Servir café
  A fim de ganhar dinheiro
  Os clientes devem ser capazes de
  comprar café a todo momento

  **Cenário:** Compra último café
  **Dado** que tenha 1 café sobrando na máquina
  **E** eu tenha depositado 1 real
  **Quando** eu pressionar o botão de café
  **Então** eu deveria ser servido de um café
// Fim do exemplo

**Funcionalidade:** Obter listagem de usuários
  De acordo com o seu role
  Um usuário pode solicitar a lista de usuários cadastrados no sistema
  Sem a senha dos mesmos

  Cenário: Buscar todos os usuários cadastrados quando não há usuários
  **Dado** que eu tenha fornecido um token válido
  **E** a requesição tenha sido realizada com sucesso
  **Então** eu deveria receber uma lista vazia