import { useContext, useEffect, useState } from 'react';
import { FuzzyBunnyContext } from '../context/FuzzyBunnyContext.jsx';
import {
  getFamWithBuns,
} from '../services/fuzzy-bunny-service.js';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families, dispatch } = useContext(FuzzyBunnyContext);
  
  useEffect(() => {
    if (families) return;
    let ignore = false;
  
    const fetch = async () => {
      const { data, error } = await getFamWithBuns();
      if (ignore) return;
  
      if (error) {
        setError(error);
      }
      if (data) {
        dispatch({ type: 'load', payload: data });
      }
    };
  
    fetch();
  
    return () => (ignore = true);
  }, []);
  
  return { families, error };
}

export function useActions() {
  const { dispatch } = useContext(FuzzyBunnyContext);
  
  // const createAction = (service, type, makeSuccessMessage) => async (...args) => {
  //   const { data, error } = await service(...args);
  
  //   if (error) showError(error.message);
  
  //   if (data) {
  //     dispatch({ type, payload: data });
  //     const successMessage = makeSuccessMessage(data);
  //     showSuccess(successMessage);
  //   }
  // };
  
  const add = async (family) => {
    const { data, error } = await addFamily(family);
    if (error) {
      showError(error.message);
    }
    if (data) {
      dispatch({ type: 'add', payload: data });
      showSuccess(`Added ${data.name}`);
    }
  };
  
   
  
  return { add };
}
