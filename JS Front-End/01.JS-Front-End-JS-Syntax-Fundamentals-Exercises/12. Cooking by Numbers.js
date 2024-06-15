function solve(s1,s2,s3,s4,s5,s6) {
    let num=Number(s1);
    let commands=[s2,s3,s4,s5,s6];
    for(let i=0;i<commands.length;i++){
        if (commands[i]==='chop') {
            num/=2;
        } else if(commands[i]==='dice'){
            num=Math.sqrt(num);
        }else if(commands[i]==='spice'){
            num+=1;
        }else if(commands[i]==='bake'){
            num*=3;
        }else if(commands[i]==='fillet'){
            num*=0.8;
        }
        console.log(num)
    }
    
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

