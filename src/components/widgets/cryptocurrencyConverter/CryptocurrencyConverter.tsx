import * as React from 'react';

import SyncAltIcon from '@mui/icons-material/SyncAlt';

import { cryptoSymbolType } from './components/ToggleButtonCrypto';
import { FormCrypto } from './components/FormCrypto';
import { useValue } from './hooks/useValue';
import { InfoText } from './components/InfoText';
import { useBreakpoint } from './hooks/useBreackpoint';


// Main  component
export const CryptocurrencyConverter = () => {

    const [
      cryptoSymbolFrom, setCryptoSymbolFrom,
      cryptoSymbolTo, setCryptoSymbolTo,
      valueFrom, setValueFrom,
      valueTo, setValueTo,
      setChangeFrom,
      setChangeTo
    ] = useValue()

    const breakpoint = useBreakpoint()

    console.log(breakpoint)

  // Handler for changing the selected cryptocurrency symbol for 'from'
  const handleChangeFrom = (
    event: React.MouseEvent<HTMLElement>,
    newCryptoSymbol: cryptoSymbolType,
  ) => {
    if(newCryptoSymbol){
        
        setCryptoSymbolFrom(newCryptoSymbol);
    }   
  }

  // Handler for changing the selected cryptocurrency symbol for 'to'
  const handleChangeTo = (
    event: React.MouseEvent<HTMLElement>,
    newCryptoSymbol: cryptoSymbolType,
  ) => {
    if(newCryptoSymbol)
        setCryptoSymbolTo(newCryptoSymbol);
  };

  // Handler for changing the input values
  const onTextChangeFrom = (value:string) => {
    setValueFrom(value)
    setChangeFrom( oldValue => !oldValue)
  }
  const onTextChangeTo = (value:string) => {
    setValueTo(value)
    setChangeTo( oldValue => !oldValue)
  }
   
    return(
        <div 
          style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D1D7EC'
          }}
        >
            <div
              style={{
                backgroundColor: '#ffff',
                padding: 20,
                boxShadow: '15px 10px 57px 24px rgba(0,0,0,0.4)',
                borderRadius: 7
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 15,
                  ...(breakpoint > 2?{
                    flexDirection: 'row',
                  }:{
                    flexDirection: 'column',
                  }),
                }}
              >
                <FormCrypto 
                    handleChange={handleChangeFrom} 
                    cryptoSymbol={cryptoSymbolFrom} 
                    formSymbol='from' 
                    value = {valueFrom}
                    onChange =  {onTextChangeFrom}
                />
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: '#D1D7EC',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 16,
                    height: 32,
                    width:32,
                  }}
                >
                  <SyncAltIcon sx = {{color: '#ffff'}}/>
                </div>
                <FormCrypto 
                    handleChange={handleChangeTo} 
                    cryptoSymbol={cryptoSymbolTo} 
                    formSymbol='to'
                    value = {valueTo}
                    onChange =  {onTextChangeTo}
                />
              </div>
              <InfoText 
                cryptoSymbolFrom={cryptoSymbolFrom}
                cryptoSymbolTo={cryptoSymbolTo}
                valueFrom={valueFrom}
                valueTo={valueTo}
                />
            </div>
        </div>
    )
}