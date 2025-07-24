function fetchUserData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Shio", url: "https://in.pinterest.com/"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        //await can only be used with ASYNC keyword 
        console.log("User data fetching success!"); //we can add things we want website to do while waiting for response 
        console.log("User data: ", userData);
        
    } catch (error) {
        console.log("Sorry, error fetching data...", error);
    }
}

getUserData(); 