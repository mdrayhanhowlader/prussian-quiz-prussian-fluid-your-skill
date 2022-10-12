import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        }, 
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        }, 
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
