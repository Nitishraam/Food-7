// scripts.js
// This file expects Chart.js to be loaded with <script src="...chart.js" defer></script>
// and this file included with <script src="scripts.js" defer></script>

window.addEventListener('DOMContentLoaded', () => {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded. Please check the CDN or network. See the browser console Network tab.');
    // minimal UI feedback
    const msg = document.createElement('div');
    msg.style.color = 'darkred';
    msg.style.marginTop = '10px';
    msg.textContent = 'Chart.js failed to load — check console/network.';
    const barCard = document.getElementById('barChart');
    if (barCard && barCard.parentElement) barCard.parentElement.appendChild(msg);
    return;
  }

  // default font + color
  Chart.defaults.font.family = 'Inter, Roboto, Arial, sans-serif';
  Chart.defaults.color = '#213043';

  // Bar chart
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
        data: [12,19,8,14,22,18,20,24,16,20,22,26],
        backgroundColor: '#4f9cff66',
        borderColor: '#4f9cff',
        borderWidth:1,
        borderRadius:6
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:true,
      plugins:{legend:{display:false}},
      scales:{x:{grid:{display:false}}, y:{beginAtZero:true,grid:{color:'#f0f4fb'}}}
    }
  });

  // Line chart (targets vs actual)
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets:[
        {label:'Target', data:[200,220,240,260,280,300,320,340,360,380,400,420], borderColor:'#ffaf4f', backgroundColor:'#ffaf4f33', fill:true, tension:0.35},
        {label:'Actual', data:[180,200,230,210,270,290,300,320,340,360,380,400], borderColor:'#4f9cff', backgroundColor:'#4f9cff33', fill:true, tension:0.35}
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:true,
      plugins:{legend:{position:'top'}},
      scales:{x:{grid:{display:false}}, y:{grid:{color:'#f0f4fb'}}}
    }
  });

  // Gauge (doughnut half)
  const gaugeCtx = document.getElementById('gauge').getContext('2d');
  new Chart(gaugeCtx, {
    type:'doughnut',
    data:{
      labels:['Used','Remaining'],
      datasets:[{
        data:[76,24],
        backgroundColor:['#4f9cff','#e6eefc'],
        cutout: '75%',
        circumference: 180,
        rotation: 270
      }]
    },
    options:{responsive:true, plugins:{legend:{display:false}, tooltip:{enabled:false}}, maintainAspectRatio:true}
  });

  // Doughnut (popular)
  const donutCtx = document.getElementById('doughnut').getContext('2d');
  new Chart(donutCtx, {
    type:'doughnut',
    data:{
      labels:['Asian','Italian','Mixed'],
      datasets:[{
        data:[763,582,421],
        backgroundColor:['#4f9cff','#ffaf4f','#2ecc71']
      }]
    },
    options:{responsive:true, plugins:{legend:{display:false}}, maintainAspectRatio:true}
  });

  // Area (orders)
  const areaCtx = document.getElementById('areaChart').getContext('2d');
  new Chart(areaCtx, {
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets:[
        {label:'Online', data:[120,150,130,170,160,190,200,220,210,230,250,270], backgroundColor:'#4f9cff33', borderColor:'#4f9cff', fill:true, tension:0.35},
        {label:'In-store', data:[100,110,90,120,140,150,170,160,180,190,200,210], backgroundColor:'#ffaf4f33', borderColor:'#ffaf4f', fill:true, tension:0.35}
      ]
    },
    options:{responsive:true, plugins:{legend:{position:'bottom'}}, maintainAspectRatio:true, scales:{x:{grid:{display:false}},y:{grid:{color:'#f0f4fb'}}}
  });

}); // end DOMContentLoaded
