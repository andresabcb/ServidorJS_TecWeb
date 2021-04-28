const axios = require("axios");

// OBTENDO UM TOKEN DE ACESSO pt 1
const options1 = {
	headers: { "Content-Type": "application/json", Accept: "application/json" },
};

// RESOLVENDO OS EXERCÍCIOS
// EXERCÍCIO SOMA
const soma = (a, b) => a + b;
// EXERCÍCIO TAM STRING
const tam_string = (str) => str.length;
// EXERCÍCIO NOME USER
const nome_user = (email) => email.split("@")[0];
// EXERCÍCIO jaca-wars

// EXERCÍCIO ano-bissexto
// Uma das duas condições a seguir deve ser verdadeira:
// Condição 1: Ser múltiplo de 4 e não ser múltiplo de 100
// Condição 2: Ser múltiplo de 400 (se for múltiplo de 400 automaticamente é de 4) 
function anobiss(num) {
    if ((num%4 == 0 && num%100 != 0) || num%400 == 0) {
        return true
    };
    return false
};

// EXERCÍCIO volume-da-pizza
const vol_pizza = (raio_z,altura) => Math.round(Math.PI*Math.pow(raio_z,2)*altura);

// EXERCÍCIO mru
const mru = (s0,v,t) => s0+v*t; 

// EXERCÍCIO inverte-string
// inspirado em 
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function inverte_string(string) {
    let rts = "";
    let i;
    for (i = string.length - 1; i >= 0; i--) {
        rts += string[i];
    }
    return rts;
};

// EXERCÍCIO soma-valores
// inspirado em
// https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object 
function soma_obj(objeto) {
    let soma = 0;
    for(var i in objeto) {
      if(objeto.hasOwnProperty(i)) {
        soma += parseFloat(objeto[i]); // retorna um float
      }
    }
    return soma;
  };

// EXERCÍCIO n-esimo-primo
// function nprimo(num) {
//     let i;
//     let primo;
//     if(num>1){
//         for(i = 2;i < int(num/2); i++){
//             if 
//         }
//     }
//     else{
//         primo = false;
//     };
// }

// let funcoes_ex = [soma, tam_string, nome_user];
// let nome_ex = ["soma", "tamanho-string", "nome-do-usuario"];
// let nome_ex = ['soma','tamanho-string','nome-do-usuario','jaca-wars','ano-bissexto','volume-da-pizza','mru','inverte-string','soma-valores','n-esimo-primo','maior-prefixo-comum','soma-segundo-maior-e-menor-numeros','conta-palindromos','soma-de-strings-de-ints','soma-com-requisicoes','caca-ao-tesouro'];

