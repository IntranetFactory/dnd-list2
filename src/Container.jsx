import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';

const style = {
    width: 400,
};

export const Container = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Write a cool JS library',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others). Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '??? Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
            {
                id: 8,
                text: 'Write a cool JS library. Spam in Twitter and IRC to promote it (note that this element is taller than the others). Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 9,
                text: 'Make it generic enough',
            },
            {
                id: 10,
                text: 'Write README',
            },
            {
                id: 11,
                text: 'Create some examples',
            },
            {
                id: 12,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 13,
                text: '???',
            },
        ]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />);
        };
        return (<>
            <div style={style} class="container">{cards.map((card, i) => renderCard(card, i))}</div>
        </>);
    }
};
