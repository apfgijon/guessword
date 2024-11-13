<script>
    import { createEventDispatcher } from 'svelte';
  
    export let type = 'text';
    export let value = '';
    export let label = 'Input';
    export let name = '';
    export let id = '';
    export let required = false;
    export let disabled = false;
    export let callback = ()=> {};
  
    const dispatch = createEventDispatcher();
  
    function handleInput(event) {
      value = event.target.value;
      dispatch('input', value);
    }
  
    function handleSend() {
      dispatch('send', value);
      callback();
    }
  
    function handleKeyPress(event) {
      if (event.key === " ") {
      event.preventDefault(); // Prevent space character from being entered
    }
      if (event.key === 'Enter') {
        handleSend();
      }
    }
  </script>
  
  <div class="input-container">
    <input
      bind:value
      type={type}
      id={id}
      name={name}
      placeholder=" "
      on:input={handleInput}
      on:keypress={handleKeyPress}
      required={required}
      disabled={disabled}
      class="input-field"
    />
    <label for={id} class="input-label">
      {label}
    </label>
    <button
      type="button"
      on:click={handleSend}
      class="send-button"
      aria-label="Send"
      disabled={disabled || !value.trim()}
    >
      <span class="material-icon">send</span>
    </button>
  </div>
  
  <style>
    .material-icon {
        font-family: 'Material Icons';
    }
    .input-container {
      position: relative;
      margin: 1.5rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      --theme-color: #9447ff;
      --second-theme-color: #8127ff;
    }
  
    .input-field {
      width: 100%;
      padding: 1rem 2.5rem 1rem 0.75rem; /* Extra right padding for the button */
      background-color: #2c2c2c;
      border: 1px solid #444;
      border-radius: 8px;
      color: #e0e0e0;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s, background-color 0.3s;
    }
  
    .input-field:focus {
      border-color: var(--theme-color);
      background-color: #383838;
    }
  
    .input-field:disabled {
      background-color: #1e1e1e;
      border-color: #333;
      cursor: not-allowed;
      color: #777;
    }
  
    .input-label {
      position: absolute;
      top: 50%;
      left: 0.75rem;
      transform: translateY(-50%);
      color: #aaa;
      font-size: 1rem;
      pointer-events: none;
      transition: all 0.3s ease;
      background-color: transparent;
      padding: 0 0.25rem;
    }
  
    .input-field:focus + .input-label,
    .input-field:not(:placeholder-shown) + .input-label {
      top: -0.6rem;
      left: 0.65rem;
      font-size: 0.85rem;
      color: var(--theme-color);
    }
  
    /* Optional: Adjust label color when input is disabled */
    .input-field:disabled + .input-label {
      color: #555;
    }
  
    .send-button {
      position: absolute;
      right: 0.75rem;
      background: none;
      border: none;
      color: var(--theme-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: color 0.3s;
      font-size: 1.5rem;
    }
  
    .send-button:disabled {
      color: #555;
      cursor: not-allowed;
    }

  
    .send-button:hover:not(:disabled) {
      color: var(--second-theme-color);
    }
  </style>
  