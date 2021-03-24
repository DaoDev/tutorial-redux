export const addNewHobby = (hobby) => {
    return {
        type: "ADD_HOBBY",
        payload: hobby
    }
}

export const setActiveHobby = (hobby) => {
    return {
        type: "SET_ACTIVE_HOBBY",
        payload: hobby
    }
}

// payload: du lieu tải len khi call action 