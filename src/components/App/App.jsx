import './App.css';
import { DigitButton } from '../DigitButton/digitButton';
import { OperandButton } from '../OperandButton/operationButton';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DIGIT, CLEAR,CHOOSE_OPERATION, EVALUATE, DELETE_DIGIT } from '../../services/mainSlice';

function App() {
  const dispatch = useDispatch();
  const currentNum = useSelector(store => store.currentNum);
  const previousNum = useSelector(store => store.previousNum);
  const operation = useSelector(store => store.operation);
  
  const digitClickHandler = useCallback((digit) => {
    dispatch({type: ADD_DIGIT, digit: digit})
  }, [dispatch]);

  const clearClickHandler = useCallback(() => {
    dispatch({type: CLEAR})
  }, [dispatch]);

  const operationClickHandler = useCallback((operation) => {
    dispatch({type: CHOOSE_OPERATION, operation: operation})
  }, [dispatch]);

  const elaluationClickHandler = useCallback((operation) => {
    dispatch({type: EVALUATE})
  }, [dispatch]);

  const deleteClickHandler = useCallback((operation) => {
    dispatch({type: DELETE_DIGIT})
  }, [dispatch]);

  const integerFormatter = new Intl.NumberFormat('ru', {
    minimumFractionDigits : 0
  });

  const formatNum = (num) => {
    if(num === '') return;
    const [integer, decimal] = num.split('.');
    if(!decimal) return integerFormatter.format(num);
    return `${integerFormatter.format(integer)}.${decimal}`;
  }

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="output">
          <div className="output_previous">{formatNum(previousNum)} {operation}</div>
          <div className="output_current">{formatNum(currentNum)}</div>
        </div>
        <div className="buttons_wrapper">
          <div className="button button_span2" onClick={clearClickHandler}>AC</div>
          <div className="button" onClick={deleteClickHandler}>DEL</div>
          <OperandButton operation="+" onClickHandler={operationClickHandler}/>
          <DigitButton digit={'7'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'8'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'9'} onClickHandler={digitClickHandler}/>
          <OperandButton operation="-" onClickHandler={operationClickHandler}/>
          <DigitButton digit={'4'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'5'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'6'} onClickHandler={digitClickHandler}/>
          <OperandButton operation="*" onClickHandler={operationClickHandler}/>
          <DigitButton digit={'1'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'2'} onClickHandler={digitClickHandler}/>
          <DigitButton digit={'3'} onClickHandler={digitClickHandler}/>
          <OperandButton operation="/" onClickHandler={operationClickHandler}/>
          <DigitButton digit="." onClickHandler={digitClickHandler}/>
          <DigitButton digit={'0'} onClickHandler={digitClickHandler}/>
          <div className="button button_span2" onClick={elaluationClickHandler}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
