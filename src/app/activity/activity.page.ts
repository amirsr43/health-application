import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  steps: number = 10000;
  distance: number = 8;
  calories: number = 400;
  activityHistory = [
    { date: '2024-06-01', steps: 9500, distance: 7.6, calories: 380 },
    { date: '2024-06-02', steps: 10500, distance: 8.4, calories: 420 },
    // Tambahkan lebih banyak data sesuai kebutuhan
  ];

  constructor() {}

  ngOnInit() {
    this.createStepChart();
  }

  createStepChart() {
    const canvas = document.getElementById('stepChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
            datasets: [
              {
                label: 'Langkah Harian',
                data: [9500, 10500, 10200, 11000, 12000, 11500, 12500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }
}
