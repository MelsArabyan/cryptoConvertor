import {
    UseQueryResult,
    useQuery
  } from '@tanstack/react-query'
import { getCryptoPrice } from '../api/api'
import { cryptoSymbolType } from '../components/ToggleButtonCrypto'

export const useCryptoPrices = (symbolFrom:cryptoSymbolType, symbolTo:cryptoSymbolType) => {
    // console.log(symbolFrom+symbolTo, 'symbol')
    return useQuery({
        queryKey: ['prices', symbolFrom+symbolTo],
        queryFn: () => {
            if(symbolFrom===symbolTo){
                return 1
            }
            return getCryptoPrice(symbolFrom, symbolTo)
        }
    })
}