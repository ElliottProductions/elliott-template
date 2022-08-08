import client from './supabase-client.js';

export function getUser() {
  return client.auth.user();
}

export async function signUp(credentials) {
  return await client.auth.signUp(credentials);
}

export async function signIn(credentials) {
  return await client.auth.signIn(credentials);
}

export async function signOut() {
  return await client.auth.signOut();
}

export function onAuthChange(handleAuthChange) {
  return client.auth.onAuthStateChange(handleAuthChange);
}
