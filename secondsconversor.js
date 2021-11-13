let segundos = 400   

 
function convert () {
  
   let year = (Math.trunc(segundos / 31104000 ) ) 
   let mount = (Math.trunc ((segundos -(year * 31104000))/2592000))
   let day = (Math.trunc ((segundos -(year * 31104000) -(mount * 2592000 ))/86400))
   let hour = (Math.trunc ((segundos -(year * 31104000) -(mount * 2592000 ) - (day * 86400))/3600))
   let min = (Math.trunc ((segundos -(year * 31104000) -(mount * 2592000 ) - (day * 86400) - (hour * 3600))/60))
   let sec = (Math.trunc ((segundos -(year * 31104000) -(mount * 2592000 ) - (day * 86400) - (hour * 3600) - (min * 60))))
   

  if (year >= 1 ) {
    return ( year+ ':' + mount + ':' + day + ':' + hour + ':' + min+  ':' + sec)  
  }
  else if (year == 0  && mount >= 1 ) {
   return ( mount + ':' + day + ':' + hour + ':' + min + ':' + sec)
  }
  else if (year == 0  && mount == 0 && day >= 1 ) {
   return ( day + ':' + hour + ':' + min + ':' + sec)
  }
  else if (year == 0  && mount == 0 && day ==  0 ) {
   return( hour + ':' + min + ':' + sec)
  }
 
}
console.log (convert())