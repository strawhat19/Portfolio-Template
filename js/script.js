const years = $(`.year`);
const lastUpdated = $(`.lastUpdated`);

lastUpdated.html(`${dayjs().$M + 1} - ${dayjs().$D} - ${dayjs().$y}`);
years.each((yearIndex, yearElement) => {
    $(yearElement).html(dayjs().$y);
});