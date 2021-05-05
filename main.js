let i = 0;
class Book {
	constructor(name, author, type) {
		this.name = name;
		this.author = author;
		this.type = type;
	}
}
class Display {
	add(book) {
		let tableBody = document.getElementById("tableBody");
		let string = `  <tr>
                                                <td>${i}</td>
                                                <td>${book.name}</td>
                                                <td>${book.author}</td>
                                                <td>${book.type}</td>
                                        </tr>`;
		tableBody.innerHTML += string;
	}
	clear() {
		let liberaryForm = document.getElementById("liberaryForm");
		liberaryForm.reset();
	}
	validate(book) {
		if (book.name.length < 3 || book.author.length < 3) {
			return false;
		} else {
			return true;
		}
	}
	show(type, msg) {
		let message = document.getElementById("message");
		message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                                                        <strong>Message:</strong> ${msg}
                                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                        </div>  `;
		setTimeout(() => {
			message.innerHTML = "";
		}, 2000);
	}
}

let liberaryForm = document.getElementById("liberaryForm");
liberaryForm.addEventListener("submit", liberaryFormSubmit);

function liberaryFormSubmit(e) {
	e.preventDefault();

	let name = document.getElementById("bookName").value;
	let author = document.getElementById("author").value;

	let type;
	let fiction = document.getElementById("fiction");
	let programming = document.getElementById("programming");
	let cooking = document.getElementById("cooking");

	if (fiction.checked) {
		type = fiction.value;
	} else if (programming.checked) {
		type = programming.value;
	} else if (cooking.checked) {
		type = cooking.value;
	}

	let book = new Book(name, author, type);
	let display = new Display();
	if (display.validate(book)) {
		i++;
		display.add(book);
		display.clear();
		display.show("success", "Your book has been added!");
	} else {
		display.show("danger", `You can't add this book`);
	}
}
