import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className={"flex justify-center"}>
      <section className={"w-full max-w-screen-xl"}>
          <h1 className={"text-3xl font-extrabold mb-10"}>Ваша лента ✨</h1>

          <div className={"flex justify-between gap-12"}>
              <div className={"w-8/12 flex gap-12 flex-col"}>
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

              <div className={"w-4/12"}>
                  <div className={"font-semibold text-2xl mb-4"}>
                      Журнал дня
                  </div>

                  <div className="mb-8 flex flex-col ">
                      <Link href="/journal" className="w-6/12">
                          <img src="/images/journal.jpg" className="rounded w-full h-auto" alt="Journal 1"/>

                          <div className={"mt-2 text-xl"}>
                              <span className={"font-bold"}>$ 69</span>
                          </div>
                      </Link>
                  </div>


                  <div className={"font-semibold text-2xl mb-4"}>
                      Рекомендованные топики
                  </div>

                  <div className={"flex flex-wrap flex-row gap-4"}>
                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          Игры
                      </Link>

                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          IT
                      </Link>

                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          Спорт
                      </Link>

                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          Здоровье
                      </Link>

                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          Стартап
                      </Link>

                      <Link href={"/"} className={"rounded-md bg-slate-200 p-2"}>
                          Дизайн
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
