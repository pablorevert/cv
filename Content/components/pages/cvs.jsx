import React from 'react';
import CardList from '../components/list.jsx'
import CvCard from '../components/cv-card.jsx'

let CvPage = props =>
    <div>
        <h1>Curriculum Vitaes</h1>
        <CardList url="/data/cv/index" card={CvCard}></CardList>
    </div>;

export default CvPage;