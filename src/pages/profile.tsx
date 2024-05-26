// pages/profile.tsx
import React from 'react';
import MainLayout from "@/components/layouts/MainLayouts";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const UserProfilePage: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: 'Лучшие игры 2024 года',
            date: '24 мая в 16:17',
            image: 'http://localhost:3000/images/games.jpeg',
            category: 'Игры',
        },
        {
            id: 2,
            title: 'Как установить плагины в Discord',
            date: '23 мая в 10:18',
            image: 'https://steamuserimages-a.akamaihd.net/ugc/1813237323925310684/598E17D165F3FAD8D5BE7D9243488C724F9388DB/',
            category: 'IT'
        },
    ];

    return (
        <MainLayout>
            <div className="w-full max-w-7xl mx-auto mb-10 p-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
                        <div className={"bg-green-100 py-1 px-4 text-sm mb-6 rounded ml-auto text-green-800 w-fit"}>
                            В сети
                        </div>

                        <img
                            src="https://avatars.dzeninfra.ru/get-zen_doc/2977209/pub_5efb3ff066fe1d5006536937_5efb4cc6551fcf6854400f5a/scale_1200"
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-center">Ванчикова Нарана </h2>
                        <p className="text-center text-gray-600">Разработчик сайта</p>
                        <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4">Подписаться</button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                            <div className="flex justify-between">
                                <p className="bg-gray-200 py-1 px-4 rounded">{post.date}</p>
                                <div>
                                    <button className="text-blue-500 hover:underline mr-2">Обсудить</button>
                                    <button className="text-blue-500 hover:underline">В закладки</button>
                                </div>
                            </div>
                            <h3 className="text-3xl mb-6 mt-4 font-bold">{post.title}</h3>
                            <img src={post.image} alt={post.title} className="w-full rounded-lg h-[200px] object-cover" />
                            <div className={"flex justify-between"}>
                                <div className={"mt-6 bg-gray-200 py-1 px-4 rounded"}>
                                    {post.category}
                                </div>

                                <div className={"flex justify-between mt-6 gap-4 items-center"}>
                                    <div className={"bg-green-200 py-2 px-2 text-green-700 font-bold rounded"}><FaArrowUp /></div>
                                    <div>2</div>
                                    <div className={"bg-red-200 py-2 px-2 text-red-700 font-bold rounded"}><FaArrowDown /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default UserProfilePage;
