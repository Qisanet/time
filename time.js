
function getCurrentTime() {
    let now = new Date(); 

    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds(); 
    
    
    let ampm = hours >= 12 ? 'PM' : 'AM';

    
    hours = hours % 12; 
    hours = hours ? hours : 12;  
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    
    let currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    
    return currentTime;
}   


console.log(getCurrentTime());

console.log(getCurrentTime());


var str = "javascript";


console.log(str.slice(1, -1));  
