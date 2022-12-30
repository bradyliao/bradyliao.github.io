$(function() {
    // call the tablesorter plugin
    $("#table_course").tablesorter({theme: 'blue', widthFixed: true, widgets: ["zebra", "columns"]});
});



function checkbox_all(source)
{
    var checkboxes = document.getElementsByClassName(source.className);
    for(var i=0, n=checkboxes.length; i<n ;i++)
    {
        checkboxes[i].checked = source.checked;
    }
}
        
function uncheck_all_option(source)
{
    if(source.checked == false)
        document.getElementById(source.name).checked = false;
    else
    {
        var checkboxes = document.getElementsByName(source.name);
        var i;
        for(i=0, n=checkboxes.length; i<n ;i++)
        {
            if(checkboxes[i].checked == false)
                break;
        }
        if(i == n)
            document.getElementById(source.name).checked = true;
    }
}





// function Search_Filter() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("Search_Filter_input");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table_course");
//     tr = table.getElementsByClassName("course");
//     for (i = 0; i < tr.length; i++)
//     {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td)
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1)
//                 tr[i].style.display = "";
//             else 
//                 tr[i].style.display = "none";
//     }
// }





// function filter_department() {
//     var input, filter, table, row, department_cell, i, department_cell_value;
//     filter = document.getElementById("select_department").value;
//     table = document.getElementById("table_course");
//     row = table.getElementsByClassName("course");
//     for (i = 0; i < row.length; i++)
//     {
//         department_cell = row[i].getElementsByClassName("department")[0];
//         if (department_cell)
//             department_cell_value = department_cell.textContent || department_cell.innerText;
//             if(department_cell_value.toUpperCase().indexOf(filter.toUpperCase()) > -1)
//                 row[i].style.display = "";
//             else 
//                 row[i].style.display = "none";
//     }
// }





