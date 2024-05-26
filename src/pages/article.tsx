// pages/article.tsx
import React from 'react';
import MainLayout from "@/components/layouts/MainLayouts";

const Article: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: 'Лучшие игры 2024 года',
            date: '24 мая в 16:17',
            image: 'http://localhost:3000/images/games.jpeg',
        },
        {
            id: 2,
            title: 'Как установить плагины в Discord',
            date: '23 мая в 10:18',
            image: 'https://steamuserimages-a.akamaihd.net/ugc/1813237323925310684/598E17D165F3FAD8D5BE7D9243488C724F9388DB/',
        },
    ];

    return (
        <MainLayout>
            <div className="w-full max-w-7xl mx-auto mb-10 p-4 flex flex-wrap justify-between">
                <div className="w-full md:w-2/3 p-4">
                    {/* Блок с автором */}
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <div className="flex items-center">
                            <img
                                src="https://avatars.dzeninfra.ru/get-zen_doc/2977209/pub_5efb3ff066fe1d5006536937_5efb4cc6551fcf6854400f5a/scale_1200"
                                alt="Author Avatar"
                                className="w-20 h-20 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Ванчикова Нарана</h2>
                                <p className="text-gray-600">Опубликовано 24 мая 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Основной текст статьи */}
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                        <h1 className="text-3xl font-bold mb-4">Лучшие игры 2024</h1>
                        <p className="mb-4">
                            2024 год стал невероятным для игровой индустрии. Были выпущены множество игр, каждая из которых
                            внесла свой уникальный вклад. Вот список лучших игр этого года.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">1. Cyberworld</h2>
                        <img src="https://image.winudf.com/v2/image1/Y29tLldlbmtseVN0dWRpby5DeWJlcldvcmxkX3NjcmVlbl8wXzE2MDY4NTQyNDlfMDM3/screen-0.jpg?fakeurl=1&type=.jpg" alt="Cyberworld" className="w-full rounded-lg mb-4" />
                        <p className="mb-4">
                            Cyberworld — это захватывающая игра в жанре киберпанк, которая поразила игроков своими графическими
                            возможностями и увлекательным сюжетом.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">2. Fantasy Quest</h2>
                        <img src="https://via.placeholder.com/600x300" alt="Fantasy Quest" className="w-full rounded-lg mb-4" />
                        <p className="mb-4">
                            Fantasy Quest предлагает игрокам погрузиться в мир магии и приключений. С разнообразным геймплеем и
                            потрясающими визуальными эффектами, эта игра быстро завоевала сердца игроков.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">3. Space Odyssey</h2>
                        <img src="https://via.placeholder.com/600x300" alt="Space Odyssey" className="w-full rounded-lg mb-4" />
                        <p className="mb-4">
                            Space Odyssey переносит игроков в глубины космоса, предлагая незабываемые космические путешествия и
                            эпические сражения.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">4. Mystery Manor</h2>
                        <img src="https://via.placeholder.com/600x300" alt="Mystery Manor" className="w-full rounded-lg mb-4" />
                        <p className="mb-4">
                            Mystery Manor — это игра в жанре мистического детектива, где игрокам предстоит расследовать
                            запутанные преступления и раскрывать тайны старинного особняка.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">5. Racing Legends</h2>
                        <img src="https://tabsgame.ru/screens/2022-09-15/615-screenshot-racing-legends.jpg" alt="Racing Legends" className="w-full rounded-lg mb-4" />
                        <p className="mb-4">
                            Racing Legends предлагает захватывающие гонки на высоких скоростях, реалистичную физику и
                            разнообразные трассы, что делает её одной из лучших гоночных игр года.
                        </p>
                    </div>

                    {/* Комментарии */}
                    <div className="bg-white border border-gray-300 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Комментарии</h2>
                        <div className="mb-4">
                            <div className="flex items-start mb-2">
                                <img
                                    src="https://yt3.ggpht.com/ytc/AMLnZu-jl2D2TLUleFblK77MlNae_kC2MwiWuTAeIlhN-g=s900-c-k-c0x00ffffff-no-rj"
                                    alt="Commenter Avatar"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">Алексей Иванов</h3>
                                    <p className="text-gray-600">Отличная статья! Мне особенно понравилась Fantasy Quest.</p>
                                    <p className="text-sm text-gray-400">Опубликовано 25 мая 2024</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <img
                                    src="https://onlyhdwallpapers.com/wallpaper/video-games-fallout-vault-2A3Q.jpg"
                                    alt="Commenter Avatar"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">Мария Смирнова</h3>
                                    <p className="text-gray-600">Cyberworld действительно впечатлила! Спасибо за рекомендации.</p>
                                    <p className="text-sm text-gray-400">Опубликовано 25 мая 2024</p>
                                </div>
                            </div>
                        </div>
                        <form className="mt-4">
              <textarea
                  className="w-full p-4 rounded-lg border border-gray-300"
                  placeholder="Оставьте комментарий"
              ></textarea>
                            <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4">Отправить</button>
                        </form>
                    </div>
                </div>

                {/* Боковой блок */}
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Недавние публикации</h2>
                        {posts.map(post => (
                            <div key={post.id} className="mb-4">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-sm text-gray-600">{`Опубликовано ${post.date}`}</p>
                                <img src={post.image} alt={post.title} className="w-full rounded-lg mt-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Article;
