$('.btn').click(function(e) {
    $('.btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
})

$('#toggleExt').click(function(){
    $("#menuExt").animate({ width: 'toggle', opacity: 'toggle' }, 'fast');
});

$('#mainMenu button').click(function(){
    clearMenuExt();
});

$('#formsMenu').click(function(){
    $("#menuExt").animate({ width: 'toggle', opacity: 'toggle' }, 'slow');
    GetForms();
});

$('#masterResrc').click(function(){
    const formHtml = './masterresourcelist.html';
    $('#content').load(formHtml);
});

$('#resrcTrack').click(function(){
    const formHtml = './resourceTracking.html';
    $('#content').load(formHtml);
});

$(document).on('click', '#formNum', function(){
    $('.formOptions').hide();
    $(this).next('.formOptions').show();
});

$(document).on('click', '.formOptions button', function(){
    const buttonClicked = $(this).text().trim();
    const formNumber = $(this).parent().parent().find('#formNum').text();

    //console.log(buttonClicked);

    switch(buttonClicked) {
        case 'New':
            newForm(formNumber);
            break;
        case 'Save':
            saveForm(formNumber);
            break;
        case 'Open':
            saveForm(formNumber);
            break;
        default:
            alert("Something went wrong");
            break;
    }
});

function newForm(formNumber){
    const formHtml = './forms/form' + formNumber + '.html';
    
    $('#content').load(formHtml);
}

function saveForm(formNumber){
    const formHtml = './forms/form' + formNumber + '.html';
    
    let test = $('#content h2').text();
    alert(test);
}

function openForm(formNumber){
    const formHtml = './forms/form' + formNumber + '.html';
    
    let test = $('#content h2').text();
    alert(test);
}

function GetForms(){

    const forms = [
        {name: 'Incident Objectives',
    num: '202'},
        {name: 'Organizational Assignment List',
    num: '203'},
        {name: 'Divishion Assignment List',
    num: '204'},
        {name: 'Add a 204',
    num: 'Add 204'},
        {name: 'Incident Radio Communications Plan',
    num: '205'},
        {name: 'Communications List',
    num: '205A'},
        {name: 'Medical Plan',
    num: '206'},
        {name: 'Safety Message/Plan',
    num: '208'},
        {name: 'Incident Status Summary',
    num: '209'},
        {name: 'Resource Status Change',
    num: '210'},
        {name: 'Incident Check-In List',
    num: '211'},
        {name: 'General Message',
    num: '213'},
        {name: 'Activity Log',
    num: '214'},
        {name: 'Operational Planning Worksheet',
    num: '215'},
        {name: 'Incident Action Plan Safety Analysis',
    num: '215A'},
        {name: 'Support Vehicle/Equipment Inventory',
    num: '218'},
        {name: 'Air Operations Summary',
    num: '220'},
        {name: 'Demobilization Check-Out',
    num: '221'},
        {name: 'Incident Personnel Performance Rating',
    num: '225'}
    ];
    
    let list = '';

    for(let i = 0; i < forms.length; i++){
        list += '<div class="formBlock">';
        list += '<button type="button" class="btn btn-light btn-block text-left btn-lg border-top-0 border-right-0 border-left-0" id="formNum">' + forms[i].num + '</button>';
        list += '<div class="formOptions">' + 
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-file"></i> New</button>' +
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-save"></i> Save</button>' +
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-folder-open"></i> Open</button>' +
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-share-square"></i> Export</button>' +
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-print"></i> Print</button>' +
        '<button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-trash-alt"></i> Delete</button>';
        list += '</div></div>';
    }

    $('#menuExt').html(list);
}

function clearMenuExt(){
    $('#menuExt').html('');
}
