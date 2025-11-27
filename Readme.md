### Homework #8

1. Розпакування об’єкта (object destructuring)
   Завдання:
   Є об’єкт:
   const user = {
   name:"Alex",
   age: 25,
   city: "Kyiv",
   job: "Frontend"
   };
   Виконайте без методів:
   Створіть окремі змінні name, age, city, job через деструктуризацію.
   Створіть новий об’єкт shortInfo, який містить лише name і city.
   Створіть новий об’єкт renamed, у якому ключі будуть перейменовані:
   name → fullName
   city → location


2. Створення нового масиву вручну
   Завдання: 
   Є:
   const a = [1, 2, 3];
   const b = [4, 5];
   Сформуйте масив c без методів і без циклів, який виглядає так:
   [1, 2, 3, 4, 5]
   Можна тільки:
   доступ до індексів,
   написати руками: const c = [a[0], a[1], ...].


3. Робота з масивом об’єктів (тільки доступ за індексом)

   Завдання: 
   Є масив:
   const people = [
   { name: "Anna", age: 22 },
   { name: "Oleg", age: 31 },
   { name: "Maria", age: 27 }
   ];

   Створіть змінну firstPersonName → ім'я першої людини.
   Створіть змінну oldest, у яку запишіть об’єкт найстаршої людини (порівняйте people[0].age, people[1].age, people[2].age).
   Створіть об’єкт 
   ageSummary
   {total: people[0].age + people[1].age + people[2].age,
   average: (same sum) / 3
   }


4. Модель "кошика товарів" (без push, без циклів)
   Завдання: Є:
   const cart = [
   { title:"Book", price: 200, qty: 2 },
   { title: "Laptop", price: 30000, qty: 1 }
   ];
   - Створіть змінну totalPrice, де порахуйте суму: cart[0].price * cart[0].qty + cart[1].price * cart[1].qty
   - Додайте третій товар у новий масив updatedCart (тільки вручну), наприклад:
   { title: "Pen", price: 20, qty: 5 }
   - Створіть змінну itemNames, де у вигляді рядка: "Book, Laptop, Pen" (самостійно об’єднайте: cart[0].title + ", " + cart[1].title + ...)