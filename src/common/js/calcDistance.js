// 计算距离
function rad(d) {
  return (d * Math.PI) / 180.0;
}
// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
export default function calcDistance(lat1, lng1, lat2, lng2) {
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = radLat1 - radLat2;
  var b = rad(lng1) - rad(lng2);
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137; // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000; //输出为公里

  var distance = s;
  var unit = "";
  if (parseInt(distance) >= 1) {
    distance = distance.toFixed(1);
    unit = "km";
  } else {
    distance = parseInt(distance * 1000);
    unit = "m";
  }
  return {
    unit,
    num: distance,
    text: distance + unit,
  };
}
