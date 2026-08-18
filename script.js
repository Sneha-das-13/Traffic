document.addEventListener('DOMContentLoaded', () => {

  // Initialize Canvas Simulation Placeholder
  const canvas = document.getElementById('trafficCanvas');
  const ctx = canvas.getContext('2d');
  
  function drawIntersection() {
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Roads
    ctx.fillStyle = '#475569';
    ctx.fillRect(100, 0, 100, 300); // Vertical Road
    ctx.fillRect(0, 100, 300, 100); // Horizontal Road

    // Center Line Indicators
    ctx.strokeStyle = '#f8fafc';
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(150, 0); ctx.lineTo(150, 300);
    ctx.moveTo(0, 150); ctx.lineTo(300, 150);
    ctx.stroke();
  }

  drawIntersection();

  // Mode Toggle Handler
  const toggleBtn = document.getElementById('modeToggleBtn');
  let isAdaptive = true;

  toggleBtn.addEventListener('click', () => {
    isAdaptive = !isAdaptive;
    toggleBtn.textContent = isAdaptive ? 'Mode: AI Adaptive' : 'Mode: Fixed Timing';
    toggleBtn.style.backgroundColor = isAdaptive ? '#38bdf8' : '#eab308';
  });

  // Render Performance Comparison Chart
  const chartCtx = document.getElementById('comparisonChart').getContext('2d');
  new Chart(chartCtx, {
    type: 'bar',
    data: {
      labels: ['Avg Waiting Time (s)', 'Avg Queue Length', 'Vehicles Processed (/10)'],
      datasets: [
        {
          label: 'Traditional Fixed System',
          data: [78, 24, 41],
          backgroundColor: '#ef4444'
        },
        {
          label: 'TRAFFIQ AI Adaptive',
          data: [42, 13, 52],
          backgroundColor: '#22c55e'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#f8fafc' } }
      },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
      }
    }
  });

});