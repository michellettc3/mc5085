const gData = [
    {
      name: "Venice",
      lat: 45.4408,
      lng: 12.3155,
    },
    {
      name: "Marrakech",
      lat: 31.6295,
      lng: -7.9811,
    },
    {
      name: "New York City",
      lat: 40.7128,
      lng: -73.935242,
    },
    {
      name: "Chiang Mai",
      lat: 18.7883,
      lng: 98.9853,
    },
    {
      name: "Carmel",
      lat: 36.5552,
      lng: -121.9233,
    },
    {
      name: "Capri",
      lat: 40.5532,
      lng: 14.2222,
    },
    {
      name: "Lake Tahoe",
      lat: 39.0968,
      lng: -120.0324,
    },
    {
      name: "Oakland",
      lat: 37.8044,
      lng: -122.2712,
    },
    {
      name: "Napa County",
      lat: 38.2975,
      lng: -122.2869,
    },
    {
      name: "Bologna",
      lat: 44.4949,
      lng: 11.3426,
    },
    {
      name: "Verona",
      lat: 45.4384,
      lng: 10.9916,
    },
    {
      name: "San Francisco",
      lat: 37.7749,
      lng: -122.4194,
    },
    {
      name: "Pompei",
      lat: 40.7462,
      lng: 14.4989,
    },
    {
      name: "Naples",
      lat: 40.8518,
      lng: 14.2681,
    },
    {
      name: "Madrid",
      lat: 40.4168,
      lng: 3.7038,
    },
    {
      name: "Barcelona",
      lat: 41.3874,
      lng: 2.1686,
    },
    {
      name: "Copenhagen",
      lat: 55.6761,
      lng: 12.5683,
    },
    {
      name: "Princeton",
      lat: 40.3573,
      lng: -74.6672,
    },
    {
      name: "Yosemite",
      lat: 37.8651,
      lng: -119.5383,
    },
    {
      name: "Seoul",
      lat: 37.5665,
      lng: 126.978,
    },
    {
      name: "Osaka",
      lat: 34.6937,
      lng: 135.5023,
    },
    {
      name: "Shenzhen",
      lat: 22.5429,
      lng: 114.0596,
    },
    {
      name: "Brussels",
      lat: 50.8476,
      lng: 4.3572,
    },
    {
      name: "Amsterdam",
      lat: 52.3676,
      lng: 4.9041,
    },
    {
      name: "Luxembourg",
      lat: 49.8153,
      lng: 6.1296,
    },
    {
      name: "Utrecht",
      lat: 52.0907,
      lng: 5.1214,
    },
    {
      name: "Delft",
      lat: 52.0116,
      lng: 4.3571,
    },
    {
      name: "Vancouver",
      lat: 49.2827,
      lng: -123.1207,
    },
    {
      name: "Hangzhou",
      lat: 30.2741 ,
      lng: 120.1552,
    },
    {
      name: "Beijing",
      lat: 39.9042,
      lng: 116.4074,
    },
    {
      name: "Shanghai",
      lat: 39.9042,
      lng: 121.4737,
    },
    {
      name: "Guangzhou",
      lat: 23.1291,
      lng: 113.2644,
    },
    {
      name: "Paris",
      lat: 48.8566,
      lng: 2.3522,
    },
    {
      name: "London",
      lat: 51.5702,
      lng: 0.1276,
    },
    {
      name: "Reykjavik",
      lat: 64.1466,
      lng: -21.9426,
    },
    {
      name: "Budapest",
      lat: 47.4979,
      lng: 19.0402,
    },
    {
      name: "Kyoto",
      lat: 35.0116,
      lng: 135.7681,
    },
    {
      name: "Uji",
      lat: 34.8845,
      lng: 135.7997,
    },
    {
      name: "Puerto Vallarta",
      lat: 20.6534,
      lng: -105.2253,
    },
    {
      name: "Cancun",
      lat: 21.1619,
      lng: -86.8515,
    },
    {
      name: "Singapore",
      lat: 1.3521,
      lng: 103.8198,
    },
    {
      name: "Busan",
      lat: 35.1796,
      lng: 129.0756,
    },
    {
      name: "Bangkok",
      lat: 13.7563,
      lng: 100.5018,
    },
    {
      name: "Los Angelas",
      lat: 34.0522,
      lng: -118.2437,
    },
    {
      name: "Seattle",
      lat: 47.6062,
      lng: -122.3321,
    },
    {
      name: "Portland",
      lat: 45.5152,
      lng: -122.6784,
    },
    {
      name: "Boston",
      lat: 42.3601,
      lng: -71.0589,
    },
    {
      name: "Cape Cod",
      lat: 41.6688,
      lng: -70.2962,
    },
    {
      name: "San Diego",
      lat: 32.7157,
      lng: -117.1611,
    },
    
  ]
    
    
    
   





const colorInterpolator = (t) => `rgba(250,250,210,${Math.sqrt(1 - t)})`;

const world = Globe()(document.getElementById("globeViz"))
.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')

.ringsData(gData)
.ringColor(() => colorInterpolator)
.ringMaxRadius(2)
.ringPropagationSpeed(1)
.ringRepeatPeriod(1000)
.ringAltitude(0.015);

    

// Add auto-rotation
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = -0.5;

