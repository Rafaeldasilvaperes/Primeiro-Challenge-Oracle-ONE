
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
	Encriptar(originaltext);
	var text = fraseEncriptada;
	document.getElementById("textareaDiv").innerHTML = text;
	console.log("Valor VAR FraseENC: " + fraseEncriptada);
		}

function mostrarTextDescriptado(){
	var originaltext = fraseOriginal;
	Desencriptar(originaltext);
	var text = fraseDesencriptada;
	document.getElementById("textareaDiv").innerHTML = text;
	console.log("Valor VAR FraseENC: " + fraseEncriptada);
		}

function contadorLetras(){
	var letras = document.getElementById('textarea').value.length;
	document.getElementById('contadorLetras').innerHTML = letras +"/500";
}

function checkChar(evento){
	
	var char = evento.data;
	var ascii = char.charCodeAt(0);
	

	const charactere = String.fromCharCode(ascii);
	const padrao = '[a-z !,?]';

	if(charactere.match(padrao)){
		console.log(charactere);
		return true
	} else{
		return false
	}
}

function entradaIncorrecta(evento){
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
	
	var element = document.getElementById("textareaDiv");
	var elementText = element.value;

	var inputElement = document.createElement('input');
	inputElement.setAttribute('value', elementText);
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand('copy');
	inputElement.parentNode.removeChild(inputElement);
	
	element.classList.add('oracle-text-textarea')
	element.textContent = "Mensagem copiada!";
	setTimeout(function(){
		element.textContent = "";
		element.classList.remove('oracle-text-textarea')
	}, 1500)

}


var fraseOriginal;
var fraseEncriptada;
var fraseDesencriptada;

// Eventos da Textarea de entrada
const capturaTexto = document.getElementById("textarea");
capturaTexto.addEventListener("beforeinput", entradaIncorrecta, false); // ao pressionar uma tecla
capturaTexto.addEventListener("blur", pegaTexto, false); // ao clicar fora da textarea
capturaTexto.addEventListener("keyup", contadorLetras, false); // após pressionar uma tecla

var encrypt = document.getElementById("btn-exec");
encrypt.addEventListener("click", mostrarTextEncriptado, false);

var descrypt = document.getElementById("btn-exec-des");
descrypt.addEventListener("click", mostrarTextDescriptado, false);

var copy = document.getElementById('btn-copy1');
copy.addEventListener("click", copiarTexto, false);