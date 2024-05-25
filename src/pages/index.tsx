import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayouts";
import { FaNewspaper, FaFire, FaEye, FaComment, FaSquarePersonConfined } from "react-icons/fa6";

import { Comfortaa, Exo_2 } from "next/font/google";
import Image from "next/image";

const comfortaa = Comfortaa({
    subsets: ["latin"]
})

const exo_2 = Exo_2({
    subsets: ["latin"]
});

const articles = [
    {
        title: 'Лучшие игры 2024 года',
        short_description: 'From LLMs transforming the modern data stack to data observability for vector databases, here are my predictions for the top data engineering trends in 2024. — “The data and AI space moves fast. If you',
        category: 'Игры',
        read_time: 6,
        created_at: '23 мая, 2024',
        author: {
            name: 'v1adjkee666',
            avatar: '/images/avatar.jpg'
        }
    },

    {
        title: 'Лучшие игры 2024 года',
        short_description: 'From LLMs transforming the modern data stack to data observability for vector databases, here are my predictions for the top data engineering trends in 2024. — “The data and AI space moves fast. If you',
        category: 'Игры',
        read_time: 6,
        created_at: '23 мая, 2024',
        author: {
            name: 'v1adjkee666',
            avatar: '/images/avatar.jpg'
        }
    },

    {
        title: 'Лучшие игры 2024 года',
        short_description: 'From LLMs transforming the modern data stack to data observability for vector databases, here are my predictions for the top data engineering trends in 2024. — “The data and AI space moves fast. If you',
        category: 'Игры',
        read_time: 6,
        created_at: '23 мая, 2024',
        author: {
            name: 'v1adjkee666',
            avatar: '/images/avatar.jpg'
        }
    },
];

const Home: React.FC = () => {
    return (
        <MainLayout>
            <div className={"w-full max-w-7xl mx-auto mb-10 flex flex-wrap justify-between"}>
                <div className={`${exo_2.className} w-full publicationsSelector`}>
                    <Link href={""} className={"active"}>
                        Все издания
                    </Link>

                    <Link href={""}>
                        Журналы
                    </Link>

                    <Link href={""}>
                        Статьи
                    </Link>

                    <Link href={""}>
                        Книги
                    </Link>
                </div>

                <div className={"w-8/12 flex flex-wrap gap-4"}>
                    {articles.map((article, index) => (
                        <div key={index} className={"border-b pb-4 border-slate-150 bg-white p-4 rounded"}>
                            <div className={"flex items-center text-sm mb-4"}>
                                <Image className={"rounded-full"} src={article.author.avatar} alt={`Аватарка пользователя ${article.author.name}`} width={24} height={24}></Image>

                                <Link href={`/users/${article.author.name}`} className={"ml-2"}>
                                    {article.author.name} •
                                </Link>

                                <span className={"text-gray-600 ml-1"}>{article.created_at}</span>
                            </div>

                            <div className={"flex flex-row gap-12"}>
                                <div className={"w-8/12"}>
                                    <div className={"text-2xl font-semibold mb-2"}>{article.title}</div>
                                    <div className={""}>{article.short_description}</div>
                                </div>

                                <div className={"w-4/12 flex items-center justify-center"}>
                                    <img src={"/images/games.jpeg"} className={"rounded h-24"}></img>
                                </div>
                            </div>

                            <div className={"mt-6 text-sm"}>
                                <Link href={`/categories/${article.category}`} className={"rounded-md bg-slate-200 p-1 pl-2 pr-2"}>
                                    {article.category}
                                </Link>

                                <span className={"text-gray-600 ml-2"}>• {article.read_time} минут</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"w-3/12"}>
                    <div className={"font-bold text-2xl mb-4"}>
                        Рекомендованные топики
                    </div>

                    <div className={"flex flex-wrap flex-row gap-4 mb-6"}>
                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            Игры
                        </Link>

                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            IT
                        </Link>

                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            Спорт
                        </Link>

                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            Здоровье
                        </Link>

                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            Стартап
                        </Link>

                        <Link href={"/"} className={"rounded-md bg-gray-100 p-2"}>
                            Дизайн
                        </Link>
                    </div>

                    <div className={"font-bold text-2xl mb-4"}>
                        Читают сейчас
                    </div>

                    <div className={"flex flex-col gap-6 rounded mb-4"}>
                        <div className={"bg-gray-100 rounded p-2 px-4"}>
                            <div className={"text-lg"}>Памятка наёмного работника</div>

                            <div className={"mt-3 flex flex-wrap gap-4 text-gray-500 text-sm"}>
                                <div className={"flex gap-2 items-center"}>
                                    <FaEye/> 27K
                                </div>

                                <div className={"flex gap-2 items-center"}>
                                    <FaComment/> 200
                                </div>
                            </div>
                        </div>

                        <div className={"bg-gray-100 rounded p-2 px-4"}>
                            <div className={"text-xl"}>Памятка наёмного работника</div>

                            <div className={"mt-3 flex flex-wrap gap-4 text-gray-500 text-sm"}>
                                <div className={"flex gap-2 items-center"}>
                                    <FaEye/> 27K
                                </div>

                                <div className={"flex gap-2 items-center"}>
                                    <FaComment/> 200
                                </div>
                            </div>
                        </div>

                        <div className={"bg-gray-100 rounded p-2 px-4"}>
                            <div className={"text-xl"}>Памятка наёмного работника</div>

                            <div className={"mt-3 flex flex-wrap gap-4 text-gray-500 text-sm"}>
                                <div className={"flex gap-2 items-center"}>
                                    <FaEye/> 27K
                                </div>

                                <div className={"flex gap-2 items-center"}>
                                    <FaComment/> 200
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"font-bold text-2xl mb-4"}>
                        Автор дня
                    </div>

                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex gap-4 rounded bg-gray-100 p-2  rounded"}>
                            <img src={"/images/avatar.jpg"} className={"rounded w-8 h-8"}></img>

                            <div className={"flex justify-center items-center"}>
                                v1adjkee666
                            </div>

                            <div className={"ml-auto flex font-bold items-center"}>
                                69 <FaFire className={"ml-1 text-red-500"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;
