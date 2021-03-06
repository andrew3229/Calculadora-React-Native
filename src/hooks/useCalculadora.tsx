import { useRef, useState } from "react";

enum Operadores {
    sumar,restar,multipicar,dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('100');
    const [numeroanterior, setNumeroAnterior] = useState('0');
    
    const ultimaOperacion = useRef<Operadores>()

    const limpiar =()=>{
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto:string) =>{

        //No aceptar doble punto
        if (numero.includes('.') && numeroTexto==='.')  return;

        if (numero.startsWith('0') || numero.startsWith('-0')){
            //punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                //Evaluamos si es cero y hay otro punto
            }else if (numeroTexto==='0' && numero.includes('.')) {
                setNumero( numero + numeroTexto);
                //Evaluar si es diferente de cero y no tiene un punto 
            }else if (numeroTexto!=='0' && !numero.includes('.')  ) {
                setNumero(numeroTexto)
                //Evitar 00000.0
            }else if (numeroTexto==='0' && !numero.includes('.')) {
                setNumero(numero)
            }else{
                setNumero(numero + numeroTexto)

            }
        }else{
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () =>{
        if (numero.includes('-')) {
            setNumero(numero.replace('-',''));
        }else{
            setNumero('-' + numero);
        }
    } 


    const btnDelete = () =>{
        let negativo = '';
        let numeroTemp = numero;
        
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp=numero.substr(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        }else{
            setNumero('0');
        }
    }

    const cambiarNumPorAnterior = () =>{
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }


    const btnDividiar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multipicar;
    }

    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }


    const calcular = () =>{
        const num1 = Number(numero);
        const num2 = Number(numeroanterior);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1+num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2-num1}`)
                break;
            case Operadores.multipicar:
                setNumero(`${num1*num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2/num1}`)
                break;  
        }
        setNumeroAnterior('0');

    }
    return {
        calcular,
        armarNumero,
        positivoNegativo,
        btnDelete,
        cambiarNumPorAnterior,
        btnDividiar,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        numero,
        numeroanterior,
        limpiar
    }

}

