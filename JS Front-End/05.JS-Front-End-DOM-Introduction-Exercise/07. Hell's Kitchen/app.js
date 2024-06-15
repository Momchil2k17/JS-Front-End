function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = document.querySelector('#inputs textarea').value;
      const bestRestaurantParagraph = document.querySelector('#outputs #bestRestaurant p');
      const bestWorkersParagraph = document.querySelector('#outputs #workers p');

      const restaurantArray = input.split(`"`).filter(x => x.includes("-"));

      const restaurants = [];

      for (const restaurant of restaurantArray) {
         const [Name, workersInput] = restaurant.split(" - ");
         const workers = [];
         for (const worker of workersInput.split(", ")) {
            const [name, salary] = worker.split(" ");

            workers.push({ name, salary: Number(salary) });
         }
         if (restaurants.some(restaurant => restaurant.Name === Name)) {
            let currentRestaurant = restaurants.find(restourant => restourant.Name === Name)
            for (const worker of workers) {
               currentRestaurant.workers.push(worker)
            }
         } else {
            restaurants.push({ Name, workers })
         }
      }

      let bestRestaurantName = "";
      let bestAverageSalary = Number.MIN_SAFE_INTEGER;

      for (const restaurant of restaurants) {
         let sallaryAverage = restaurant.workers.reduce((total, next) => total + next.salary, 0) / restaurant.workers.length;
         if (sallaryAverage > bestAverageSalary) {
            bestRestaurantName = restaurant.Name;
            bestAverageSalary = sallaryAverage;
         }

      }

      let bestRestaurant = restaurants.find(restourant => restourant.Name === bestRestaurantName)
      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      bestRestaurantParagraph.textContent=`Name: ${bestRestaurant.Name} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestRestaurant.workers[0].salary.toFixed(2)}`;

      let bestWorkersList=[];
      for (const worker of bestRestaurant.workers) {
         bestWorkersList.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      }
      bestWorkersParagraph.textContent=bestWorkersList.join(" ");
   }
}