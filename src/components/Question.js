import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
    const [quizState,dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log("currentQuestion", currentQuestion);
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer answerText={answer}
                            index={index}
                            key={index}
                            correctAnswer={currentQuestion.correctAnswer}
                            currentAnswer={quizState.currentAnswer}
                            onSelectAnswer={(answerText) => dispatch({type: 'SELECT_ANSWER', payload: answerText})}/>
                ))}
            </div>
        </div>
    );
};

export default Question;
