import { tokenize } from './tokenize.js';

export interface Product {
  sku: string;
  title: string;
}

export interface Hit {
  sku: string;
  score: number;
}

const EXACT_SKU_BOOST = 100;

// An exact SKU match outranks every fuzzy hit — task t-58cc03.
export function rank(query: string, products: Product[]): Hit[] {
  const terms = tokenize(query);
  const hits: Hit[] = [];
  for (const product of products) {
    const haystack = tokenize(`${product.sku} ${product.title}`);
    const overlap = terms.filter((t) => haystack.includes(t)).length;
    const exact = product.sku.toLowerCase() === query.trim().toLowerCase();
    const score = overlap + (exact ? EXACT_SKU_BOOST : 0);
    if (score > 0) hits.push({ sku: product.sku, score });
  }
  return hits.sort((a, b) => b.score - a.score);
}
