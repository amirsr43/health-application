import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dailySteps: number = 7500;
  caloriesBurned: number = 500;
  waterIntake: number = 2; // in liters
  workoutRecommendations: string[] = [
    '30-minute yoga session',
    '15-minute HIIT workout',
    '20-minute meditation'
  ];
  healthTips: string[] = [
    'Stay hydrated by drinking at least 2 liters of water daily.',
    'Incorporate a mix of cardio and strength training in your workouts.',
    'Get at least 7-8 hours of sleep every night.'
  ];

  constructor(private alertController: AlertController) {}

  async logFood() {
    const alert = await this.alertController.create({
      header: 'Log Makanan',
      message: 'Fitur log makanan belum tersedia.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async logExercise() {
    const alert = await this.alertController.create({
      header: 'Log Latihan',
      message: 'Fitur log latihan belum tersedia.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async logWater() {
    const alert = await this.alertController.create({
      header: 'Log Air',
      message: 'Fitur log air belum tersedia.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
