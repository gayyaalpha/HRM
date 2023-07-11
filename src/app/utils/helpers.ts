import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';

export const getArrayFromLocalStorage = async (itemName: string) => {
  if (!itemName) return null;

  try {
    let value = await AsyncStorage.getItem(itemName);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
  }

  console.log('Done.');
};

export const setArrayToLocalStorage = async (
  itemName: string,
  value: any = null,
) => {
  try {
    if (itemName) {
      await AsyncStorage.setItem(itemName, JSON.stringify(value));
    }
  } catch (e) {
    console.log(e);
  }

  console.log('Done tenent store.');
};

export const setToLocalStorage = async (
  itemName: string,
  value: any = null,
) => {
  try {
    if (itemName) {
      await AsyncStorage.setItem(itemName, value);
    }
  } catch (e) {
    console.log(e);
  }

  console.log('string store Done.');
};

export const getFromLocalStorage = async (itemName: string) => {
  if (!itemName) return null;

  try {
    let value = await AsyncStorage.getItem(itemName);
    if (!value) {
      return null;
    }
    return value;
  } catch (e) {
    console.log(e);
  }

  console.log('base url getlocal.');
};


export const convertJson = (itemName: string) => {
  try {
    return JSON.parse(itemName);
  } catch (e) {
    console.log(e);
  }

  console.log('Done.');
};

export interface UserResponse {
  appUser: User;

  access_Token: string;
}

export interface LoginRequest {
  email: string;

  password: string;
}
