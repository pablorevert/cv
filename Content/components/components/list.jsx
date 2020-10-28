import React from 'react';
import PropTypes from 'prop-types'; 

export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const Item = this.props.card;
        if (error) 
            return <div>Error: {error.message}</div>;
        else if (!isLoaded) 
            return <div>Loading...</div>;
        else 
            return <div>
            {
                this.state.items.map((cv, index) =>
                    <Item key={index} value={cv} index={index}></Item>)  
            }
            </div>;
    }
}

CardList.defaultProps = {
    /* Aca van los default si los hubieran */
}

CardList.propTypes = {
    card: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired
}
