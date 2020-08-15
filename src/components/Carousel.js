import React from 'react';

import pathway from '../assets/images/pathway.png'
import rap from '../assets/images/rap-robot.png'
import website from '../assets/images/gears.png'

import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Pathway!',
                    subtitle: '(2014) An iOS Game made with Objective C.',
                    imgSrc: pathway,
                    link: 'https://github.com/ajaykirtikar2/Pathway',
                    selected: false
                },
                {
                    id: 1,
                    title: 'AI Rap Bot',
                    subtitle: '(2020) An AI agent creating its own rap lyrics.',
                    imgSrc: rap,
                    link: 'https://github.com/ajaykirtikar2/AI-Rap',
                    selected: false
                },
                {
                    id: 2,
                    title: 'This Website',
                    subtitle: '(2020) How this site was made using React.',
                    imgSrc: website,
                    link: 'https://github.com/ajaykirtikar2/Portfolio-site',
                    selected: false
                },

            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }
        })

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;