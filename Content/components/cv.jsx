import React from 'react';

export default class CVComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {} };

        this.state.data = 
            {
                'title': 2,
                'creationDate': '15/06/2020',
                'updateDate': '20/08/2019',
                'id': 36
        };
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h4 className="commentBox"></h4>
                <div>
                    <div>
                        <p>{this.state.data.title}</p>
                        <span>{this.state.data.updateDate}</span>
                    </div>
                </div>
                <button onClick={() => this.goBack()}>Atrás</button>
            </div>
        );
    }
}