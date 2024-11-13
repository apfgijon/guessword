<script>
  // Sample data for the list
  export let items = [
    { text: 'Design the user interface', score: 85 },
    { text: 'Implement authentication', score: 70 },
    { text: 'Set up the database', score: 55 },
    { text: 'Write unit tests', score: 40 },
    { text: 'Deploy to production', score: 95.345245643 },
    { text: 'Gather user feedback', score: 60 },
    { text: 'Optimize performance', score: 75 },
    { text: 'Fix bugs', score: 30 },
  ];

  /**
   * Function to calculate the color based on score.
   * Scores range from 0 to 100.
   * 0% is red (hue 0), 50% is yellow (hue 60), and 100% is green (hue 120).
   */
  function getColor(score) {
    let hue;
    if (score < 50) {
      // From red to yellow
      hue = (score / 50) * 60; // 0 to 60
    } else {
      // From yellow to green
      hue = 60 + ((score - 50) / 50) * 60; // 60 to 120
    }
    return `hsl(${hue}, 70%, 50%)`;
  }

  /**
   * Convert HSL to RGB
   * Returns an object with r, g, b values (0-255)
   */
  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
  
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return { r, g, b };
  }

  /**
   * Calculate relative luminance of an RGB color
   * Formula based on WCAG guidelines
   */
  function getLuminance(r, g, b) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }

  /**
   * Determine whether to use black or white text based on background color
   */
  function getContrastColor(score) {
    let hue;
    if (score < 50) {
      hue = (score / 50) * 60;
    } else {
      hue = 60 + ((score - 50) / 50) * 60;
    }
    let { r, g, b } = hslToRgb(hue, 70, 50);
    let luminance = getLuminance(r, g, b);
    return luminance > 0.3 ? '#000000' : '#FFFFFF';
  }
</script>

<style>

  .list {
    list-style: none;
    padding: 20px;
    margin: 0 auto;
  }

  .list-item {
    position: relative;
    padding: 5px 25px;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #1e1e1e;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .list-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  .score-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--score-width);
    background-color: var(--score-color);
    z-index: 0;
    transition: width 0.5s ease, background-color 0.5s ease;
    border-radius: 12px 0 0 12px;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  .text {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    /* margin-top: 15px; */
    color: var(--text-color);
  }

  .score {
    font-size: 0.95rem;
    font-weight: 500;
    margin:0;
    color: var(--text-color);
  }


</style>

<ul class="list">
  {#each items as item}
    <li
      class="list-item"
      style="
        --score-width: {item.score}%;
        --score-color: {getColor(item.score)};
        --text-color: {getContrastColor(item.score)};
      "
    >
      <div class="score-bar" title="{item.score}%"></div>
      <div class="content">
        <h3 class="text">{item.text}</h3>
        <p class="score">Score: {item.score.toFixed(0)}%</p>
      </div>
    </li>
  {/each}
</ul>
