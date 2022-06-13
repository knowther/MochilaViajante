

function getUser(userName){
    const endpoint = `https://api.github.com/users/${userName}`;
    await fetch (endpoint)
}