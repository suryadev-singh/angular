

accessPhpService.prototype.url = "../controller/advertiser/handlerAdvertiser.php";
function getList() {
  accessPhpService.prototype.data = {'f': arguments.callee.name};
  serviceObj = new accessPhpService();
  serviceObj.getReportData();
  renderTable();
}

/**
 *  @Method       getFormData
 *  @Description  This method called to gat data for rendering form .
 */
function getFormData() {
  accessPhpService.prototype.data = {'f': arguments.callee.name};
  serviceObj = new accessPhpService();
  serviceObj.getReportData();
  renderForm();
  $('[data-rel=popover]').mouseout(function(e) {
    $('[data-rel=popover]').popover('hide');
  }).popover({html: true, container: 'body'});
}

/**
 *  @Method       setFormData
 *  @Description  This method called when form data to be submit on server .
 */
function setFormData() {
  var obj = $('.form-horizontal').serializeObject();
  obj.f = arguments.callee.name;
  sessionStorage.advertiserName = obj.Name; // Store advertiser Name to select in asset form
 
  accessPhpService.prototype.data = obj;
  serviceObj = new accessPhpService();
  serviceObj.getReportData();
  typeof serviceObj.rData.error_message !== "undefined" ? $(".popUpContent").html(serviceObj.rData.error_message).parents("#outPopUp").removeClass("hide") : window.location = 'advertiser_asset_add.php';
}


/**
 *  @Method       getEditFormData
 *  @Description  This method get data for editable form .
 */
function getEditFormData() {
  accessPhpService.prototype.data = {'bId': sessionStorage.recordId, 'f': arguments.callee.name};
  serviceObj = new accessPhpService();
  serviceObj.getReportData();
  renderForm();
  }  

  $('[data-rel=popover]').mouseout(function(e) {
    $('[data-rel=popover]').popover('hide');
  }).popover({html: true, container: 'body'});
}

/**
 *  @Method       setEditFormData
 *  @Description  This method set data for editable form .
 */
function setEditFormData() {
  var obj = $('.form-horizontal').serializeObject();
  obj.bId = sessionStorage.recordId;
  obj.f = arguments.callee.name;
  accessPhpService.prototype.data = obj;
  serviceObj = new accessPhpService();
  serviceObj.getReportData();
  alert(JSON.stringify(obj));
  typeof serviceObj.rData.error_message !== "undefined" ? $(".popUpContent").html(serviceObj.rData.error_message).parents("#outPopUp").removeClass("hide") : (sessionStorage['success'] = serviceObj.rData.success_message, window.location = 'advertiser.php');
}

/**
 *  @Method       deleteAdvertiser
 *  @Description  This method set data for editable advertiser form .
 */
function deleteAdvertiser(obj) {
  var flag = confirm("Are You Sure To Delete Record !");
  if (flag === true) {
    accessPhpService.prototype.data = {bId: sessionStorage.recordId, 'f': arguments.callee.name};
    serviceObj = new accessPhpService();
    serviceObj.getReportData();
    if (typeof serviceObj.rData.success_message !== "undefined") {
      $(obj).parents('tr').remove();
      $(".popUpContent").html(serviceObj.rData.success_message).parents("#outPopUp").removeClass("hide");
    }
  }
}

/**
 *  @Method       #
 *  @Description  This method render the data table .
 */
jQuery(function($) {
  var link = '<a href="advertiser_add.php" class="edit-page"><i class="ace-icon glyphicon glyphicon-plus"></i> Add Advertiser</a>';
  $(".add-link").prepend(link);
  var ownerHtm = '<div class="col-sm-2 no-padding" id="ownedbyId"></div>';
  ownerHtm += '<div class="col-sm-2 no-padding" id="managebyId"></div>';
  $(".filter-wrap .form-horizontal").append(ownerHtm);
//Set the table header and filter section
  var arrCDt = [{"sWidth": "95px", "sClass": "hide_field_owned"},
    {"sWidth": "45px", "sClass": "hide_field_owned"},
    {"sClass": "left"},
    {"sClass": "center"},
    {"sClass": "center"},
    {"sClass": "center"},
    {"sWidth": "120px"}];
  configureDataTable.prototype.aoColumnsOption = arrCDt;
  var arrCFDt = new Array(), i = 0;
  $.each(tblHeader[pName], function(key, val) {
    arrCFDt[i] = new Object();
    arrCFDt[i]['sSelector'] = '#' + key;
    arrCFDt[i]['type'] = 'select';
    key === 'ownedbyId' || key === 'managebyId' ? arrCFDt[i]['selected'] = 'Me' : '';
    i++;
  });

  arrCFDt[i] = new Object();
  arrCFDt[i]['sSelector'] = '#action';
  arrCFDt[i]['type'] = 'select';

  configureDataTable.prototype.columnFilterOption = arrCFDt;
  var tblObj = new configureDataTable();
  tblObj.initialise();

});


jQuery(function($) {
  $('.form-horizontal').validate({
    errorElement: 'div',
    errorClass: 'help-block',
    focusInvalid: false,
    rules: {
      Name: {
        required: true,
        maxlength: 15
      },
      Category: {
        required: true
      }
    },
    messages: {
      Name: {
        required: "Please provide advertiser name"
      },
      Category: "Please choose at least one option"
    },
    highlight: function(e) {
      $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
    },
    success: function(e) {
      $(e).closest('.form-group').removeClass('has-error');
      $(e).remove();
    },
    errorPlacement: function(error, element) {
      if (element.is('input[name=cDomains]')) {
        error.insertAfter(element.parents('.tags'));
      }
      else if (element.is('.chosen-select')) {
        error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
      }
      else {
        error.insertAfter(element);
      }
    },
    submitHandler: function(form) {
      window[calleeName]();
    },
    invalidHandler: function(form) {

    }
  });
});	
