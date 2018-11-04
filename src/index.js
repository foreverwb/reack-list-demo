import React from 'react';
import ReactDOM from 'react-dom';

import FormSubmitAntd from "./c_form/FormAntd";
import ListSample from "./c_01/App";
import WizardSample from "./c_02/App";
import DndSample from "./dnd/sample";

import './index.css';
import "antd/dist/antd.css";

const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "260px",
};

const routeMap = {
	'list-page': ListSample,
	'wizard-sample': WizardSample,
	"form-submit-antd": FormSubmitAntd,
	"dnd-sample": DndSample
}
const Hello = () => (
	<div>
    <h1>Welcome to!</h1>
    <p>Click the left side menu to navigate.</p>
  </div>
)
class App extends React.PureComponent {
	handleLinkClick = key => {
		window.history.pushState(null, "", `/#/${key}`);
		this.forceUpdate();
	}
	render() {
		const currentPage = document.location.hash.replace(/#\/?/, '');

		let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/\/user\/\w+|\/list-page/)) {
      CurrentPage = ListSample;
		}
		if (currentPage.match(/\/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
		return (
				<div style={styles}>
					<ul className="menu-list">
						{ Object.keys(routeMap).map(key => (
							<li
								key={key} 
								className={key === currentPage ? 'is-avtice': ''}
								style={{listStyle: 'none'}}>
									<span className="link" onClick={() => this.handleLinkClick(key)}>
										{key}
									</span>
							</li>
						)) }
					</ul>
					<div style={{ padding: "20px 0"}}>
						<CurrentPage />
					</div>
				</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
