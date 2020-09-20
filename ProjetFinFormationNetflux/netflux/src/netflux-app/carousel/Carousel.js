import React, { Component } from "react"
import Arrow from "./Arrow"
import Slide from "./Slide"
import Indicator from "./Indicator"

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slides: [
                { title: 'titre Silde 1', content: 'Content slide 1', image: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/116740/CCP_IMG_ORIGINAL/1515395.jpg' },
                { title: 'titre Silde 2', content: 'Content slide 2', image: 'https://img.huffingtonpost.com/asset/5e30d8472400001b060b6384.jpeg?cache=XgAczkErO0&ops=crop_193_184_1071_763,scalefit_630_noupscale' },
                { title: 'titre Silde 3', content: 'Content slide 3', image: 'https://img.huffingtonpost.com/asset/5da0a15521000042073443dc.jpeg?ops=scalefit_630_noupscale' },
            ],
            indexActivation: undefined,
            style: {

            },
            styleContainer: {

            }
        }
    }

    componentDidMount() {
        this.setState({
            indexActivation: 0,
            styleContainer: {
                width: (this.state.slides.length * 830) + 'px'
            },
            style: {
                width: (810) + 'px',
                textAlign: 'center'
            }
        })
    }

    leftClick = () => {
        let tmpIndex = this.state.indexActivation - 1
        let valueTranslate = -tmpIndex * 810
        if (this.state.indexActivation == 0) {
            tmpIndex = this.state.slides.length - 1
            valueTranslate = this.state.slides.length - 1
        }
        this.setState({
            indexActivation: tmpIndex
        })
        this.setState({
            styleContainer: { ...this.state.styleContainer, transitionDuration: '1s', marginLeft: '' + valueTranslate + 'px' }
        })
    }

    rightClick = () => {
        let tmpIndex = this.state.indexActivation + 1
        let valueTranslate = -tmpIndex * 810
        if (this.state.indexActivation == this.state.slides.length - 1) {
            tmpIndex = 0
            valueTranslate = 0
        }
        this.setState({
            indexActivation: tmpIndex
        })
        this.setState({
            styleContainer: { ...this.state.styleContainer, transitionDuration: '1s', marginLeft: '' + valueTranslate + 'px' }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <Arrow type='left' click={this.leftClick} />

                    <div className='col-9' style={{ overflowX: 'hidden' }}>
                        <div className="container-carousel" style={this.state.styleContainer}>
                            {this.state.slides.map((s, i) => {
                                return (
                                    <Slide index={i} title={s.title} content={s.content} image={s.image} indexActivation={this.state.indexActivation} />
                                )
                            })}
                        </div>
                    </div>

                    <Arrow type='right' click={this.rightClick} />

                </div>

                <Indicator max={this.state.slides.length} indexActivation={this.state.indexActivation} />

            </div>
        )
    }
}

export default Carousel