function search_table() {
    var table, row ;
    table = document.getElementById("table_course");
    row = table.getElementsByClassName("course");
    
    var department_filter, gen_cat_filter, uilding_filter, language_filter, extra_enrollment_filter, instructor_filter;
    department_filter = document.getElementById("select_department").value;
    gen_cat_filter = document.getElementById("select_gen_cat").value;
    // building_filter = document.getElementById("select_building").value;
    language_filter = document.getElementById("select_language").value;
    extra_enrollment_filter = document.getElementById("select_extra_enrollment").value;
    instructor_filter = document.getElementById("search_instructor_input").value;
    
    var department_cell, gen_cat_cell, building_cell, language_cell, extra_enrollment_cell, instructor_cell;
    var department_cell_value, gen_cat_cell_value, building_cell_value, language_cell_value, extra_enrollment_cell_value, instructor_cell_value;
    var i ;
    
    for (i = 0; i < row.length; i++)
    {
        department_cell = row[i].getElementsByClassName("department")[0];
        gen_cat_cell = row[i].getElementsByClassName("gen_cat")[0];
        // building_cell = row[i].getElementsByClassName("building")[0];
        language_cell = row[i].getElementsByClassName("language")[0];
        extra_enrollment_cell = row[i].getElementsByClassName("extra_enrollment")[0];
        instructor_cell = row[i].getElementsByClassName("instructor")[0];
        
        M1_cell = row[i].getElementsByClassName("M1")[0];
        M2_cell = row[i].getElementsByClassName("M2")[0];
        M3_cell = row[i].getElementsByClassName("M3")[0];
        M4_cell = row[i].getElementsByClassName("M4")[0];
        M5_cell = row[i].getElementsByClassName("M5")[0];
        M6_cell = row[i].getElementsByClassName("M6")[0];
        M7_cell = row[i].getElementsByClassName("M7")[0];
        M8_cell = row[i].getElementsByClassName("M8")[0];
        M9_cell = row[i].getElementsByClassName("M9")[0];
        Ma_cell = row[i].getElementsByClassName("Ma")[0];
        Mb_cell = row[i].getElementsByClassName("Mb")[0];
        Mc_cell = row[i].getElementsByClassName("Mc")[0];
        
        T1_cell = row[i].getElementsByClassName("T1")[0];
        T2_cell = row[i].getElementsByClassName("T2")[0];
        T3_cell = row[i].getElementsByClassName("T3")[0];
        T4_cell = row[i].getElementsByClassName("T4")[0];
        T5_cell = row[i].getElementsByClassName("T5")[0];
        T6_cell = row[i].getElementsByClassName("T6")[0];
        T7_cell = row[i].getElementsByClassName("T7")[0];
        T8_cell = row[i].getElementsByClassName("T8")[0];
        T9_cell = row[i].getElementsByClassName("T9")[0];
        Ta_cell = row[i].getElementsByClassName("Ta")[0];
        Tb_cell = row[i].getElementsByClassName("Tb")[0];
        Tc_cell = row[i].getElementsByClassName("Tc")[0];
        
        W1_cell = row[i].getElementsByClassName("W1")[0];
        W2_cell = row[i].getElementsByClassName("W2")[0];
        W3_cell = row[i].getElementsByClassName("W3")[0];
        W4_cell = row[i].getElementsByClassName("W4")[0];
        W5_cell = row[i].getElementsByClassName("W5")[0];
        W6_cell = row[i].getElementsByClassName("W6")[0];
        W7_cell = row[i].getElementsByClassName("W7")[0];
        W8_cell = row[i].getElementsByClassName("W8")[0];
        W9_cell = row[i].getElementsByClassName("W9")[0];
        Wa_cell = row[i].getElementsByClassName("Wa")[0];
        Wb_cell = row[i].getElementsByClassName("Wb")[0];
        Wc_cell = row[i].getElementsByClassName("Wc")[0];
        
        R1_cell = row[i].getElementsByClassName("R1")[0];
        R2_cell = row[i].getElementsByClassName("R2")[0];
        R3_cell = row[i].getElementsByClassName("R3")[0];
        R4_cell = row[i].getElementsByClassName("R4")[0];
        R5_cell = row[i].getElementsByClassName("R5")[0];
        R6_cell = row[i].getElementsByClassName("R6")[0];
        R7_cell = row[i].getElementsByClassName("R7")[0];
        R8_cell = row[i].getElementsByClassName("R8")[0];
        R9_cell = row[i].getElementsByClassName("R9")[0];
        Ra_cell = row[i].getElementsByClassName("Ra")[0];
        Rb_cell = row[i].getElementsByClassName("Rb")[0];
        Rc_cell = row[i].getElementsByClassName("Rc")[0];
        
        F1_cell = row[i].getElementsByClassName("F1")[0];
        F2_cell = row[i].getElementsByClassName("F2")[0];
        F3_cell = row[i].getElementsByClassName("F3")[0];
        F4_cell = row[i].getElementsByClassName("F4")[0];
        F5_cell = row[i].getElementsByClassName("F5")[0];
        F6_cell = row[i].getElementsByClassName("F6")[0];
        F7_cell = row[i].getElementsByClassName("F7")[0];
        F8_cell = row[i].getElementsByClassName("F8")[0];
        F9_cell = row[i].getElementsByClassName("F9")[0];
        Fa_cell = row[i].getElementsByClassName("Fa")[0];
        Fb_cell = row[i].getElementsByClassName("Fb")[0];
        Fc_cell = row[i].getElementsByClassName("Fc")[0];
        
        S1_cell = row[i].getElementsByClassName("S1")[0];
        S2_cell = row[i].getElementsByClassName("S2")[0];
        S3_cell = row[i].getElementsByClassName("S3")[0];
        S4_cell = row[i].getElementsByClassName("S4")[0];
        S5_cell = row[i].getElementsByClassName("S5")[0];
        S6_cell = row[i].getElementsByClassName("S6")[0];
        S7_cell = row[i].getElementsByClassName("S7")[0];
        S8_cell = row[i].getElementsByClassName("S8")[0];
        S9_cell = row[i].getElementsByClassName("S9")[0];
        Sa_cell = row[i].getElementsByClassName("Sa")[0];
        Sb_cell = row[i].getElementsByClassName("Sb")[0];
        Sc_cell = row[i].getElementsByClassName("Sc")[0];
        
        
        department_cell_value = department_cell.textContent || department_cell.innerText;
        gen_cat_cell_value = gen_cat_cell.textContent || gen_cat_cell.innerText;
        // building_cell_value = building_cell.textContent || building_cell.innerText;
        language_cell_value = language_cell.textContent || language_cell.innerText;
        extra_enrollment_cell_value = extra_enrollment_cell.textContent || extra_enrollment_cell.innerText;
        instructor_cell_value = instructor_cell.textContent || instructor_cell.innerText;
        
        M1_cell_value = M1_cell.textContent || M1_cell.innerText;
        M2_cell_value = M2_cell.textContent || M2_cell.innerText;
        M3_cell_value = M3_cell.textContent || M3_cell.innerText;
        M4_cell_value = M4_cell.textContent || M4_cell.innerText;
        M5_cell_value = M5_cell.textContent || M5_cell.innerText;
        M6_cell_value = M6_cell.textContent || M6_cell.innerText;
        M7_cell_value = M7_cell.textContent || M7_cell.innerText;
        M8_cell_value = M8_cell.textContent || M8_cell.innerText;
        M9_cell_value = M9_cell.textContent || M9_cell.innerText;
        Ma_cell_value = Ma_cell.textContent || Ma_cell.innerText;
        Mb_cell_value = Mb_cell.textContent || Mb_cell.innerText;
        Mc_cell_value = Mc_cell.textContent || Mc_cell.innerText;
        
        T1_cell_value = T1_cell.textContent || T1_cell.innerText;
        T2_cell_value = T2_cell.textContent || T2_cell.innerText;
        T3_cell_value = T3_cell.textContent || T3_cell.innerText;
        T4_cell_value = T4_cell.textContent || T4_cell.innerText;
        T5_cell_value = T5_cell.textContent || T5_cell.innerText;
        T6_cell_value = T6_cell.textContent || T6_cell.innerText;
        T7_cell_value = T7_cell.textContent || T7_cell.innerText;
        T8_cell_value = T8_cell.textContent || T8_cell.innerText;
        T9_cell_value = T9_cell.textContent || T9_cell.innerText;
        Ta_cell_value = Ta_cell.textContent || Ta_cell.innerText;
        Tb_cell_value = Tb_cell.textContent || Tb_cell.innerText;
        Tc_cell_value = Tc_cell.textContent || Tc_cell.innerText;
        
        W1_cell_value = W1_cell.textContent || W1_cell.innerText;
        W2_cell_value = W2_cell.textContent || W2_cell.innerText;
        W3_cell_value = W3_cell.textContent || W3_cell.innerText;
        W4_cell_value = W4_cell.textContent || W4_cell.innerText;
        W5_cell_value = W5_cell.textContent || W5_cell.innerText;
        W6_cell_value = W6_cell.textContent || W6_cell.innerText;
        W7_cell_value = W7_cell.textContent || W7_cell.innerText;
        W8_cell_value = W8_cell.textContent || W8_cell.innerText;
        W9_cell_value = W9_cell.textContent || W9_cell.innerText;
        Wa_cell_value = Wa_cell.textContent || Wa_cell.innerText;
        Wb_cell_value = Wb_cell.textContent || Wb_cell.innerText;
        Wc_cell_value = Wc_cell.textContent || Wc_cell.innerText;
        
        R1_cell_value = R1_cell.textContent || R1_cell.innerText;
        R2_cell_value = R2_cell.textContent || R2_cell.innerText;
        R3_cell_value = R3_cell.textContent || R3_cell.innerText;
        R4_cell_value = R4_cell.textContent || R4_cell.innerText;
        R5_cell_value = R5_cell.textContent || R5_cell.innerText;
        R6_cell_value = R6_cell.textContent || R6_cell.innerText;
        R7_cell_value = R7_cell.textContent || R7_cell.innerText;
        R8_cell_value = R8_cell.textContent || R8_cell.innerText;
        R9_cell_value = R9_cell.textContent || R9_cell.innerText;
        Ra_cell_value = Ra_cell.textContent || Ra_cell.innerText;
        Rb_cell_value = Rb_cell.textContent || Rb_cell.innerText;
        Rc_cell_value = Rc_cell.textContent || Rc_cell.innerText;
        
        F1_cell_value = F1_cell.textContent || F1_cell.innerText;
        F2_cell_value = F2_cell.textContent || F2_cell.innerText;
        F3_cell_value = F3_cell.textContent || F3_cell.innerText;
        F4_cell_value = F4_cell.textContent || F4_cell.innerText;
        F5_cell_value = F5_cell.textContent || F5_cell.innerText;
        F6_cell_value = F6_cell.textContent || F6_cell.innerText;
        F7_cell_value = F7_cell.textContent || F7_cell.innerText;
        F8_cell_value = F8_cell.textContent || F8_cell.innerText;
        F9_cell_value = F9_cell.textContent || F9_cell.innerText;
        Fa_cell_value = Fa_cell.textContent || Fa_cell.innerText;
        Fb_cell_value = Fb_cell.textContent || Fb_cell.innerText;
        Fc_cell_value = Fc_cell.textContent || Fc_cell.innerText;
        
        S1_cell_value = S1_cell.textContent || S1_cell.innerText;
        S2_cell_value = S2_cell.textContent || S2_cell.innerText;
        S3_cell_value = S3_cell.textContent || S3_cell.innerText;
        S4_cell_value = S4_cell.textContent || S4_cell.innerText;
        S5_cell_value = S5_cell.textContent || S5_cell.innerText;
        S6_cell_value = S6_cell.textContent || S6_cell.innerText;
        S7_cell_value = S7_cell.textContent || S7_cell.innerText;
        S8_cell_value = S8_cell.textContent || S8_cell.innerText;
        S9_cell_value = S9_cell.textContent || S9_cell.innerText;
        Sa_cell_value = Sa_cell.textContent || Sa_cell.innerText;
        Sb_cell_value = Sb_cell.textContent || Sb_cell.innerText;
        Sc_cell_value = Sc_cell.textContent || Sc_cell.innerText;
        
        
        // building_cell_value.toUpperCase().indexOf(building_filter.toUpperCase()) > -1 && 

        
        if(
            ( department_filter == "" || department_cell_value == department_filter ) && 
            ( gen_cat_filter == "" || gen_cat_cell_value == gen_cat_filter ) &&
            ( language_filter == ""|| language_cell_value == language_filter ) && 
            ( extra_enrollment_filter == "" || extra_enrollment_cell_value == extra_enrollment_filter ) &&
            ( instructor_cell_value.toUpperCase().indexOf(instructor_filter.toUpperCase()) > -1 ) &&
            !( document.getElementById("CheckboxM1").checked == false && M1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM2").checked == false && M2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM3").checked == false && M3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM4").checked == false && M4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM5").checked == false && M5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM6").checked == false && M6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM7").checked == false && M7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM8").checked == false && M8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxM9").checked == false && M9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxMa").checked == false && Ma_cell_value == "O" ) &&
            !( document.getElementById("CheckboxMb").checked == false && Mb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxMc").checked == false && Mc_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT1").checked == false && T1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT2").checked == false && T2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT3").checked == false && T3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT4").checked == false && T4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT5").checked == false && T5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT6").checked == false && T6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT7").checked == false && T7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT8").checked == false && T8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxT9").checked == false && T9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxTa").checked == false && Ta_cell_value == "O" ) &&
            !( document.getElementById("CheckboxTb").checked == false && Tb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxTc").checked == false && Tc_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW1").checked == false && W1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW2").checked == false && W2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW3").checked == false && W3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW4").checked == false && W4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW5").checked == false && W5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW6").checked == false && W6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW7").checked == false && W7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW8").checked == false && W8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxW9").checked == false && W9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxWa").checked == false && Wa_cell_value == "O" ) &&
            !( document.getElementById("CheckboxWb").checked == false && Wb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxWc").checked == false && Wc_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR1").checked == false && R1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR2").checked == false && R2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR3").checked == false && R3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR4").checked == false && R4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR5").checked == false && R5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR6").checked == false && R6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR7").checked == false && R7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR8").checked == false && R8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxR9").checked == false && R9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxRa").checked == false && Ra_cell_value == "O" ) &&
            !( document.getElementById("CheckboxRb").checked == false && Rb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxRc").checked == false && Rc_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF1").checked == false && F1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF2").checked == false && F2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF3").checked == false && F3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF4").checked == false && F4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF5").checked == false && F5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF6").checked == false && F6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF7").checked == false && F7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF8").checked == false && F8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxF9").checked == false && F9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxFa").checked == false && Fa_cell_value == "O" ) &&
            !( document.getElementById("CheckboxFb").checked == false && Fb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxFc").checked == false && Fc_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS1").checked == false && S1_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS2").checked == false && S2_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS3").checked == false && S3_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS4").checked == false && S4_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS5").checked == false && S5_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS6").checked == false && S6_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS7").checked == false && S7_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS8").checked == false && S8_cell_value == "O" ) &&
            !( document.getElementById("CheckboxS9").checked == false && S9_cell_value == "O" ) &&
            !( document.getElementById("CheckboxSa").checked == false && Sa_cell_value == "O" ) &&
            !( document.getElementById("CheckboxSb").checked == false && Sb_cell_value == "O" ) &&
            !( document.getElementById("CheckboxSc").checked == false && Sc_cell_value == "O" )
          )
            row[i].style.display = "table-row";
        else 
            row[i].style.display = "none";
    }
}