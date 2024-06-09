import { Component } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage {
  foodName: string = '';
  calories: number | null = null;
  foodLog: { name: string; calories: number }[] = [];
  totalCalories: number = 0;
  mealPlan = {
    breakfast: 'Oatmeal dengan buah',
    lunch: 'Salad ayam',
    dinner: 'Ikan panggang dengan sayuran'
  };

  addFood() {
    if (this.foodName && this.calories !== null) {
      this.foodLog.push({ name: this.foodName, calories: this.calories });
      this.totalCalories += this.calories;
      this.foodName = '';
      this.calories = null;
    }
  }
}
