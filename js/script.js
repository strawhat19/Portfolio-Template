const years = $(`.year`);
const lastUpdated = $(`.lastUpdated`);
lastUpdated.html(`${dayjs().$M + 1} - ${dayjs().$D} - ${dayjs().$y}`);
years.each((index, element) => {
    $(element).html(dayjs().$y);
});