
function Encriptar(frase){
	var MapeadorObj = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};
	frase = frase.replace(/a|e|i|o|u/gi, function(matched){return MapeadorObj[matched];});
	
	fraseEncriptada = frase;
}

function Desencriptar(frase){
	var MapeadorObj = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"};
	frase = frase.replace(/ai|enter|imes|ober|ufat/gi, function(matched){return MapeadorObj[matched];});
	
	fraseDesencriptada = frase;
	
}

function pegaTexto(){
	var fraseInput = document.getElementById("textarea").value;
	fraseOriginal = fraseInput;
	}

function mostrarTextEncriptado(){
	var originaltext = fraseOriginal;
	if(checagemTextoColado(originaltext) == false){
		avisoCharIncorreto();
	}else{
		Encriptar(originaltext);
		var text = fraseEncriptada;
		document.getElementById("textareaDiv").innerHTML = text;
	};
	
		}

function mostrarTextDescriptado(){
	var originaltext = fraseOriginal
	if(checagemTextoColado(originaltext) == false){
		avisoCharIncorreto();
	}else{
		Desencriptar(originaltext);
		var text = fraseDesencriptada;
		document.getElementById("textareaDiv").innerHTML = text;
	}
		}

function contadorLetras(){
	var letras = document.getElementById('textarea').value.length;
	document.getElementById('contadorLetras').innerHTML = letras +"/500";
}

function checkChar(evento){
	
	const padrao = '[a-z !,?]';
	var char = evento.data; 
	
	if(char === null){
		return
	} 

	if(char.match(padrao)){
		return true
	} else{
		return false
	} 
}

function entradaIncorreta(evento){
	
	if(checkChar(evento) == false){
		avisoCharIncorreto();
		evento.preventDefault();
	} else {return}
} 

function avisoCharIncorreto(){
	const wrong = document.querySelector('#textarea-entrada');
	wrong.classList.remove('textarea_style')
	
	wrong.classList.add('wrong');
	
	mensagemCharIncorreto();
	setTimeout(function(){
    wrong.classList.remove('wrong');
		wrong.classList.remove('wrong-text')
		wrong.classList.add('textarea_style')
  }, 3000);
	
}

function mensagemCharIncorreto(){
	var textoErro = document.getElementById("textareaDiv");
	textoErro.textContent = "Apenas letras minúsculas e sem acentos!";
	textoErro.classList.add('wrong-text');
	setTimeout(function(){
		textoErro.textContent = "";
		textoErro.classList.remove('wrong-text');
	}, 3000)
}

function copiarTexto(){
	
	var elemento = document.getElementById("textareaDiv");
	var texto = elemento.value;

	var novoInput = document.createElement('input');
	novoInput.setAttribute('value', texto);
	document.body.appendChild(novoInput);
	novoInput.select();
	document.execCommand('copy');
	novoInput.parentNode.removeChild(novoInput);
	
	elemento.classList.add('oracle-text-textarea')
	elemento.textContent = "Mensagem copiada!";
	setTimeout(function(){
		elemento.textContent = "";
		elemento.classList.remove('oracle-text-textarea')
	}, 1500)

}

function checagemTextoColado(texto){
	const padrao = '[a-z !,?]';
	for (i = 0; i < texto.length; i++) {
		if(!texto[i].match(padrao)){
			return false
		}
	}
}
function bemVindoConsoleLog(){
	console.log(
		"%cBem vindo ao Challenge One da Oracle ONE!",
		`background-color: #fc6a03;
		text-shadow: 3px 4px rgb(217,31,38);
		background:linear-gradient(90deg, #fc6a03, #f29450);
		font-weight: bold;
		padding: 1rem;
		color: white;
		border-radius: 0.5em;
		`
	)
	
}

//background:linear-gradient(90deg, #fc6a03, #0a72e9, #fc6a03);

var fraseOriginal;
var fraseEncriptada;
var fraseDesencriptada;

// Eventos da Textarea de entrada
const capturaTexto = document.getElementById("textarea");
capturaTexto.addEventListener("beforeinput", entradaIncorreta, false);  
capturaTexto.addEventListener("blur", pegaTexto, false); 
capturaTexto.addEventListener("keyup", contadorLetras, false);

// Eventos botões
var encrypt = document.getElementById("btn-exec");
encrypt.addEventListener("click", mostrarTextEncriptado, false); 

var descrypt = document.getElementById("btn-exec-des");
descrypt.addEventListener("click", mostrarTextDescriptado, false); 

var copy = document.getElementById('btn-copy1');
copy.addEventListener("click", copiarTexto, false);

bemVindoConsoleLog();