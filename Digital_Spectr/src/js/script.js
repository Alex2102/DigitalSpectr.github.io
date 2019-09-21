		var checkForm = function(form) {
			var name = form.name.value;
			var phone = form.phone.value;
			var nameReg = name.match(/^[А-Яа-я-" "]*$/);
			var phoneReg = phone.match(/^[0-9-+" "]*$/);
			if (!nameReg) {
				alert("Имя введено неверно. Используйте русские буквы, пробелы, тире");
				return false;
			}
				if (!phoneReg) {
					alert("Телефон введен неверно. Используйте цифры, '-', пробелы '+'");
					return false;
				}
				return true;
			}
		
		