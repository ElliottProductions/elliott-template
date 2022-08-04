import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  'https://oixwalnidmyjxitzolhq.supabase.co';
const SUPABASE_KEY =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9peHdhbG5pZG15anhpdHpvbGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzOTIzNDQsImV4cCI6MTk3NDk2ODM0NH0.rWZnNGtdIPIkfg5dyM5kQNDZN50YLHxPaeM4ZFiKG2M';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
