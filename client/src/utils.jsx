const getData = () => {
    const userlogin = localStorage.getItem("user");
    return JSON.parse(userlogin);
}

export {getData};