const progressDays=(runs)=>
runs.reduce((acc,next,index,arr)=>arr[index]-arr[index-1]>0?acc+1:acc,0)