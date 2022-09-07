Module.register("monthcalendar", {
	textData: "",

	getScripts: function () {
		return ["moment.js", "moment-timezone.js", "suncalc.js"];
	},

	start: function () {
		setInterval(() => {
			this.updateDom();
		}, 1000 * 60);
	},

	// getDom: function () {
	// 	return this.createCalendarDom();
	// },

	getTemplate: function () {
		return "template.njk";
	},

	getTemplateData: function () {
		return {
			text: "First template in magic mirror"
		};
	},

	createCalendarDom: function () {
		console.log("creating dom....");
		const calendarBackround = document.createElement("div");
		calendarBackround.classList.add("calendar-background");

		let dayOfWeek = ``;
		let date = new Date();
		const goBackBy = date.getDay() === 0 ? 7 : date.getDay() + 7;
		date.setDate(date.getDate() - goBackBy);

		for (let i = 0; i < 5; i++) {
			dayOfWeek += `<div class="day-of-week">`;
			let dayHTML = ``;
			for (let j = 0; j < 7; j++) {
				let isToday = false;
				let monthType = "";
				const today = new Date();
				if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
					isToday = true;
				}
				if (date.getMonth() === today.getMonth()) {
					monthType = "current-month";
				} else if (date.getMonth() > today.getMonth()) {
					monthType = "next-month";
				} else {
					monthType = "prev-month";
				}
				dayHTML += `
        <div class="day ${isToday ? "today" : ""} ${monthType}">
          <div class="date">${moment(date).format("DD")}</div>
          <div class="month">${moment(date).format("MMMM")}</div>
        </div>`;
				date.setDate(date.getDate() + 1);
			}
			dayOfWeek += `${dayHTML} </div>`;
		}

		let dayNames = ``;
		let today = new Date();
		["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach((dayName, index) => {
			let isToday = "";
			if (today.getDay() === index) {
				isToday = "today";
			}
			dayNames += `<div class="day-header ${isToday}">${dayName}</div>`;
		});

		let html = `
    <div class="calendar-container">
      <div class="calendar-header">
        ${dayNames}
      </div>
      <div class="days-container">
        ${dayOfWeek}
      </div>
    </div>`;

		calendarBackround.innerHTML = html;

		return calendarBackround;
	},

	getStyles: function () {
		return ["monthcalendar.css"];
	}
});
