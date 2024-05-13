const ctx = document.getElementById("barChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Mon", "Tues", "Wed", "Thur", "Fri"],
        datasets: [
        {
            label: "Hours Activity",
            data: [5, 7, 4, 10, 7],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            backgroundColor: [
                "#023611",
                "#023611",
                "#023611",
                "green",
                "#023611",
            ],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 20,
            barThickness: 10,

        },
        ],
    },
    options: {
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    },
});
