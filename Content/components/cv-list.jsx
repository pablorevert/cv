import React from 'react';

export default class CVListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.state.data = [
            {
                'title': 1,
                'creationDate': '03/05/2020',
                'updateDate': '15/08/2019',
                'id': 24
            },
            {
                'title': 2,
                'creationDate': '15/06/2020',
                'updateDate': '20/08/2019',
                'id': 36
            }
        ];
    }

    goToCv(id) {
        console.log(id +'ok')
    }

    render() {
        return (
            <div>
                <h4 className="commentBox"></h4>
                <div>
                    {this.state.data.map((cv, i) =>
                        <div key={i}>
                            <div>
                                <p>{cv.title}</p>
                                <span>{cv.updateDate}</span>
                            </div>
                            <button onClick={() => this.goToCv(cv.id)}>Editar</button>
                        </div>
                        )}
                </div>
            </div>
        );
    }
}