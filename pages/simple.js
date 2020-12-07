import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Temp from '../components/temp';


export default class Simple extends Component{

    static async getInitialProps(){
        const request = await fetch('https://api.github.com/users/aklyny')
        const data = await request.json()
        return{
            user:data
        }
    }
    render(){
        const {user} = this.props;
        return(
            <div>
               <Temp user={user} />


               <style>
                   {
                       `
                       img{
                           pointer-events:none;
                       }
                       `
                   }
               </style>
            </div>
        )
    }
}


