import React, { Dispatch, SetStateAction, useEffect } from "react";
import { cryptoSymbolType } from "../components/ToggleButtonCrypto";
import { useCryptoPrices } from "./useCryptoPrices";

type UseValueReturnType = [
    cryptoSymbolType,
    Dispatch<SetStateAction<cryptoSymbolType>>,
    cryptoSymbolType,
    Dispatch<SetStateAction<cryptoSymbolType>>,
    string,
    Dispatch<SetStateAction<string>>,
    string,
    Dispatch<SetStateAction<string>>,
    Dispatch<SetStateAction<boolean>>,
    Dispatch<SetStateAction<boolean>>,
];

// Custom hook for managing state related to cryptocurrency conversion
export const useValue = ():UseValueReturnType => {

    // State variables for 'from' cryptocurrency, 'to' cryptocurrency, input values, and change flags
    const [cryptoSymbolFrom, setCryptoSymbolFrom] = React.useState<cryptoSymbolType>('BTC');
    const [cryptoSymbolTo, setCryptoSymbolTo] = React.useState<cryptoSymbolType>('ETH');
    const [valueFrom, setValueFrom] = React.useState<string>('');
    const [valueTo, setValueTo] = React.useState<string>('');
    const [changeFrom, setChangeFrom] = React.useState<boolean>(false);
    const [changeTo, setChangeTo] = React.useState<boolean>(false);

    // Fetch cryptocurrency prices using the useCryptoPrices hook
    const {data} = useCryptoPrices(cryptoSymbolFrom, cryptoSymbolTo)
    console.log(data, 'price')
    // Effect for updating the 'to' value when the 'from' value changes
    useEffect(() => {
        if(valueFrom&&data){
            setValueTo((parseFloat(valueFrom)*data).toString())
        }else if(!valueFrom) {
            setValueTo('')
        }
    },[changeFrom, cryptoSymbolFrom, cryptoSymbolTo, data])

    // Effect for updating the 'from' value when the 'to' value changes
    useEffect(() => {
        if(valueTo&&data){
            setValueFrom((parseFloat(valueTo)/data).toString())
        }else if(!valueTo) {
            setValueFrom('')
        }
    },[changeTo])

    // Return the state variables and functions for external use
    return [
        cryptoSymbolFrom, setCryptoSymbolFrom,
        cryptoSymbolTo, setCryptoSymbolTo,
        valueFrom, setValueFrom,
        valueTo, setValueTo,
        setChangeFrom,
        setChangeTo
    ]
}