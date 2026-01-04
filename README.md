💱 Convert - Conversor de Moedas
Projeto de um conversor de moedas simples e elegante desenvolvido utilizando HTML, CSS e JavaScript. O objetivo da aplicação é converter valores de Dólar (USD), Euro (EUR) e Libra (GBP) para Real Brasileiro (BRL) com taxas pré-definidas.

Este projeto foi desenvolvido como parte de um desafio/aula da Rocketseat.

🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

HTML5 (Estrutura semântica)

CSS3 (Estilização, Flexbox, Variáveis e Gradientes)

JavaScript (Manipulação da DOM, Eventos e Regex)

💻 Projeto
O Convert permite que o usuário:

Insira um valor numérico (o campo bloqueia caracteres não numéricos automaticamente).

Selecione uma moeda estrangeira (Dólar, Euro ou Libra).

Visualize o resultado da conversão formatado em Reais (BRL) e a cotação utilizada.

Layout
O layout possui um tema escuro (Dark Mode), com um fundo personalizado e elementos visuais como gradientes nos botões e ícones para seleção.

⚙️ Funcionalidades Detalhadas
Validação de Input: O script utiliza Regex (/\D+/g) para impedir que o usuário digite letras no campo de valor.

Formatação de Moeda: Utiliza o método toLocaleString("pt-BR", { ... }) para formatar o resultado final no padrão brasileiro (R$ 1.000,00).

Cotações Fixas:

USD: 5.42

EUR: 6.43

GBP: 7.30 (Valores definidos no código para fins didáticos)

📂 Como rodar o projeto
Faça o clone deste repositório:

Bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até a pasta do projeto.

Abra o arquivo index.html no seu navegador de preferência.

🎨 Preview
O projeto conta com uma interface centralizada e um rodapé interativo que aparece apenas após a conversão ser realizada com sucesso.

📝 Licença
Esse projeto está sob a licença MIT.

Feito com 💜 durante a jornada na Rocketseat.
