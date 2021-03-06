// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import CheckboxSettings from "components/stream/CheckboxSettings.jsx";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		// padding: "0px 0px 25px 0px !important",
		padding: "0 !important",
	},
});

class Site extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<CheckboxSettings />
			</div>
		);
	}
}

export default compose(withRouter, withStyles(styles))(Site);
