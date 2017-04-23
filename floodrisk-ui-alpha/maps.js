
var map, heatmap;

function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 23.8103, lng: 90.4125},
          radius: 2500    
    });
     
     heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map,  
    }); 

     this.heatmap.set('radius', 25);
}


function toggle(value) {
      console.log(value);

      var gradient = [];
      var data = [];


      /// toggles by dropdown

      if(value == 1){
            /// color of heatmap

            
            /// add a new latlong to add a new point               
            data = [
            new google.maps.LatLng(21.296732, 92.147827),
            new google.maps.LatLng(24.534319, 89.851685),
            new google.maps.LatLng(22.3475, 91.8123),
            ]

                       gradient = [
           'rgba(0, 255, 255, 0)',
           'rgba(0, 255, 255, 1)',
           'rgba(0, 191, 255, 1)',
           'rgba(0, 127, 255, 1)',
           'rgba(0, 63, 255, 1)',
           ]

      } else if (value == 2){

      gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(255, 0, 0, 1)'
      ] 



      /// add a new latlong to add a new point                     
      data = [
      new google.maps.LatLng(22.3475, 91.8123),
      new google.maps.LatLng(22.5475, 91.23),
      ]
} else {

	                 gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            ]  


      /// add a new latlong to add a new point               
      
      data = [
      new google.maps.LatLng(23.91, 90.35),
      new google.maps.LatLng(24.9, 90.8611),
      new google.maps.LatLng(22.3475, 91.8123),
      new google.maps.LatLng(24.95, 90.32),
      new google.maps.LatLng(-3.483608, 113.637085),
      new google.maps.LatLng(-1.376249, 110.077515),
      ]
} 


changeGradient(gradient);
this.heatmap.setData(data);
}


function changeGradient(gradient) {    
     heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}


function getPoints() {
      /// initial heatmap which is temporarily given lat long of dhaka...      
      return [
      new google.maps.LatLng(23.8103, 90.4125),
      new google.maps.LatLng(23.8105, 90.42),
      ];
}

