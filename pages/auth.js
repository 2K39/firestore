import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/initfirebase";


import {Container, Row, Col, Button , Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <Container>
        <h1>Pineapple Login</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
      
  );
}

export default SignInScreen;