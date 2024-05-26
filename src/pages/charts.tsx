// pages/admin.tsx
import React from 'react';
import MainLayout from "@/components/layouts/MainLayouts";
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const AdminPage: React.FC = () => {
    // Данные для линейного графика просмотров
    const lineData = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'Общие просмотры',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    // Данные для кругового графика популярности категорий
    const pieData = {
        labels: ['Технологии', 'Здоровье', 'Путешествия', 'Образование', 'Финансы'],
        datasets: [
            {
                label: 'Популярность категорий',
                data: [35, 45, 28, 39, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Данные для нового столбчатого графика просмотров по категориям
    const categoryViewsData = {
        labels: ['Технологии', 'Здоровье', 'Путешествия', 'Образование', 'Финансы'],
        datasets: [
            {
                label: 'Просмотры по категориям',
                data: [200, 150, 100, 250, 300],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Данные для нового графика типа "пончик" для новых пользователей
    const doughnutData = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'Новые пользователи',
                data: [15, 29, 80, 51, 56, 75],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Опции для графиков
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Статистика сайта',
            },
        },
    };

    return (
        <MainLayout>
            <div className="w-full max-w-7xl mx-auto mb-10 p-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Общие просмотры</h3>
                        <Line data={lineData} options={options} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Популярность категорий</h3>
                        <Pie data={pieData} options={options} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Просмотры по категориям</h3>
                        <Bar data={categoryViewsData} options={options} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Новые пользователи</h3>
                        <Doughnut data={doughnutData} options={options} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AdminPage;
