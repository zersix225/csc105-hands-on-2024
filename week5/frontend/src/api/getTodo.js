const getTodoAPI = async () => {
    try {
        const response = await Axios.get<getTodoResponse>('/todo');
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
            msg: 'AXIOS ERROR',
        };
    }
};