export const getFormattedDate = (date) => {
        if(date) {
            console.log(date)
        }
    let newDate = new Date(date);
    return newDate.toLocaleString();
}