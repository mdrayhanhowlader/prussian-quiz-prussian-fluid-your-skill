import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = () => {
    const items = useLoaderData().data
    const {questions} = items
    const [answer, setAnswer] = useState([])
    const showCorrectAnswer = (item) => {
        setAnswer(item)
       toast.info(answer, {autoClose: 500})
    }


    const handler = (item, itemAnswer) => {
        if(item === itemAnswer){
           return toast.success("Answer is correct", {autoClose: 500})
        }
        else {
          return toast.warning("Answer is inCorrect", {autoClose: 500})
        }
    }
  

    return (
        <div>
            <h2 className='text-center text-3xl pt-4 font-semibold text-purple-500'>Quiz of {items.name}</h2>
            <div className='w-3/5 mx-auto mt-16 grid md:grid-cols-2 gap-4'>
                {
                    questions.map(item => 
                    <div key={item.id} className='bg-violet-100 p-12 mb-6 rounded-sm shadow-violet-200 shadow-lg'>

                        <p className='flex justify-end'>
                            <EyeIcon className='w-6 h-6' onClick={() => showCorrectAnswer(item.correctAnswer)}></EyeIcon>
                        </p>

                        <h2 className='font-bold text-slate-900'>{item.question.slice(3, -4)}
                        </h2>
                        
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400 text-center'>
                            <input className='mr-4' name={item.id} id={item.options[0]} type="radio" />

                            <label onClick={() => handler(item.options[0], item.correctAnswer)} for={item.options[0]}>{item.options[0]}</label>

                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400 text-center'>
                            <input className='mr-4' name={item.id} id={item.options[1]} type="radio" />
                            <label onClick={() => handler(item.options[1], item.correctAnswer)} for={item.options[1]}>{item.options[1]}</label>
                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400 text-center'>
                            <input className='mr-4' name={item.id} id={item.options[2]} type="radio" />
                            <label onClick={() => handler(item.options[2], item.correctAnswer)} for={item.options[2]}>{item.options[2]}</label>
                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400 text-center'>
                            <input className='mr-4' name={item.id} id={item.options[3]} type="radio" />
                            <label onClick={() => handler(item.options[3], item.correctAnswer)} for={item.options[3]}>{item.options[3]}</label>
                        </h4>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;