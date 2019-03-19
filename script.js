

var monVue = new Vue({
    el:"#content",
    data: {
        database,
        titres :{
            Numero : "N°",
            Nom : "Nom",
            Entreprise : "Entreprise",
            Age: "age"
        },
        search:""
    },
    computed:{
        filtreNom() {
          return this.database.filter(adherent => {
            return adherent.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }


})



var homme = 0
var femme = 0

for (var i = 0; i < database.length; i++) {
  var gender = database[i].gender
  if (gender === "male") {
    homme++
  }else {
    femme++
  }
}

console.log(homme);
console.log(femme);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Homme', 'Femme',  ],
        datasets: [{
            label: 'Parité Homme / Femme',
            backgroundColor: 'rgb(0, 173, 255)',
            borderColor: 'rgb(0, 173, 255)',
            data: [femme, homme, ]
        }]
    },

// DEBUT DU TABLEAU A 0
   options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

}); 



// On attend que la page soit chargée 
jQuery(document).ready(function()
{
   // On cache la zone de texte
   jQuery('#details').hide();
   // toggle() lorsque le lien avec l'ID #toggler est cliqué
   jQuery('#maintable').click(function()
  {
      jQuery('#details').toggle(400);
      return false;
   });
});



  



    var adherent = database[0] ;
    window.onload=function()
    {


    // initialisation du composant demo
      var demo = new Vue({
        el: '#demo',
        data: {
          searchQuery: '',
          gridColumns: ['name', 'email'],
          gridData: database
        }
      }) ;


      // initialisation du composant de fiche perso
      var app = new Vue({
          el: '#details'
      }) ;
      // quand on clique sur un element on maj la fiche personnelle
      $( ".item" ).on( "click", function() {
        adherent = database[$(this).attr("id")] ;
        app.$forceUpdate();
      });

    }

