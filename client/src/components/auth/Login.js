import React, { useState } from 'react';
import { connect } from "react-redux";

import { loggedIn } from "../../store/actions/auth-actions";

function Login({ loggedIn }) {
    // Fake log in for testing
    function handleLogin() {
        loggedIn();
    }

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        loggedIn: () => dispatch(loggedIn())
    };
}

export default connect(null, mapDispatchToProps)(Login);
