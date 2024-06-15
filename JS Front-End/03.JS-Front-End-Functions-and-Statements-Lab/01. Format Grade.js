function solve(grade) {
    let fixedGrade='';
    if (grade<3.00) {
        fixedGrade=`Fail (2)`;
    } else if(grade<3.50){
        fixedGrade=`Poor (${grade.toFixed(2)})`;
    }else if(grade<4.50){
        fixedGrade=`Good (${grade.toFixed(2)})`;
    }else if(grade<5.50){
        fixedGrade=`Very good (${grade.toFixed(2)})`;
    }else if(grade>-5.50){
        fixedGrade=`Excellent (${grade.toFixed(2)})`;
    }
    console.log(fixedGrade);
}
solve(4)