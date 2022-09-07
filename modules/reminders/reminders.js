Module.register("reminders", {
	start: function () {
		setInterval(() => {
			this.remindersData = null;
			this.updateDom();
		}, 1000 * 60);
	},

	getDom: function () {
		return this.createRemindersDom();
	},

	createRemindersDom: function () {
		console.log("creating dom....");
		const reminderBackground = document.createElement("div");

		if (this.remindersData) {
			let html = `<div class="todo-list">`;

			this.remindersData.forEach((data) => {
				html += `<div class="task-item">${data} </div>`;
			});

			html += `</div>`;
			reminderBackground.innerHTML = html;
		} else {
			const path = this.config.path;
			fetch(path)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					this.remindersData = data;
					this.updateDom();
				});
		}
		return reminderBackground;
	},

	getStyles: function () {
		return ["reminders.css"];
	}
});
