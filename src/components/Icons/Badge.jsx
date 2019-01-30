// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";


// jss:
const styles = (theme) => ({
	root: {
		width: "18px",
		marginLeft: "2px",
		marginRight: "2px",
	},
});

class Badge extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		let src = "https://twitchplaysnintendoswitch.com/images/badges/";
		let text;

		switch (this.props.type) {
			case "dev":
				src += "DevBadge.png";
				text = "The Developer.";
				break;
			case "admin":
				src += "AdminBadge.png";
				text = "Administrator.";
				break;
			case "mod":
				src += "ModBadge.png";
				text = "Moderator.";
				break;
			case "plus":
				src += "PlusBadge.png";
				text = "This user can use Plus.";
				break;
			case "sub1":
				src += "SubBadge1.png";
				text = "Subscriber for 1 month(+).";
				break;
		}

		return (
			<Tooltip title={text} placement="top">
				<img className={classes.root} src={src}/>
			</Tooltip>
		);
	}

}

export default compose(
	withStyles(styles),
)(Badge);