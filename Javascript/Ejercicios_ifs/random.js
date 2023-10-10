function cara_cruz() {
    let random = Math.round(Math.random());
    
    if (random == 0) {
        console.log("Cara\n");
    }
    else if (random == 1) {
        console.log("Cruz\n");
    }
}

cara_cruz();