import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadorScreen = () => {
    const info = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {(info.numeroanterior!=='0') && (
                <Text style={styles.resultadoPequeno}>{info.numeroanterior}</Text>
            )}
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {info.numero}
            </Text>
           
            {/* Fila botones */}
            <View style={styles.fila}>
                {/* gris oscuro #2D2D2D */}
                {/* naranja #FF9427 */}
                {/* gris claro #9b9b9b */}
                <BotonCalc texto='C' color="#9b9b9b" accion={info.limpiar} />
                <BotonCalc texto='+/-' color="#9b9b9b"  accion={info.positivoNegativo}/>
                <BotonCalc texto='DEL' color="#9b9b9b"  accion={info.btnDelete}/>
                <BotonCalc texto='/' color="#FF9427" accion={info.btnDividiar}/>
            </View> 

            {/* Fila botones */}
            <View style={styles.fila}>
                {/* gris oscuro #2D2D2D */}
                {/* naranja #FF9427 */}
                {/* gris claro #9b9b9b */}
                <BotonCalc texto='7' accion={info.armarNumero}/>
                <BotonCalc texto='8'  accion={info.armarNumero}/>
                <BotonCalc texto='9' accion={info.armarNumero}/>
                <BotonCalc texto='*' color="#FF9427" accion={info.btnMultiplicar}/>
            </View> 

             {/* Fila botones */}
             <View style={styles.fila}>
                {/* gris oscuro #2D2D2D */}
                {/* naranja #FF9427 */}
                {/* gris claro #9b9b9b */}
                <BotonCalc texto='4' accion={info.armarNumero}/>
                <BotonCalc texto='5' accion={info.armarNumero}/>
                <BotonCalc texto='6' accion={info.armarNumero}/>
                <BotonCalc texto='-' accion={info.btnRestar} color="#FF9427"/>
            </View> 

             {/* Fila botones */}
             <View style={styles.fila}>
                {/* gris oscuro #2D2D2D */}
                {/* naranja #FF9427 */}
                {/* gris claro #9b9b9b */}
                <BotonCalc texto='1' accion={info.armarNumero}/>
                <BotonCalc texto='2' accion={info.armarNumero}/>
                <BotonCalc texto='3' accion={info.armarNumero}/>
                <BotonCalc texto='+' color="#FF9427" accion={info.btnSumar}/>
            </View> 
             {/* Fila botones */}
             <View style={styles.fila}>
                {/* gris oscuro #2D2D2D */}
                {/* naranja #FF9427 */}
                {/* gris claro #9b9b9b */}
                <BotonCalc texto='0' ancho accion={info.armarNumero}/>
                <BotonCalc texto='.' accion={info.armarNumero}/>
                <BotonCalc texto='='  accion={info.calcular} color="#FF9427"/>
            </View> 
        </View>
    )
}

