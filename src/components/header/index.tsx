import * as React from "react";

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <header className="grid-x">
                <div className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1">
                    <h2>Charity FIFA World Cup <span style={{color: '#577b98'}}>2018</span></h2>
                </div>
            </header>
        )
    }
}