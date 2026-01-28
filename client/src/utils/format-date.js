const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
});

function formatDate(dateISO) {
    const dateObj = new Date(dateISO);

    return dateFormatter.format(dateObj);
}

export { formatDate };
