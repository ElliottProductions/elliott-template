import { client } from './client.js';

export async function getFamWithBuns() {
  const res = await client.from('loving_families').select(
    `id,
        name,
        bunnies:fuzzy_bunnies(
            id,
            name,
            family
        )
    `);

  return res;
}

export async function addFamily(family) {
  return await client.from('loving_families').insert(family).single();
}

export async function updateFamily(id, familyUpdate) {
  return await client
    .from('loving_families')
    .update(familyUpdate)
    .eq('id', id)
    .single();
}

export async function removeFamily(id) {
  return await client
    .from('loving_families')
    .delete()
    .eq('id', id)
    .single();
}

