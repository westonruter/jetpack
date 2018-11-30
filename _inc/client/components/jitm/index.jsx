/**
 * External dependencies
 */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import analytics from 'lib/analytics';
import { getJitm } from 'state/jitm';

class Jitm extends Component {
	componentDidMount() {
		analytics.tracks.recordEvent(
			'jetpack_jitm_view',
			// to-do: replace by unique ID of the JITM.
			{ version: this.props.version }
		);
	}

	render() {
		console.log( this.props.Jitm );
		//const mainClasses = `jitm-card jitm-banner is-upgrade-premium ${ message.content.classes }`;
		return (
			<div>
				{ this.props.Jitm &&
					<div>plop</div>
				}
			</div>
		);
	}
}

Jitm.propTypes = {
	Jitm: PropTypes.object.isRequired,
};

Jitm.defaultProps = {
	Jitm: {},
};

export default connect(
	state => {
		return {
			Jitm: getJitm( state ),
		};
	}
)( Jitm );
