mui.init()
mui.plusReady(function() {
  //调用绘图的方法
  drawProgressbar(4000, 5000)

  //绘制进度条方法
  function drawProgressbar($ePoint, $totalPoint) {
    //具体值 $ePoint     总的值  $totalPoint
    //开始角度
    var $startAngle = -Math.PI / 2
    //结束角度
    var $endAngle = $ePoint / $totalPoint * 2 * Math.PI + $startAngle

    var $progressbar = document.getElementById("progressbar")
    var $progressbarCTX = $progressbar.getContext("2d")

    //绘制圆形进度条
    $progressbarCTX.beginPath()
    $progressbarCTX.arc(90, 90, 85, $startAngle, $endAngle, false)
    $progressbarCTX.lineWidth = 5
    $progressbarCTX.strokeStyle = "#D43030"
    $progressbarCTX.stroke()
    $progressbarCTX.closePath()

    //给每个数字加上千分位分隔符
    // $ePointStr = $ePoint.toString()
    // $totalPointStr = $totalPoint.toString()
    // $ePointLen = $ePointStr.length % 3
    // $totalPointLen = $totalPointStr.length % 3
    // var i = 1
    // for(i = 1;i < $ePointLen;i++) {
    //   var c = 
    // }

    //绘制文字
    $progressbarCTX.beginPath()
    $progressbarCTX.font = "24px sans-serif"
    $progressbarCTX.textAlign = "center"
    $progressbarCTX.fillStyle = "#FF0000"
    $progressbarCTX.fillText($ePoint, 90, 80);
    var $text = "/" + $totalPoint + " ePoints"
    $progressbarCTX.font = "22px sans-serif"
    $progressbarCTX.fillStyle = "#9C9C9C"
    $progressbarCTX.fillText($text, 90, 110);
  }
})
