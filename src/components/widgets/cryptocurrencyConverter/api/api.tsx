import axios from 'axios';
import { cryptoSymbolType } from '../components/ToggleButtonCrypto';

// Binance API endpoint for ticker price
const tickerEndpoint = 'https://api.binance.com/api/v3/ticker/price';

// Symbol for Ethereum and Bitcoin
// const ethSymbol = 'ETHUSDT';
// const btcSymbol = 'BTCUSDT';

// Function to get the price of a symbol
export async function getCryptoPrice(symbolFrom:cryptoSymbolType, symbolTo:cryptoSymbolType): Promise<number> {
  let symbol = symbolFrom+symbolTo
  try {
    
    if(symbolFrom == 'USDT' || (symbolFrom == 'BTC' && symbolTo == 'ETH')){
      symbol = symbolTo + symbolFrom
    }
    const response = await axios.get(tickerEndpoint, { params: { symbol } });
    const data = response.data;
    const price = parseFloat(data.price);
    if((symbolFrom == 'USDT' || (symbolFrom == 'BTC' && symbolTo == 'ETH'))){
      return 1/price;
    }
    return price;
  } catch (error) {
    console.error(`Error fetching ${symbol} price: ${error}`);
    throw error;
  }
}

