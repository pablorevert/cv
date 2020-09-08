import React from 'react';

export default class CVListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
       // this.handleEditBtn = this.handleEditBtn.bind(this);

        this.state.data = [
            {
                'title': 1,
                'creationDate': '03/05/2020',
                'updateDate': '15/08/2019'
            },
            {
                'title': 2,
                'creationDate': '15/06/2020',
                'updateDate': '20/08/2019'
            }
        ];
    }
    render() {
        return (
            <div>
                {this.state.data.map((cv, i) =>
                    <div key={i}>
                        <p>{cv.title}</p>
                        <span>{cv.updateDate}</span>
                    </div>
                    <button>Editar</button>
            )}
            </div>
        );
    }
}