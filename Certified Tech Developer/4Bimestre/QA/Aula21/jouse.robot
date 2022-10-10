*** Settings ***
Library  SeleniumLibrary
Resource  ./jouse.resource

*** Test Cases ***
Teste acessar loja
  Acessar a loja da jouse
  Clicar em compre agora