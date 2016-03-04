var test_data = {
	date_created: "11.11.2015",
	tour_ref: "ABC-001",
	tour_name: "Test Tour",
	ticket_class: 1,
	assignee: "Ivan Ivanov",

	passengers: [
		{
			first_name: "John",
			middle_name: "X",
			last_name: "Doe",
			gender: "m",
			passport_number: "2106803",
			nationality: "english",
			dob: "12.01.1988",
			pob: "London"
		},
		{
			first_name: "Vicky",
			middle_name: "E",
			last_name: "Woods",
			gender: "f",
			passport_number: "127001",
			nationality: "usa",
			dob: "26.05.1986",
			pob: "Washington, DC"
		},
		{
			first_name: "Mei",
			middle_name: "G",
			last_name: "Aoyama",
			gender: "f",
			passport_number: "098776",
			nationality: "japanese",
			dob: "05.03.1984",
			pob: "Tokyo"
		}
	],

	inbound: {
		operator: "Test Airlines",
		num: "2106803",
		from: "London",
		f_time: "12:00",
		arrives: "Moscow",
		a_time: "18:00"
	},
	outbound: {
		operator: "China Test Airlines",
		num: "127001",
		from: "Ulan-Ude",
		f_time: "12:00",
		arrives: "Beijing",
		a_time: "18:00"
	},

	activities: [
		{
			datetime: "01.01.16 13:10",
			city: "Moscow",
			content: "Test activity 01",
			notes: "Test activity 01 notes",
			meet: "Meet point 01",
			accomm: "Accomm 01"
		},
		{
			datetime: "01.01.16 15:10",
			city: "Moscow",
			content: "Test activity 02",
			notes: "Test activity 02 notes",
			meet: "Meet point 02",
			accomm: "Accomm 02"
		},
		{
			datetime: "01.01.16 17:10",
			city: "Moscow",
			content: "Test activity 03",
			notes: "Test activity 03 notes",
			meet: "Meet point 03",
			accomm: "Accomm 03"
		},
		{
			datetime: "01.01.16 19:10",
			city: "Moscow",
			content: "Test activity 04",
			notes: "Test activity 04 notes",
			meet: "Meet point 04",
			accomm: "Accomm 04"
		},
	],
	service: "I wanna rock! :)",
	notes: "Notes for this tour",

	history: [
		{
			date: "12.11.2015",
			subj: "Assignee",
			change: "change",
			old_data: {
				assignee: "Petr Petrov"
			},
			new_data: {
				assignee: "Ivan Ivanov"
			}
		},
	]
};