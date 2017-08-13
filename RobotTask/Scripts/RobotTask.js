
function ProcessXAxis() {
    var x = $('#XId')[0].value;
    var y = $('#YId')[0].value;
    var xCur = parseInt($('#divX')[0].innerText);
    var yCur = parseInt($('#divY')[0].innerText);
    if (x < 1) {
        $('#XId')[0].value = 1;
        alert('Please enter X-Coordinate range 1 to 5');
    }
    else if (x > 5) {
        $('#XId')[0].value = 5;
        alert('Please enter X-Coordinate range 1 to 5');
    }

    $('#divX')[0].innerText = x;

    if (!(x == xCur && y == yCur)) {
        var imgCurId = '#imgRobot' + xCur + yCur;
        var imgCurBlankId = '#imgBlank' + xCur + yCur;

        $(imgCurId)[0].style.display = 'none';
        $(imgCurBlankId)[0].style.display = 'block';

        var imgId = '#imgRobot' + x + y;
        var imgBlankId = '#imgBlank' + x + y;

        $(imgId)[0].style.display = 'block';
        $(imgBlankId)[0].style.display = 'none';
    }
}
function ProcessYAxis() {
    var x = $('#XId')[0].value;
    var y = $('#YId')[0].value;
    var xCur = parseInt($('#divX')[0].innerText);
    var yCur = parseInt($('#divY')[0].innerText);
    if (y < 1) {
        $('#YId')[0].value = 1;
        alert('Please enter Y-Coordinate range 1 to 5');
    }
    else if (y > 5) {
        $('#YId')[0].value = 5;
        alert('Please enter Y-Coordinate range 1 to 5');
    }

    $('#divY')[0].innerText = y;
    
    if (!(x == xCur && y == yCur)) {
        var imgCurId = '#imgRobot' + xCur + yCur;
        var imgCurBlankId = '#imgBlank' + xCur + yCur;

        $(imgCurId)[0].style.display = 'none';
        $(imgCurBlankId)[0].style.display = 'block';

        var imgId = '#imgRobot' + x + y;
        var imgBlankId = '#imgBlank' + x + y;

        $(imgId)[0].style.display = 'block';
        $(imgBlankId)[0].style.display = 'none';
    }
}

function ProcessLeft() {
    var x = $('#divX')[0].innerText;
    var y = $('#divY')[0].innerText;
    var ddlF = $('#ddlFace')[0].value;
    //N-1 E-2 S-3 W-4
    if (ddlF == 1) {//North
        $('#ddlFace')[0].value = 4;
    }
    else if (ddlF == 2) {//East
        $('#ddlFace')[0].value = 1;
    }
    else if (ddlF == 3) {//South
        $('#ddlFace')[0].value = 2;
    }
    else if (ddlF == 4) {//West
        $('#ddlFace')[0].value = 3;
    }
    $('#divF')[0].innerText = $('#ddlFace')[0].value;
    $('#XId')[0].value = x;
    $('#YId')[0].value = y;
}


function ProcessRight() {
    //N-1 E-2 S-3 W-4
    var x = $('#divX')[0].innerText;
    var y = $('#divY')[0].innerText;
    var ddlF = $('#ddlFace')[0].value;

    if (ddlF == 1) {//North
        $('#ddlFace')[0].value = 2;
    }
    else if (ddlF == 2) {//East
        $('#ddlFace')[0].value = 3;
    }
    else if (ddlF == 3) {//South
        $('#ddlFace')[0].value = 4;
    }
    else if (ddlF == 4) {//West
        $('#ddlFace')[0].value = 1;
    }
    $('#divF')[0].innerText = $('#ddlFace')[0].value;
    $('#XId')[0].value = x;
    $('#YId')[0].value = y;
}


function FaceChange() {
    var ddlF = $('#ddlFace')[0].value;
    var ddlCur = $('#divF')[0].innerText;

}


function ProcessMove() {
    //N-1 E-2 S-3 W-4
    var x =parseInt($('#divX')[0].innerText);
    var y = parseInt($('#divY')[0].innerText);
    var xCur = parseInt($('#divX')[0].innerText);
    var yCur = parseInt($('#divY')[0].innerText);
    var ddlF =parseInt($('#ddlFace')[0].value);
    
    if ((y == 1 && x==1) && (ddlF == 1 || ddlF==4))//North , West
    {
        alert('Can Not move to North & West (X,Y) :(' + x + ',' + y + ') ,May Fall from Table');
        return;
    }
    else if ((y == 1 && x==5)&& (ddlF == 4 || ddlF==3))//West , South
    {
        alert('Can Not move to West & South (X,Y) :(' + x + ',' + y + ') ,May Fall from Table'); return;
    }
        //Moving to North => Move (-X-Axis)
    if (ddlF == 1) {
        if (x == 1) {
            alert('Can Not move to North (X,Y) :(' + x + ',' + y + ') ,May Fall from Table'); return;
        }
        else if (x > 1) {
            x = x- 1;
        }
    }
        //Moving to East => Move (+y-Axis)
    else if (ddlF == 2) {
        if (y==5) {
            alert('Can Not move to East (X,Y) :(' + x + ',' + y + ') ,May Fall from Table'); return;
        }
        else if (y < 5) {
            y = y + 1;
        }
    }

    if (ddlF == 3)//South => Move (+X-Axis)
    {
        if (x == 5) {
            alert('Can Not move to South (X,Y) :(' + x + ',' + y + ') ,May Fall from Table'); return;
        }
        else if (x < 5) {
            x = x + 1; 
        }
    }
    if (ddlF == 4)//West => Move (-y-Axis)
    {
        if (y == 1) {
            alert('Can Not move to West (X,Y) :(' + x + ',' + y + ') ,May Fall from Table'); return;
        }
        else if (y <= 5) {
            y = y - 1;
        }
    }
    $('#divX')[0].innerText = x;
    $('#divY')[0].innerText = y;
    $('#XId')[0].value = x;
    $('#YId')[0].value = y;
    if (!(x == xCur && y == yCur)) {
        var imgCurId = '#imgRobot' + xCur + yCur;
        var imgCurBlankId = '#imgBlank' + xCur + yCur;

        $(imgCurId)[0].style.display = 'none';
        $(imgCurBlankId)[0].style.display = 'block';

        var imgId = '#imgRobot' + x + y;
        var imgBlankId = '#imgBlank' + x + y;

        $(imgId)[0].style.display = 'block';
        $(imgBlankId)[0].style.display = 'none';
    } 
}































