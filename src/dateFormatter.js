export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  
  var systemDateTime = new Date();
  var dateToFormatTime = new Date();
  systemDateTime.setTime(systemDateTimeMillis);
  dateToFormatTime.setTime(dateToFormatTimeMillis);
  
  var dateDiff = Math.floor((Date.UTC(systemDateTime.getFullYear(), systemDateTime.getMonth(), systemDateTime.getDate()) - Date.UTC(dateToFormatTime.getFullYear(), dateToFormatTime.getMonth(), dateToFormatTime.getDate()) ) /(1000 * 60 * 60 * 24));
  
  if (dateDiff == 0)
    return 'TODAY';
  else
    return dateToFormatTime.getDate() + '/' + eval(dateToFormatTime.getMonth()+1) + '/' + dateToFormatTime.getFullYear();
};