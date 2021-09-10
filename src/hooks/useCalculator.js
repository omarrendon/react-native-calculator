import React, { useState, useRef, } from 'react';

const operadores = ['sumar', 'restar', 'dividir', 'multiplicar'];

export const useCalculator = () => {
  const [number, setNumber] = useState('10');
  const [beforeNumber, setBeforeNumber] = useState('100');
  const operationsRef = useRef(operadores);

  const cleanNumber = () => {
    setNumber('0');
    setBeforeNumber('0');
  };

  const concatNumber = (numberText) => {
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const deleteLastNumber = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }
    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const negativeNumber = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberForLast = () => {
    if (number.endsWith('.')) {
      setBeforeNumber(number.slice(0, -1));
    } else {
      setBeforeNumber(number);
    }
    setNumber('0');
  };

  const dividir = () => {
    changeNumberForLast();
    operationsRef.current = operadores[2];
  };

  const sumar = () => {
    changeNumberForLast();
    operationsRef.current = operadores[0];
  };

  const restar = () => {
    changeNumberForLast();
    operationsRef.current = operadores[1];
  };

  const multiplicar = () => {
    changeNumberForLast();
    operationsRef.current = operadores[3];
  };


  const operation = () => {
    const firstNumber = Number(number);
    const secondNumber = Number(beforeNumber);

    switch (operationsRef.current) {
      case 'sumar':
        setNumber(`${firstNumber + secondNumber}`);
        break;
      case 'restar':
        setNumber(`${secondNumber - firstNumber}`);
        break;
      case 'dividir':
        setNumber(`${secondNumber / firstNumber}`);
        break;
      case 'multiplicar':
        setNumber(`${firstNumber * secondNumber}`);
        break;
    }
    setBeforeNumber('0');
  };

  return {
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
  };
};