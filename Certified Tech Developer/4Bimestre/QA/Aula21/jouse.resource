*** Variables ***
${SITE}  http://www.jouse.com.br
${NAVEGADOR}  Chrome
${BOTAO_COMPRE}  css=.jss24:nth-child(2) > .jss14

*** Keywords ***
Acessar a loja da jouse
  Open Browser  ${SITE}  ${NAVEGADOR}
  Maximize Browser Window
Clicar em compre agora
  Click Element  ${BOTAO_COMPRE}
  