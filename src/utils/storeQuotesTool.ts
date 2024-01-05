// storeQuotesTool.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QUOTES_LISTS} from '../constants/variable';
import quotes from 'quotesy';

const setQuotesLists = async () => {
  try {
    const lists = quotes.parse_json();
    const str_lists = JSON.stringify(lists);
    await AsyncStorage.setItem(QUOTES_LISTS, str_lists); // Store as JSON string
  } catch (e) {
    console.log('Error during set:', e);
  }
};

const getQuotesLists = async () => {
  try {
    const result = await AsyncStorage.getItem(QUOTES_LISTS);
    console.log('Stored data:', result); // Log the stored data

    if (!result) {
      return undefined;
    } else {
      const quotes_lists = JSON.parse(result);
      return quotes_lists;
    }
  } catch (e) {
    console.error('Error during get:', e);
    return undefined;
  }
};

export {setQuotesLists, getQuotesLists};
