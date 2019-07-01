import React from 'react';
import PropTypes from "prop-types";

class Flow extends React.Component {
    render() {
        return(
            <li className={this.props.isActive ? 'active' : 'inActive'}>
                <div>
                    <div className="circle">
                        <h3>
                        {
                            this.props.isCompleted
                            ?
                            <i class="fas fa-check"></i>
                            :
                            this.props.flowNumber
                        }
                        </h3>
                    </div>
                    <h3>{this.props.title}</h3>
                </div>
            </li>
        )
    }
}

Flow.propTypes = {
    flowNumber: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default Flow;