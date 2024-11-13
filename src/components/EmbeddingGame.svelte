<script>
    import { onMount } from 'svelte';
    import { getRandomWord } from '../lib/word.ts';
    import Spinner from './Spinner.svelte';
    import Hints from './Hints.svelte';
    
  import Input from './Input.svelte';
  import ScoreList from './ScoreList.svelte';
  
    let wordInfo = getRandomWord();
    let word1 = wordInfo.word;
    let embedding1 = null;
    let word2 = '';
    let similarity = null;
    let results = [];
    let dialog_title = "You won!";

    const hint1 = wordInfo.hint1;
    const hint2 = wordInfo.hint2;
    const explain = wordInfo.explain.split("A poem:");
    let current_result;

    let loading= false;

    let dialog;

  
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
    function singleSoftmax(value) {
      const scaledValue = (value - 0.5) * 10;

      const expValue = Math.exp(scaledValue);
      
      const expBaseline = Math.exp(0); 

      return expValue / (expValue + expBaseline);
    }
    function areWordsEqual(word1, word2) {
        return word1.toLowerCase() === word2.toLowerCase();
  }
    async function checkWord() {
      if (areWordsEqual(word1, word2)){
        dialog.showModal();
        return;
      }
      loading = true;
      const embedding2 = await getEmbedding(word2);
      const dotProduct = embedding1.reduce((sum, a, i) => sum + a * embedding2[i], 0);
      const magnitudeA = Math.sqrt(embedding1.reduce((sum, a) => sum + a * a, 0));
      const magnitudeB = Math.sqrt(embedding2.reduce((sum, b) => sum + b * b, 0));
      similarity = dotProduct / (magnitudeA * magnitudeB);
      similarity = singleSoftmax(similarity);
      results.push({
        text: word2,
        score: similarity *100
      })
      current_result ={
        text: word2,
        score: similarity *100
      };
      results = results.sort((a, b) => b.score - a.score)
      word2= "";
      loading = false;
      
    }
    function surrender(){

      console.log("heeelo")
        dialog_title="You gave up";
        dialog.showModal();
    }
    onMount(async ()=>{
      embedding1 = await getEmbedding(word1);
    })
  </script>
  <main>
    <section>
    <Input
    label="Guess the word"
    bind:value={word2}
    callback={checkWord}
  />
</section>
<section class="results">
  <section>
    <article class={`spinner-container`}>
      {#if loading}
      <Spinner size="30px" color="#9447ff" />
      {:else if current_result}
        <article class="last-word-container">
        <span class="last-word">{current_result.text}</span>
        <span>{current_result.score.toFixed(0)}%</span></article>
      {/if}
    </article>
    <article>
      <ScoreList
      items={results}></ScoreList>
    </article>
  </section>
    <section>
    <article>
      <h2 class="hints-title">
        Hints <span class="material-icon">lightbulb</span>
      </h2>
    </article>
    <article>

      <Hints {hint1} {hint2} onSurrender={()=>{surrender()}}></Hints>
    </article>
  </section>
</section>
  </main>
  <dialog bind:this={dialog}>  <button class="close-button" on:click={()=>{dialog.close()}}> <span class="material-icon">close</span> </button>
    <h2 class="dialog-title">{dialog_title}</h2>
    <p class="dialog-content">The word was <strong>{word1}</strong></p>
    {#each explain as e}
    <p class="dialog-content">{e}</p>
    {/each}
    <button class="dialog-action" on:click={()=>{location.reload(true);}}>Play again!</button></dialog>
  <style>
    .last-word-container{
      padding-top: 15px;
    }
    .last-word {
      font-weight: 700;
    }
    .material-icon {
        font-family: 'Material Icons';
    }
    .hints-title {
      text-align: center;
      margin: 0;
    }
    .spinner-visible {
      visibility: hidden;
    }
.spinner-container {
  margin:auto;
  text-align: center;
}
.results {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px; 
}
.results *:first-child {
  height: 40px;
}

/* Basic Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Style the dialog element */
dialog {
  width: 90%;
  max-width: 400px;
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

/* Hide default browser appearance */
dialog::backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  animation: fadeIn 0.3s ease;
}

/* Title */
.dialog-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

/* Content */
.dialog-content {
  font-size: 1em;
  margin-bottom: 20px;
  text-align: left;
}

/* Action Button */
.dialog-action {
      padding: 0.7em 1em;
      margin-top: 1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      background-color: #7c3aed;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    .dialog-action:hover {
      background-color: #5b21b6;
    }

/* Close Button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  color:#fff;
  background: transparent;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
  </style>