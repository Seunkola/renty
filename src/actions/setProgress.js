const setProgress = (payload) => {
    return {
        type: 'progressChange',
        payload
    }
}

export default setProgress;