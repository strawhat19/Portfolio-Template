const lastUpdated = $(`.lastUpdated`);
lastUpdated.html(`${dayjs().$M + 1} - ${dayjs().$D} - ${dayjs().$y}`);