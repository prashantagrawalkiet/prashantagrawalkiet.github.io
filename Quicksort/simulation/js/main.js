// quickSort
var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];


   var quickSort = function(arr) {
      if (arr.length <= 1) {
		  comparisonCount++;
         return arr;
         } else {
               var leftArr = [];              
               var rightArr = [];
               var newArr = [];
			   comparisonCount++;
               var pivot = arr[arr.length-1];      //  Take a pivot value
			   comparisonCount++;
               var length = arr.length;
			   comparisonCount++;
			   comparisonCount++;
               for (var i = 0; i < length-1; i++) {
				   comparisonCount++;
				   comparisonCount++;
                  if (arr[i] <= pivot) {    // using pivot value start comparing
				     comparisonCount++;
                     leftArr.push(arr[i]);      
               } else {
				       comparisonCount++;
                       rightArr.push(arr[i]);
             }
			 comparisonCount++;
           }
         return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be                                                                            //returned untill sorting occurs
      }
   }

 $('a.btn').click(function(event) {
    event.preventDefault();
bestArr = [];
AvgArr = [];
wstArr = [];
var j = 1;
    $.each( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function( i, val ) {
    var arr = [];
    $('.form'+val+' input[type=text]').each(function(index) {
      if($(this).val() != "") {
        arr.push(parseInt($(this).val()));
      }
    });
    console.log(arr);
    $("#array"+val+"arr").text("Unsorted array - " + arr.toString());
comparisonCount = 0;
$("#sort"+val+" .sort-value").empty();
$("#sort"+val+" .sort-value").append(" " + quickSort(arr) + ",");
labelTxt = "";
if( j % 5 == 1)
labelTxt = "5"
if( j % 5 == 2)
labelTxt = "10"
if( j % 5 == 3)
labelTxt = "15"
if( j % 5 == 4)
labelTxt = "20"
if( j % 5 == 0)
labelTxt = "25"
if(j <= 5 ){
bestArr.push({ y: comparisonCount, label: labelTxt})
}
if(j > 5 && j <= 10){
AvgArr.push({ y: comparisonCount, label: labelTxt})
}
if(j > 10 ){
wstArr.push({ y: comparisonCount, label: labelTxt})
}
    $('.comparison-count'+val+" .sort-value").empty();
    $('.comparison-count'+val+" .sort-value").text(" " + comparisonCount);
j++;
    });

DrawChart();
  });


DrawChart = function(){
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Quick Sort : Running Time"  
      },
      data: [
      {        
        type: "spline",
showInLegend: true,
legendText: "Best Case",
color: "Green",
        dataPoints: bestArr
      },
        {        
        type: "spline",
showInLegend: true,
legendText: "Average Case",
color: "RoyalBlue",
        dataPoints: AvgArr
      },
        {        
        type: "spline",
showInLegend: true,
legendText: "Worst Case",
color: "Red",
        dataPoints: wstArr
      }
      ]
    });

    chart.render();

}
  /*-- CHART JS --*/
  window.onload = function () {
 
 

  }