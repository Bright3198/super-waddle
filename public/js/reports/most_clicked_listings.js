$(document).ready(function(){
  $.ajax({
    url: "report/most_clicked_listings",
    type: "GET",
    success: function(data) {
      // parse JSON string into JavaScript array 
      const myArr = JSON.parse(data);

      // write message to console to aid in troubleshooting
      console.log(myArr);  
      console.log(data);
      var name = [];
      var click_count = [];
      
      // append each value to an array
      for(var i in myArr) {
        name.push(myArr[i].name);
        click_count.push(myArr[i].click_count);
        console.log(myArr[i]);
      }

      // data pertaining to the graph
      var ctx = document.getElementById('mostClickedListings');
      var mostClickedListings = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: name,
              datasets: [{
                  label: 'Most viewed listings',
                  data: click_count,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth:0.1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });        

    },
    error: function(data) {
      console.log(data);
    }
  });
});