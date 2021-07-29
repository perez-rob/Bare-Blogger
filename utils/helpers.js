module.exports = {
  format_dateTime: (date) => {
    // Format date as MM/DD/YYYY
    return (date.toLocaleString('en-US', {timeStyle: 'medium'}) + ' - ' + date.toLocaleString('en-US', {dateStyle: 'medium'}));
  }
};
