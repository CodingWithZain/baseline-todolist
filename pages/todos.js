import React, { useEffect, useState } from "react";

const todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);

  const deleteTodo = (title) => {
    let newTodos = todos.filter((item) => {
      return item.title != title;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const editTodo = (first) => {
    second;
  };
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-10 bg-slate-700 text-white">
          <h1 class="text-2xl font-medium title-font mb-2 text-white">
            YOUR TODO LIST HERE
          </h1>
          {todos.length == 0 && (
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              All TODOS LIST will be shown here.
            </p>
          )}
        </div>
        <div class="flex flex-wrap -m-4">
          {todos.map((item) => {
            return (
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={`https://picsum.photos/600/900?a=${item.title}`}
                  />
                  <div class="mt-4">
                    <h2 class="title-font font-medium text-lg">{item.title}</h2>
                    <p class="max-w-[40ch] text-sm text-gray-500">
                      {item.desc}
                    </p>
                    <span class="inline-flex">
                      <a
                        class="text-gray-500 cursor-pointer"
                        onClick={() => {
                          deleteTodo(item.title);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                      <a
                        class="ml-2 text-gray-500 cursor-pointer"
                        href={`/edit/${item.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default todos;
