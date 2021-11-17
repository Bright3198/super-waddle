$(document).ready(function(){
    $.ajax({
      url: "report/listings_per_district",
      type: "GET",
      success: function(data) {
        // parse JSON string into JavaScript array 
        const myArr = JSON.parse(data);
        console.log(myArr);  
        console.log(data);
        var district = [];
        var posts_num = [];
        
        // push each value to array
        for(var i in myArr) {
          district.push(myArr[i].district);
          posts_num.push(myArr[i].posts_num);
          console.log(myArr[i]);
        }

        // data pertaining to the graph
        var ctx = document.getElementById('listingsPerDistrict');
        var listingsPerDistrict = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: district,
                datasets: [{
                    label: 'Posts per district',
                    data: posts_num,
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