// OBTENDO UM TOKEN DE ACESSO pt 2
axios
	.post(
		"https://tecweb-js.insper-comp.com.br/token ",
		{ username: "andresabcb" },
		options1
	)
	.then((res) => {
		let accessToken = res.data.accessToken;
		// LISTANDO OS EXERCÍCIOS
		const options2 = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};

		// LISTANDO OS EXERCÍCIOS
		axios
			.get("https://tecweb-js.insper-comp.com.br/exercicio", options2)
			.then((res) => {
				let exercicios = res.data;
				console.log(exercicios);
				// ENVIANDO AS SUBMISSÕES

                //EXERCÍCIO SOMA
				let entrada1_soma = exercicios["soma"]["entrada"]["a"];
                let entrada2_soma = exercicios["soma"]["entrada"]["b"];
				let resultado_soma = soma(entrada1_soma, entrada2_soma);
                console.log(resultado_soma);
				axios
					.post(
						"https://tecweb-js.insper-comp.com.br/exercicio/soma",
						{"resposta": resultado_soma },
						options2
					);

                // EXERCÍCIO TAM STRING
                let entrada1_tamstring = exercicios["tamanho-string"]["entrada"]["string"];
				let resultado_tamstring = tam_string(entrada1_tamstring);
                console.log(resultado_tamstring);
				axios
					.post(
						"https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string",
						{"resposta": resultado_tamstring },
						options2
					);
                
                // EXERCÍCIO nome-do-usuario
                let entrada1_nomeuser = exercicios["nome-do-usuario"]["entrada"]["email"];
                let resultado_nomeuser = nome_user(entrada1_nomeuser);
                console.log(resultado_nomeuser);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario",
                        {"resposta": resultado_nomeuser },
                        options2
                    );

                // EXERCÍCIO ano-bissexto
                let entrada1_anobiss = exercicios["ano-bissexto"]["entrada"]["ano"];
                let resultado_anobiss = anobiss(entrada1_anobiss);
                console.log(resultado_anobiss);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto",
                        {"resposta": resultado_anobiss },
                        options2
                    );
                // EXERCÍCIO volume-da-pizza
                let entrada1_volpizza = exercicios["volume-da-pizza"]["entrada"]["z"];
                let entrada2_volpizza = exercicios["volume-da-pizza"]["entrada"]["a"];
                let resultado_volpizza = vol_pizza(entrada1_volpizza, entrada2_volpizza);
                console.log(resultado_volpizza);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza",
                        {"resposta": resultado_volpizza },
                        options2
                    );

                // EXERCÍCIO mru
                let entrada1_mru = exercicios["mru"]["entrada"]["s0"];
                let entrada2_mru = exercicios["mru"]["entrada"]["v"];
                let entrada3_mru = exercicios["mru"]["entrada"]["t"];
                let resultado_mru = mru(entrada1_mru, entrada2_mru, entrada3_mru);
                console.log(resultado_mru);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/mru",
                        {"resposta": resultado_mru },
                        options2
                    );

                // EXERCÍCIO inverte-string
                let entrada1_invertestr = exercicios["inverte-string"]["entrada"]["string"];
                let resultado_invertestr = inverte_string(entrada1_invertestr);
                console.log(resultado_invertestr);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/inverte-string",
                        {"resposta": resultado_invertestr },
                        options2
                    );

                // EXERCÍCIO soma-valores
                let entrada1_somaobj = exercicios["soma-valores"]["entrada"]["objeto"];
                let resultado_somaobj = soma_obj(entrada1_somaobj);
                console.log(resultado_somaobj);
                axios
                    .post(
                        "https://tecweb-js.insper-comp.com.br/exercicio/soma-valores",
                        {"resposta": resultado_somaobj },
                        options2
                    );

                // 
			});
	});

// EXERCÍCIO generico
// let slug = "generico"
// let entrada = exercicios[slug]["entrada"][tipo de entrada];
// let resultado = funcao(entrada);
// console.log(resultado);
// axios
//     .post(
//         `https://tecweb-js.insper-comp.com.br/exercicio/${slug}`,
//         {"resposta": resultado_nomeuser },
//         options2
//     );

// ENVIANDO AS SUBMISSÕES

// encontrar slug
// let slug;
// let value_resp;
// let resposta = { resposta: value_resp };

// if (sucesso == True) console.log(`A resposta era mesmo ${resposta}`);

// AUTOMATIZANDO AS RESPOSTAS - RASCUNHO (NÃO FUNCIONA)
// .then((resposta) => {
					// 	console.log(`A resposta era mesmo ${resposta}`);
					// });

				// let f;
				// for (f = 0; f < (funcoes_ex.length - 1);f++){
				//     const slug = nome_ex[f];
				//     let entrada = exercicios[slug]['entrada']
				//     let resultado = funcoes_ex[f](entrada)
				//     // .then(() => {})
				//     let sucesso = axios.post(
				//         `https://tecweb-js.insper-comp.com.br/exercicio/${slug}`,
				//         {'resposta': resultado},
				//         options1
				//     ).then((resposta) => {
				//         console.log(`A resposta era mesmo ${resposta}`);
				//     });};