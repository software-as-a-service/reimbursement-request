$vm.module_list={
    layout:                      ['--------','.../modules/frame/layout.html','2'],
    home:                        ['--------','.../modules/frame/home.html','2'],
    navigation:                  ['--------','.../modules/frame/navigation.html','2'],

    reimbursement_request:              ['20007572','.../modules/reimbursement/request.html','2'],
    reimbursement_request_item:         ['20007573','.../modules/reimbursement/request_item.html','2'],
    reimbursement_request_file:         ['20007574','.../modules/reimbursement/request_file.html','2'],
    reimbursement_request_approving:    ['20007575','.../modules/reimbursement/request_approving.html','2'],
    reimbursement_request_processing:   ['20007576','.../modules/reimbursement/request_processing.html','2'],

    email_list_managers:                ['20007517','.../modules/setup/email_list_managers.html','2'],
    email_list_accountants:             ['20007518','.../modules/setup/email_list_accountants.html','2'],

    email_to_manager:                   ['--------','.../modules/alert_email/email_to_manager.html','2'],
    email_to_accountant:                ['--------','.../modules/alert_email/email_to_accountant.html','2'],
    email_to_requester:                 ['--------','.../modules/alert_email/email_to_requester.html','2'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    $vm.module_list[key][2]=$vm.module_list[key][1];
    $vm.module_list[key][1]=$vm.url($vm.module_list[key][1].replace('...','__BASE__/'+$vm.repository));
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('...','https://github.com/'+$vm.repository+'/blob/master');
}
//--------------------------------------------------------
var jsN=0;
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js',function(){last_last();});
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js',function(){last_last();});
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/ace/ace.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108',function(){last_last();});
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){last_last();} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 300);

}
//--------------------------------------------------------
var last_last=function(){
    jsN++; if(jsN===7) $vm.load_demo();
}
//--------------------------------------------------------
