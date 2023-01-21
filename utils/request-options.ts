export const requestGet = () => {
    // const jwt = localStorage.getItem("jwt");
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": "Bearer " + jwt,
        },
    }
}

export const requestPost = (body:any) => {
    // const jwt = localStorage.getItem("jwt");
    return {
        body: body,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": "Bearer " + jwt,
        },
    }
}