import React from 'react'
import { Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    beforeNumber,
    number,
    cleanNumber,
    negativeNumber,
    deleteLastNumber,
    dividir,
    concatNumber,
    multiplicar,
    restar,
    sumar,
    operation,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {beforeNumber !== '0' && (
        <Text style={styles.beforeText}>
          {beforeNumber}
        </Text>
      )}
      <Text
        style={styles.text}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.rowButton}>
        <ButtonCalc
          text="C"
          color="#9B9B9B"
          action={cleanNumber}
        />
        <ButtonCalc
          text="+/-"
          action={negativeNumber}
          color="#9B9B9B"
        />
        <ButtonCalc
          color="#9B9B9B"
          text="del"
          action={deleteLastNumber}
        />
        <ButtonCalc
          color="#FF9427"
          text="/"
          action={dividir}
        />
      </View>

      <View style={styles.rowButton}>
        <ButtonCalc
          text="7"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="8"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="9"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="x"
          action={multiplicar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <ButtonCalc
          text="4"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="5"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="6"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="-"
          action={restar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <ButtonCalc
          text="1"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="2"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="3"
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="+"
          action={sumar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <ButtonCalc
          text="0"
          action={concatNumber}
          color="#2B2B2B"
          width
        />
        <ButtonCalc
          text="."
          action={concatNumber}
          color="#2B2B2B"
        />
        <ButtonCalc
          text="="
          color="#2B2B2B"
          action={operation}
        />
      </View>
    </View>
  )
}

export default CalculadoraScreen;
