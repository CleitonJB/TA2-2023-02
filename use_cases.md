O arquivo em questão possui uma listagem explicativa dos principais casos de uso do sistema:

# Listagem de casos de Uso

## Usuário

Casos de uso referêntes à classe usuário (**User**)

### 1. Obter usuário

**Caso feliz:** Retorno dos dados referêntes ao usuário, sem o campo referênte à sua senha.

**Caso triste (01):** Erro no servidor ao tentar retornar os dados referêntes ao usuário.

**Caso triste (02):** Erro no cliente. Erro semântico na chamada da API.

**Caso triste (03):** Erro no cliente. Não informou o token de acesso.

**Caso triste (04):** Erro no cliente. O token de acesso informado é inválido (expirado, mau formatado etc).

**Caso triste (05):** Erro no cliente. Não informou o ID do usuário a ser retornado.

**Caso triste (06):** Erro no cliente. Informou o ID de um usuário que não existe mais. O retorno deve informar que o usuário não existe e não que um dia já existiu ou existe.

**Caso triste (07):** Erro no cliente. Informou o ID de um usuário que não existe mais. O retorno deve informar que o usuário não existe e não que um dia já existiu ou existe.

### 2. Obter usuários

**Caso feliz:** Retorno de uma lista dos dados referêntes aos usuários do sistema, sem o campo referênte à sua senha.

**Caso triste (01):** Erro no servidor ao tentar retornar a listagem dos dados referêntes aos usuários.

**Caso triste (02):** Erro no cliente. Erro semântico na chamada da API.

**Caso triste (03):** Erro no cliente. Não informou o token de acesso.

**Caso triste (04):** Erro no cliente. O token de acesso informado é inválido (expirado, mau formatado etc).

### 3. Inserir usuário

**Caso feliz:** Dados do usuário inseridos com sucesso e retorno booleano da operação. true: Operação realizada com sucesso. false: Erro ao realizar operação.

**Caso triste (01):** Erro no servidor. Erro ao tentar inserir os dados referêntes ao usuário.

**Caso triste (02):** Erro no cliente. Erro semântico na chamada da API.

**Caso triste (03):** Erro no cliente. Não informou o token de acesso.

**Caso triste (04):** Erro no cliente. O token de acesso informado é inválido (expirado, mau formatado etc).

**Caso triste (05):** Erro no cliente. Todos os dados ou alguns dos dados informados pelo usuário não estão no padrão desejado.

**Caso triste (06):** Erro no cliente. Todos os dados ou alguns dos dados não foram informados pelo usuário.

**Caso triste (07):** Erro no cliente. Todos ou alguns dos dados obrigatórios não foram fornecidos.

### 4. Atualizar usuário

**Caso feliz:** Dados do usuário atualizados com sucesso e retorno booleano da operação. true: Operação realizada com sucesso. false: Erro ao realizar operação.

**Caso triste (01):** Erro no servidor. Erro ao tentar atualizar os dados referêntes ao usuário.

**Caso triste (02):** Erro no cliente. Erro semântico na chamada da API.

**Caso triste (03):** Erro no cliente. Não informou o token de acesso.

**Caso triste (04):** Erro no cliente. O token de acesso informado é inválido (expirado, mau formatado etc).

**Caso triste (05):** Erro no cliente. Todos os dados ou alguns dos dados informados pelo usuário não estão no padrão desejado.

**Caso triste (06):** Erro no cliente. Todos ou alguns dos dados obrigatórios não foram fornecidos.

### 5. Deletar usuário

**Caso feliz:** Dados do usuário deletados do banco de dados com sucesso e retorno booleano da operação. true: Operação realizada com sucesso. false: Erro ao realizar operação.

**Caso triste (01):** Erro no servidor. Erro ao tentar deletar os dados referêntes ao usuário.

**Caso triste (02):** Erro no cliente. Erro semântico na chamada da API.

**Caso triste (03):** Erro no cliente. Não informou o token de acesso.

**Caso triste (04):** Erro no cliente. O token de acesso informado é inválido (expirado, mau formatado etc).

**Caso triste (05):** Erro no cliente. Todos os dados ou alguns dos dados informados pelo usuário não estão no padrão desejado.

**Caso triste (06):** Erro no cliente. Todos ou alguns dos dados obrigatórios não foram fornecidos.