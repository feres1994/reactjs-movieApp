import React from "react"

const spinerHoc = Component => {
    return class spinerHoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({ display: false })
            }, 3000);
        }

        render() {
            return (this.state.display ? (<div className="row align-items-center justify-content-center myrow"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)

                : (<Component  {...this.props} />)

            );
        }

    }

}
export default spinerHoc