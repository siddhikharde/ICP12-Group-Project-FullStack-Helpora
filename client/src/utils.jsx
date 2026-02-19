const getData = () => {
    const userlogin = localStorage.getItem("user");
     if (!userlogin || userlogin === "undefined") return null;
    try {
        return JSON.parse(userlogin);
    } catch (e) {
        console.error("Failed to parse user from localStorage:", e);
        return null;
    }
}

export {getData};