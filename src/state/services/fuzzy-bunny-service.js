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
