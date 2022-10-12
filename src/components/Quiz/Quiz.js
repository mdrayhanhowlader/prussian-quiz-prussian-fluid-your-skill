import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';




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
            toast.info("Answer is correct", {autoClose: 500})
        }
        else {
            toast.warning("Answer is inCorrect", {autoClose: 500})
        }
    }
  

    return (
        <div>
            <h2 className='text-center text-2xl'>Quizzes: {items.total}</h2>
            <div className='w-3/5 mx-auto mt-32'>
                {
                    questions.map(item => 
                    <div key={item.id} className='bg-slate-200 p-4 mb-4 rounded-md'>
                        <h2 className='font-bold'>{item.question.slice(3, -4)}</h2>
                        
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400'>
                            <input name={item.id} id={item.options[0]} type="radio" />

                            <label onClick={() => handler(item.options[0], item.correctAnswer)} for={item.options[0]}>{item.options[0]}</label>

                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400'>
                            <input name={item.id} id={item.options[1]} type="radio" />
                            <label onClick={() => handler(item.options[1], item.correctAnswer)} for={item.options[1]}>{item.options[1]}</label>
                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400'>
                            <input name={item.id} id={item.options[2]} type="radio" />
                            <label onClick={() => handler(item.options[2], item.correctAnswer)} for={item.options[2]}>{item.options[2]}</label>
                        </h4>
                        <h4 className='px-4 py-2 border border-1 border-red-500 rounded-2xl my-2 hover:bg-slate-400'>
                            <input name={item.id} id={item.options[3]} type="radio" />
                            <label onClick={() => handler(item.options[3], item.correctAnswer)} for={item.options[3]}>{item.options[3]}</label>
                        </h4>
                        <p className='text-center' onClick={() => showCorrectAnswer(item.correctAnswer)}>Show Correct Answer</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;