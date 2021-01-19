

// follow


  //TWEETS


// estatisticas 

const GStatistics = new Statistics()
console.log(GStatistics.GetStatistics)

const StatisticsCard = new UStatistics()

GStatistics.GetStatistics()
    .then(function (response)  {
        response.json()

        .then(function (data)  {
            StatisticsCard.ShowStatistics(data)
        })
        
    })  

   


  


