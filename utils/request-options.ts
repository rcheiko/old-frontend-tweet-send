export const requestGet = () => {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    }
}

export const requestPost = (body:any) => {
    return {
        body: body,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    }
}