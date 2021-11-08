<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function getapicurlconnect($apiurl, $getparameter)
{

  $url = $apiurl;

  $params = http_build_query($getparameter);

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url . "?" . $params); //using the setopt function to send request to the url
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //response returned but stored not displayed in browser
  curl_setopt($ch, CURLOPT_TIMEOUT, 1000);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch); //executing request
  $err = curl_error($ch);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    return $result; //display response	
  }
  curl_close($ch); //terminate curl handler
}

$apiurl = 'https://api.musement.com/api/v3/cities';
$getparam = array();
$cities_data = json_decode(getapicurlconnect($apiurl, $getparam), true);
$city_info = array();
foreach ($cities_data as $city) {
  array_push($city_info, [$city['latitude'], $city['longitude'], $city['country']['name']]);
  $apiurl = 'http://api.weatherapi.com/v1/forecast.json';
  $getparam = array(
    'key'   => "7968f30f1cbc4408a7e132101211006",
    'q' => $city['latitude'] . ',' . $city['longitude'],
    'days'   => 2
  );
  $weather_data = json_decode(getapicurlconnect($apiurl, $getparam), true);
  echo $city['country']['name'] . ' | ';
  foreach ($weather_data['forecast']['forecastday'] as $weather) {
    echo $weather['day']['condition']['text'] . ' - ';
  }
}
