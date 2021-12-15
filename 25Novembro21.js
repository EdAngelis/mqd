const repo = require('./repo')

let text = `
A quanto tempo não venho aqui, alguém me adcionou, só conheço uma pessoa com esse nome, será que é ela? Meu deus, é ela mesmo, pensei que nunca mais iriamos nos reencontrar desde que nos afastamos, nossa como faz tempo, parece que foi em outra vida, talvez 10, talvez 11 ou 12 anos, alguém lembra quando passou na tv aquele filme , Crépsulo, lembro que assistiamos na casa dela, ela pratimente sem piscar os olhos, eu preferia assistir ela, não que o filme fosse ruim, era péssimo, pelo menos ele serviu para que eu guardasse esse momento, do filme eu não lembro nada, mas lembro muito bem dosolhos dela enquanto assistia o filme.


        Lembro de muitas coisas, só não lembro exatamente o que aconteceu com a gente, foi uma breve historia, que só ficaram coisas boas, talvez por ter sido breve, será que todas as historias deveriam acabar assim? bem antes do fim, não sei pq nos afastamos, mas sonhei com um reencontro por anos, e agora ela me aparece mais de 10 anos depois do na da, como será que ela viveu, o que abrendeu, o que sofreu, como será que está agora, o que fez ela vim falar comigo terá sido só curiosidade, e nos
outros anos, será que ela também pensou em mim, e pq só agora? muitas perguntas... olho seu perfil,
2021, 2020, 2019... pq só agora, não consigo parar de me perguntar, 2018, 2017, 2016... que vontade
de invadir seu passado e me colocar lá dentro, 2015, 2014. muitos anos ainda de escuridão desde nosso últmo encontro, como queria ir até aquele dia.


        LEMBREI !!!2010 foi o ano que o bendito filme passou na globo, lembrei com uma ajudinha da internet claro, agora temos uma data, 11 anos atrás.Fui falar com ela, e mais uma surpresa, ela já tinha falado comigo, olho a data, 8 de junho, 5 meses atrás, não acredito que só vi essa menssagem agora, bom, enfim,falo com ela, ela me responde quase instantaneamente, e para re sumir um pouco a conversa, ela mediz que está namorando, que está apaixonada, e diz que gostaria muito de ter me reecontr-
ado mesesatrás, fim.Ficaram as lembranças, de tudo que mais lembro, lembro da voz suave dela, baixinha, semdisperdiçar nenhum decibéis, na conta certa até meus ouvidos,sem agredilos e entrando delicad-
amente, quase pedindo licença, lembro de lanches extravagantes e nada diets, lembro de vc colocando sua filha pequena para dormir, só não lembro mais pq saia sempre cedi nho, pouco antes do sol raiar,
equando a gente dorme pouco a memoria falha, lembro que lhe deiuma orquidea numa caixinha de plástico tranparente, e oque mais lembro é que ela, assim como uma orquidea, ela é uma flor raríssima.


        Lembro que era final de Dezembro, quando nos encontramos pela última vez,lembro que não dei nela, um abraço e um beijo de feliz ano novo naquele ano, lembro que pouco tempo depoismudei de cidad-
e, um diade passagem meses depois, passei em frente a casa dela, pergunto a uma vizinha, e ela diz que achava que ela tinha se mudado, procuro nas redes sociais e não a encontro, lembro que hesitei,estava prestes a colocar o plano de partir, tudo que queria desde muito tempo, e por isso hesitei,acho
que nãoa deixei segura, e acho que foi isso que aconteceu finalmente.
` 

text = repo.justify(text, 100)
console.log(text)

repo.savePdf(text, '25Novembro21.pdf')



    
  
