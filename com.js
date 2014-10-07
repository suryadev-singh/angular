function accessPhpService() {
  var self = this;
  this.getReportData = function() {
    $.ajax({
      type: "POST",
      url: this.url, //'handlerAdvertiser.php?' + this.method,
      data: this.data,
      async: false,
      dataType: 'json',
      beforeSend: function() {
        $('.loader').removeClass('hide');
      }
    }).done(function(result) {
      self.rData = result;  
      trackError(serviceObj.rData.error_no);      
      $('.loader').addClass('hide');
    });
  };
}
