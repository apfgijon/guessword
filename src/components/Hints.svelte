<script>
    export let hint1 = "";
    export let hint2 = "";
    export let onSurrender = () => {};
  
    let hintStage = 0;
  
    function handleButtonClick() {
      if (hintStage < 2) {
        hintStage += 1;
      } else {
        onSurrender();
      }
    }
  </script>
  
  <style>
    .hint-container {
      font-family: Arial, sans-serif;
      max-width: 300px;
      margin: auto;
      padding: 1em;
      border-radius: 12px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
      background-color: #1e1e1e;
      text-align: center;
      color: #c4b5fd;
      margin-top: 20px;
    }
  
    .hint {
      margin: 0.5em 0;
      padding: 0.5em;
      font-size: 1em;
      color: #f3e8ff;
      background-color: #2c2c2c;
      border-radius: 5px;
    }
  
    button {
      padding: 0.7em 1em;
      margin-bottom: 1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      background-color: #7c3aed;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #5b21b6;
    }
  </style>
  
  <div class="hint-container">
  
    <button on:click={handleButtonClick}>
      {hintStage < 2 ? `Show ${hintStage === 0 ? "First" : "Second"} Hint` : "Surrender"}
    </button>
    {#if hintStage > 0}
      <div class="hint">{hint1}</div>
    {/if}
    
    {#if hintStage > 1}
      <div class="hint">{hint2}</div>
    {/if}
  </div>
  