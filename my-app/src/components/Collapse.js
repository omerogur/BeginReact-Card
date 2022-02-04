//ilk constructor  çalışıyor --> state initialization
// render metodu ilk defa çalıştı
// onClick eventi çalıştı(showMore metodu çalıştır)
//setState ile state'i update ettik  -->triggerede runder()  yani runder metodunu tekrar calıstırdık

import React from "react";
//state nesnesi direkt değiştirilemez setState ile değiştirilir.
class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: true
        }
        //bind ile Collapse thisini showMore bağladık(show more içerisindeki this collapse refer edecek)
        //this.showMore = this.showMore.bind(this)
    }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })  //ilk durumunun tersini yap
    }

    componentDidMount(){
        console.log("component mount calıstı")
    }
    componentDidUpdate(){
        console.log("component update calıstı")
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                
                {React.Children.map(this.props.children,children => children.props.cardTitle)}
                </button>
                {       //ternary if/else  childiren collaps içindeki component(cocugu)
                    this.state.showContent ? (<div className="collapse show">
                     {/* this.props.childiren ile aynı işlevi görüyor. */}
                    {React.Children.map(this.props.children,children => children)}
                        </div>) : null
                }

            </div>
        );
    }


}

export default Collapse;