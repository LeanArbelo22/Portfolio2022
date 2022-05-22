import './animate-letters.scss';

const AnimateLetters = ({ letterClass, stringArray, index }) => {

    return (
        <span>
            {
                stringArray.map((character, i) => (
                    <span key={character + i} className={`${letterClass} _${i + index}`}>
                        {character}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimateLetters;