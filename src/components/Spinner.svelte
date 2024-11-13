<script>
    export let size = '50px';
    export let color = '#8a2be2'; // A shade of purple
  </script>
  
  <style>
    .spinner {
      display: inline-block;
      width: var(--size);
      height: var(--size);
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: var(--color);
      animation: spin 0.6s linear infinite;
    }
  
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  </style>
  
  <div
    class="spinner"
    style="--size: {size}; --color: {color}"
    aria-label="Loading"
  ></div>
  