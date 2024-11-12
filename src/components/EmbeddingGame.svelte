<script>
    import { onMount } from 'svelte';
    import { getRandomWord } from '../lib/word.ts';
    
  import Input from './Input.svelte';
  import ScoreList from './ScoreList.svelte';
  
    let word1 = getRandomWord();
    let embedding1 = null;
    let word2 = '';
    let embedding2 = null;
    let similarity = null;
    let results = [];

  
    async function fetchEmbedding(word) {
      try {
        const response = await fetch('/api/embedding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ word }),
        });
  
        const data = await response.json();
        if (data.error) {
          return null;
        } else {
          return data.embedding;
        }
      } catch (err) {
        error = `Failed to fetch embedding: ${err.message}`;
        return null;
      }
    }
  
  
    async function getEmbedding(text) {
      return await fetchEmbedding(text);
    }
  
    async function calculateSimilarity() {
      const embedding2 = await getEmbedding(word2);

      const dotProduct = embedding1.reduce((sum, a, i) => sum + a * embedding2[i], 0);
      const magnitudeA = Math.sqrt(embedding1.reduce((sum, a) => sum + a * a, 0));
      const magnitudeB = Math.sqrt(embedding2.reduce((sum, b) => sum + b * b, 0));
      similarity = dotProduct / (magnitudeA * magnitudeB);
      results.push({
        text: word2,
        score: similarity *100
      })
      results = results.sort((a, b) => b.score - a.score)
      
    }

    onMount(async ()=>{
      embedding1 = await getEmbedding(word1);
    })
  </script>
  
  <main>
    {word1}  
    <Input
    label="Guess the word"
    bind:value={word2}
    callback={calculateSimilarity}
  />


  <ScoreList
  items={results}></ScoreList>
  </main>
  
  <style>

  </style>