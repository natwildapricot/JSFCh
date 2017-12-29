var FirstWord = ["Безумие", "Храбрость", "Отвага", "Недобросовестность", "Нравоучение", "Равнодушие"]//Генератор цитат
var SecondWord = ["результат", "ошибка", "стезя", "крест", "характеристика", "метка"]
var ThirdWord = ["зелёного", "бесчисленного", "молочного", "охлаждённого", "загадочного", "моллекулярного"]
var ForthWord = ["перечисления", "митинга", "агрегирования", "препарирования", "зондирования", "виляния"]
var Fraze = FirstWord[Math.floor(Math.random() * (FirstWord.length - 1))] + " - это " + SecondWord[Math.floor(Math.random() * (SecondWord.length - 1))] + " " + ThirdWord[Math.floor(Math.random() * (ThirdWord.length - 1))] + " " + ForthWord[Math.floor(Math.random() * (ForthWord.length - 1))]
Fraze
Console.log(Fraze)