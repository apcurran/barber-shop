const options = {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    year: "numeric"
};

function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default formatDate;