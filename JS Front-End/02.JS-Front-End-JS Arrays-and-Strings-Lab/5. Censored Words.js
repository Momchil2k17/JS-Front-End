function solve(sent,filter){
    const pattern=new RegExp(filter,'g');
    const res=sent.replace(pattern,'*'.repeat(filter.length));
    console.log(res);
}
solve('A small sentence small with some words', 'small')