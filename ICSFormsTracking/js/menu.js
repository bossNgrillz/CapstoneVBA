$('#toggleExt').click(function(){
    $('#menuExt').toggle();
});

$('#mainMenu button').click(function(){
    clearMenuExt();
});

$('#formsMenu').click(function(){
    GetForms();
});

$(document).on('click', '#formNum', function(){
    $('.formOptions').hide();
    $(this).next('.formOptions').show();
});

$(document).on('click', '.formOptions button', function(){
    const buttonClicked = $(this).text();
    const formNumber = $(this).parent().parent().find('#formNum').text();
    switch(buttonClicked) {
        case 'New':
            newForm(formNumber);
            break;
        case 'Save':
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
<<<<<<< HEAD
        list += '<button type="button" class="btn btn-light btn-block text-left btn-lg border-top-0 border-right-0 border-left-0" id="formNum">' + forms[i].num + '</button>';
        list += '<div class="formOptions"><button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-file"></i> New</button><button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-save"></i> Save</button><button type="button" class="btn btn-light btn-block text-left" id=""><i class="far fa-folder-open"></i> Open</button><button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-share-square"></i> Export</button><button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-print"></i> Print</button><button type="button" class="btn btn-light btn-block text-left" id=""><i class="fas fa-trash-alt"></i> Delete</button>';
=======
        list += '<button type="button" id="formNum">' + forms[i].num + '</button>';
        list += '<div class="formOptions"><button type="button" >New</button><button type="button">Save</button><button type="button">Open</button><button type="button">Export</button><button type="button" >Print</button><button type="button">Delete</button>';
>>>>>>> 3bc39eceaa5f545ae67130ad821bab326c4bf4c8
        list += '</div></div>';
    }

    $('#menuExt').html(list);
    $('#menuExt').show();
}

function clearMenuExt(){
    $('#menuExt').html('');
}

//
function importFormsToDom(){
    const links = document.querySelector('link[rel="import"]');

}